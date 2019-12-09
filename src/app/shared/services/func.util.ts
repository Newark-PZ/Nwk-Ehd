import { isNil } from 'lodash/fp';

// tslint:disable-next-line: invalid-void
const executeIfFunction = (fn: () => void | any) => (typeof fn === 'function' ? fn() : fn);

export const getOrNil = (fallback: any) => (value?: any) => (isNil(value) || !value ? fallback : value);

const switchCaseBase = (cases: any) => (defaultCase?: any) => (key: any) => (cases.hasOwnProperty(key) ? cases[key] : defaultCase);

export const switchCase = (cases: any) => (defaultCase?: any) => (key: any) => executeIfFunction(switchCaseBase(cases)(defaultCase)(key));
