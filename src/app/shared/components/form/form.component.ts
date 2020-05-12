import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';
import { QuestionControlService } from '../../services/question-control.service';
import { QuestionService } from '../../services/question.service';
import { BaseQuestion } from '../formTypes/question-base.class';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  providers: [ QuestionControlService, QuestionService ]
})
export class FormComponent implements OnInit {
  @Input() step$ = [{name: 'Intro'},{name: 'Applicant Information'},{name: 'Project Details'}];
  @Input() formName: string;
  stepperFormGroup: FormGroup;
  payLoad = '';
  questions$: Observable<Array<BaseQuestion<any>>>;

  constructor(
    readonly service: QuestionService,
    readonly qcs: QuestionControlService) {  }

  ngOnInit(): void {
    this.questions$ = this.service.getApplicationIntro();
    this.questions$.subscribe(qs => this.stepperFormGroup = this.qcs.toFormGroup(qs));
  }
  onSubmit(): void {
    this.payLoad = JSON.stringify(this.stepperFormGroup.getRawValue());
  }
}
