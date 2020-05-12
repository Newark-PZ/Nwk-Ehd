import { BaseQuestion } from './question-base.class';

export class DropdownQuestion extends BaseQuestion<string> {
  controlType = 'dropdown';
  options: Array<{key: string, value: string}> = [];

  constructor(options: {} = {}) {
    super(options);
    // tslint:disable-next-line: no-string-literal
    this.options = options['options'] || [];
  }
}
