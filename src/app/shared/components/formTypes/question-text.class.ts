import { BaseQuestion } from './question-base.class';

export class TextQuestion extends BaseQuestion<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    const type = 'type';
    this.type = options[type] || '';
  }
}
