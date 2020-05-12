import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { BaseQuestion } from '../formTypes/question-base.class';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html'
})
export class QuestionComponent {
  @Input() question: BaseQuestion<any>;
  @Input() form: FormGroup;
  arrayItems;
  get isValid(): boolean { return this.form.controls[this.question.key].valid; }
}
