import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from '@angular/material/snack-bar';
import { TagService } from 'src/app/shared/service/tag.service';
import { ITagModel } from 'src/app/shared/interfaces/tag';

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

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private el: ElementRef<HTMLDivElement>,
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
    const tagDialogRef = this.dialog.open(TagDialog, {
      width: '600px'
    });
  }

}

@Component({
  selector: 'tag-dialog',
  templateUrl: './tag-dialog.html'
})
export class TagDialog {
  constructor(
    private tagService: TagService
  ) { }

  public tabChangeHandler(index: number): void {
    this.tagService.getTagsByParentCode(this.tagService.tags[index].tagCode);
  }
}