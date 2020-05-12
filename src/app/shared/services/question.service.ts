import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseQuestion } from '../components/formTypes/question-base.class';
import { DateQuestion } from '../components/formTypes/question-date.class';
import { DropdownQuestion } from '../components/formTypes/question-dropdown.class';
import { TextQuestion } from '../components/formTypes/question-text.class';
import { JsonDataService } from './get-json-data.service';

@Injectable()
export class QuestionService {
  constructor(readonly jsonData: JsonDataService) {}
  getApplicationIntro(): Observable<Array<BaseQuestion<string>>> {

    const questions: Array<BaseQuestion<any>> = [
      new DropdownQuestion({
        key: 'applicationType',
        class: 'sm',
        label: 'Which board are you applying to?',
        options: [
          {key: 'cpb',  value: 'Central Planning Board'},
          {key: 'zba',  value: 'Zoning Board of Adjustment'}
        ],
        order: 1
      }),
      new DropdownQuestion({
        key: 'board',
        class: 'md',
        label: 'What kind of application are you filing?',
        options: [
          {key: 'prelimSitePlan',  value: 'Preliminary Site Plan'},
          {key: 'finalSitePlan',  value: 'Final Site Plan'},
          {key: 'minorSitePlan',  value: 'Minor Site Plan'},
          {key: 'majorSubdivision',  value: 'Major Subdivision'},
          {key: 'minorSubdivision',  value: 'Minor Subdivision'},
          {key: 'conditionalUse',  value: 'Conditional Use'},
          {key: 'cVar',  value: 'C Variance'},
          {key: 'dVar',  value: 'D Variance'}
        ],
        order: 2
      }),
      new TextQuestion({
        key: 'applicationNumber',
        class: 'sm',
        label: 'If you already have an application number type it in below?',
        placeholder: 'e.g. ZBA-20-001 or CPB-20-001',
        validators: {
          pattern: '(^ZBA|CPB)-[0-9]{2}-[0-9]{3}'
        },
        icon: 'number',
        order: 3
      }),
      new DateQuestion({
        key: 'dateFiled',
        label: 'Date Filed?',
        value: '',
        hint: 'mm/dd/yyyy',
        type: 'date',
        picker: 'picker1',
        validators: {
          required: true
        },
        order: 4
      }),
      new DateQuestion({
        key: 'dateHearing',
        label: 'Hearing Date?',
        value: '',
        hint: 'mm/dd/yyyy',
        type: 'date',
        picker: 'picker2',
        validators: {
          required: true
        },
        order: 5
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
  getFormQuestions(doc: string): Observable<Array<BaseQuestion<any>>> {
    const questions: Array<BaseQuestion<any>> = [];
    this.jsonData.getFormQuestions(doc)
    .subscribe(
      qs => {
        qs.forEach(q => {
          switch (q.type) {
            case 'dropdown':
              questions.push(new DropdownQuestion(q));
              break;
            case 'date':
              questions.push(new DateQuestion(q));
              break;
            default:
              questions.push(new TextQuestion(q));
              break;
            }
          });
        }
      );

    return of(questions.sort((a, b) => a.order - b.order));
  }

}
