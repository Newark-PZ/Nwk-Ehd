import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BaseQuestion } from '../components/formTypes/question-base.class';

@Injectable()
export class QuestionControlService {
  toFormGroup(questions: Array<BaseQuestion<any>> ): FormGroup {
    const group: any = {};
    // tslint:disable: no-non-null-assertion no-unnecessary-type-assertion
    questions.forEach(question => {
        group[question.key] = new FormControl(question.value || '');
  });

    return new FormGroup(group);
  }
}
