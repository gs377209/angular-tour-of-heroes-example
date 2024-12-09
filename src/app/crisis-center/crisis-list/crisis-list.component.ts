import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Component({
    selector: 'app-crisis-list',
    templateUrl: './crisis-list.component.html',
    styleUrls: ['./crisis-list.component.scss'],
    standalone: false
})
export class CrisisListComponent implements OnInit {
  crises$!: Observable<Crisis[]>;
  selectedId = 0;

  constructor(
    private crisisService: CrisisService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getCrises();
  }

  getCrises(): void {
    // old way of getting things:
    // this.crisisService.getCrises().subscribe((crises) => (this.crises = crises));
    this.crises$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = parseInt(params.get('id') ?? '', 10);
        return this.crisisService.getCrises();
      }),
    );
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.crisisService.addCrisis({ name } as Crisis).subscribe(() => {
      // old way of quickly updating
      // this.crises.push(crisis);
      this.getCrises();
    });
  }

  delete(crisis: Crisis): void {
    // old way of quickly updating
    // this.crises = this.crises.filter((h) => h !== crisis);
    this.crisisService.deleteCrisis(crisis.id).subscribe(() => {
      this.getCrises();
    });
  }
}
