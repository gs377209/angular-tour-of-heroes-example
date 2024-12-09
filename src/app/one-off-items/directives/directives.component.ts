import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directives',
    templateUrl: './directives.component.html',
    styleUrls: ['./directives.component.scss'],
    standalone: false
})
export class DirectivesComponent implements OnInit {
  color: string | undefined;
  condition = false;

  constructor() {
    //not used
  }

  ngOnInit(): void {
    this.color = '';
    this.condition = false;
  }
}
