import { BaseQuestion } from './question-base.class';

export class DateQuestion extends BaseQuestion<Date> {
    controlType = 'date';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        const type = 'type';
        this.type = options[type] || '';
    }
}
