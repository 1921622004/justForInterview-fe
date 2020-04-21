import { Component, OnInit, ElementRef, Inject, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from '@angular/material/snack-bar';
import { TagService } from 'src/app/shared/service/tag.service';
import { ITagModel } from 'src/app/shared/interfaces/tag';
import { IResponseBody } from 'src/app/shared/interfaces/http';
import { Router } from '@angular/router';

interface TagDialogData {
  chosedTag: string;
}

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.scss']
})
export class NewQuestionComponent implements OnInit {

  private editorEle: HTMLDivElement;

  private editor: any;

  public questionForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(50)]],
    content: [''],
    rawContent: ['']
  })

  private chosedTag = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private el: ElementRef<HTMLDivElement>,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    import('@toast-ui/editor').then(module => {
      const Editor = module.default;
      this.editor = new Editor({
        el: this.el.nativeElement.querySelector('#content-editor'),
        height: '600px',
        initialEditType: 'markdown',
        hideModeSwitch: true,
        placeholder: '详细描述您遇到的面试题',
        previewStyle: 'vertical',
        events: {
          blur: () => {
            if (!this.editor.getHtml()) {
              this.questionForm.get('content').setErrors({ required: true });
            } else {
              this.questionForm.get('content').setErrors(null);
            }
          },
          change: () => {
            this.questionForm.patchValue({
              content: this.editor.getHtml(),
              rawContent: this.editor.getMarkdown(),
            })
          }
        }
        // previewStyle: 'vertical'
      });
    })
  }

  public openTagEdit(): void {
    const tagDialogRef = this.dialog.open(TagDialogComponent, {
      width: '800px',
      disableClose: true,
      data: { chosedTag: this.chosedTag }
    });
    tagDialogRef.beforeClosed().subscribe((result) => {
      if (typeof result === 'undefined') {
        tagDialogRef.close();
      } else {
        if (!result) {
          this.snackBar.open('请先选择一个标签', null, { verticalPosition: 'top', duration: 2000 });
          return
        }
        const title = this.questionForm.get('title').value;
        const content = this.questionForm.get('content').value;
        const rawContent = this.questionForm.get('rawContent').value;
        this.http.post<IResponseBody<number>>('/api/question/create', { title, content, rawContent, tagCode: result }).subscribe((result) => {
          if (result && result.success) {
            tagDialogRef.close();
            this.snackBar.open('提交成功了', null, { verticalPosition: 'top', duration: 2000 });
            this.router.navigate([`/question/detail/${result.data}`]);
          } else {
            this.snackBar.open(result ? result.message : '提交失败', null, { verticalPosition: 'top', duration: 2000 });
          }
        })
      }
    });
  }

}

@Component({
  selector: 'tag-dialog',
  templateUrl: './tag-dialog.html'
})
export class TagDialogComponent {
  public chosedTag: string;

  constructor(
    private tagService: TagService,
    @Inject(MAT_DIALOG_DATA) public data: TagDialogData
  ) {
    this.chosedTag = data.chosedTag;
  }

  get tags(): ITagModel[] {
    return this.tagService.tags;
  }

  public tabChangeHandler(index: number): void {
    this.tagService.getTagsByParentCode(this.tagService.tags[index].tagCode);
  }

  tagChoseHandler(tagCode: string) {
    this.chosedTag = tagCode;
  }
}