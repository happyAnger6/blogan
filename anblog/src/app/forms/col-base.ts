export class ColBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  ctrlType: string;

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    order?: number,
    ctrlType?: string
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.ctrlType = options.ctrlType || '';
  }
}
