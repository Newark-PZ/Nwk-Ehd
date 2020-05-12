import { Clipboard } from '@angular/cdk/clipboard';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { QuestionService, SnackbarComponent } from '../../shared/';
import { BaseQuestion } from '../../shared/components/formTypes/question-base.class';
import { Page } from '../../shared/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-opz-applications',
  template: '<app-form formName="application_intro"></app-form>'
})

export class OpzAppBoardComponent implements OnInit {
  activeFragment;
  activeViewName;
  pageDetails: Page = {
    title: 'Applications',
    subtitle: 'Documents and Other FIles',
    searchDisplay: 'none',
    subComponents: [
      { label: 'Applications', path: 'res-apps' },
      { label: 'Redevelopment Plans', path: 'res-redev' },
      { label: 'Board Minutes', path: 'res-minutes' }
    ]
  };
  questions$: Observable<Array<BaseQuestion<any>>>;

  constructor(
    public service: QuestionService,
    readonly route: ActivatedRoute,
    readonly router: Router,
    public clipboard: Clipboard,
    public _snackBar: MatSnackBar
    ) {
    }

  ngOnInit(): void {
    this.activeFragment = this.router.url.slice(this.router.url.lastIndexOf('/') + 1);
    this.getTab(this.activeFragment);
  }
  copySuccess(object): any {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 1000,
      data: { message: 'Copied!', detail: object }
    });
  }
  getTab(view): any {
    this.activeViewName = view;
  }
  copyVal(val, object): any {
    this.clipboard.copy(val);
    this.copySuccess(object);
  }
}
