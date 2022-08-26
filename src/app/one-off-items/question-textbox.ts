import { QuestionBase } from './question-base';

export class QuestionTextbox extends QuestionBase<string> {
  override controlType = 'textbox';
}
