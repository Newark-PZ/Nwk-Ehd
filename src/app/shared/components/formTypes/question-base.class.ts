export class BaseQuestion<T> {
    value: T | undefined;
    class: string | 'sm' | 'md' | 'lg';
    key: string;
    error: string;
    label: string;
    validators: {
      maxLength?: number;
      minLength?: number;
      email?: boolean;
      required?: boolean;
      pattern?: string;
    };
    childKey: string;
    picker: string;
    multiple: boolean;
    order: number;
    placeholder: string;
    icon: string;
    controlType: string;
    type: string;
    hint: string;
    options: Array<{key: string, value: string}>;

    constructor(options: {
      value?: T,
      class?: string,
      key?: string,
      error?: string,
      label?: string,
      validators?: {
        maxLength?: number;
        minLength?: number;
        email?: boolean;
        required?: boolean;
        pattern?: string;
      };
      order?: number,
      childKey?: string,
      picker?: string,
      controlType?: string,
      type?: string,
      placeholder?: string,
      icon?: string,
      hint?: string,
      multiple?: boolean
      } = {}) {
      this.value = options.value;
      this.class = options.class || '';
      this.key = options.key || '';
      this.error = options.error || '';
      this.label = options.label || '';
      this.validators = options.validators || {};
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.type = options.type || '';
      this.placeholder = options.placeholder || '';
      this.icon = options.icon || '';
      this.hint = options.hint || '';
      this.multiple = options.multiple || false;
      this.picker = options.picker || '';
      this.childKey = options.childKey || 'item';
    }
}
