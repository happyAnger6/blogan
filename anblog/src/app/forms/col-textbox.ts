import { ColBase } from "./col-base";

export class TextboxCol extends ColBase<string> {
  ctrlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
