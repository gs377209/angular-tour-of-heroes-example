import { QuestionBase } from './question-base';

export class QuestionDropdown extends QuestionBase<string> {
  override controlType = 'dropdown';
}
