import { Component, OnInit, ContentChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import "quill/dist/quill.core.css";
import 'quill/dist/quill.snow.css';

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
    private el: ElementRef<HTMLDivElement>
  ) { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    import('quill').then(module => {
      const Quill = module.default;
      this.editor = new Quill('#content-editor', {
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'link'],
            ['image', 'code-block', { list: 'ordered' }, { list: 'bullet' }]
          ]
        },
        placeholder: '详细描述您所遇到的问题',
        theme: 'snow'  // or 'bubble'
      });
      this.editor.on('text-change', (delta, ...args) => {
        console.log(this.editor.getText());
        console.log(this.editor.getContents());

      });
      this.editor.on('selection-change', (range, oldRange, ) => {
        const contentControl = this.questionForm.get('content');
        if (range) {
          contentControl.setErrors(null);
        } else {
          if (!contentControl.value) {
            contentControl.setErrors({ required: true });
          }
        }
      })
    })
  }

  public openTagEdit(): void {

  }

}
