import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipe',
})
export class TestPipePipe implements PipeTransform {
  transform(): unknown {
    return null;
  }
}
