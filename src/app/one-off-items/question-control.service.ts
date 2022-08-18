import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {
  toFormGroup(questions: QuestionBase<string>[]) {
    const group: Record<string, FormControl> = {};

    questions.forEach((question) => {
      group[question.key] = question.required
        ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
