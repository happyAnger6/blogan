import { ColBase } from "./col-base";

export class DropdownCol extends ColBase<string> {
  ctrlType = 'dropdown';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
