import { Type } from '@angular/core';

export class Link {
  id: string;
  title: string;
  icon: string;
  office: 'ehd' | 'planningzoning' | 'rentcontrol';
  parent: string;
  fullPath: string;
  children: Array<Link> | undefined;
  component: Type<any> | undefined;
  isChild: boolean;
  disabled: boolean;
  queryParams: object;
  constructor(
    options: {
      id: string,
      title: string,
      office: 'ehd' | 'planningzoning' | 'rentcontrol',
      parent?: string,
      icon?: string,
      children?: Array<Link>,
      isChild?: boolean,
      queryParams?: object,
      disabled?: boolean
    }) {
    this.id = options.id;
    this.title = options.title;
    this.icon = options.icon ? options.icon : 'subdirectory_arrow_right';
    this.office = options.office;
    this.parent = options.parent ? options.parent : '';
    this.children = options.children;
    this.isChild = options.isChild ? options.isChild : true;
    this.queryParams = options.queryParams ? options.queryParams : {};
    this.disabled = options.disabled ? options.disabled : false;
    this.fullPath = this.parent !== '' ? `${this.office}/${this.parent}/${this.id}` : `${this.office}/${this.id}` ;
  }
}
