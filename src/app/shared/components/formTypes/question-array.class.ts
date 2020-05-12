import { BaseQuestion } from './question-base.class';

export class ListQuestion extends BaseQuestion<any> {
    controlType = 'list';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        const type = 'type';
        this.type = options[type] || '';
    }
}
