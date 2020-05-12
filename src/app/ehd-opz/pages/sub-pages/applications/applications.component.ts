import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionService } from '../../../../shared';
import { BaseQuestion } from '../../../../shared/components/formTypes/question-base.class';

@Component({
  selector: 'app-resources-applications',
  templateUrl: './applications.component.html'
})

export class ApplicationsDataComponent implements OnInit {
  @Input() questions$: Observable<Array<BaseQuestion<any>>>;
  @Input() step$;

  constructor(readonly questionService: QuestionService) {}

  ngOnInit(): void {
    this.getStepForms('intro');
  }

  getStepForms(step: string): any {
    this.questionService.getFormQuestions(`application_${step}`)
      .pipe(questions => this.step$ = questions);
  }
}
