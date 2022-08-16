import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Location } from '@angular/common';

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss'],
})
export class CrisisDetailComponent implements OnInit {
  crisis$!: Observable<Crisis>;

  constructor(
    private route: ActivatedRoute,
    private crisisService: CrisisService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCrisis();
  }

  getCrisis(): void {
    // unstable way if you are not reusing everywhere:
    // const id = parseInt(this.route.snapshot.paramMap.get('id') ?? '', 10);
    // this.crisis$ = this.crisisService.getCrisis(id);
    // old way of doing things:
    // this.crisisService.getCrisis(id).subscribe((crisis) => (this.crisis = crisis));

    this.crisis$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.crisisService.getCrisis(parseInt(params.get('id') ?? '', 10))
      )
    );
  }

  goBack(): void {
    this.location.back();
  }

  gotoCrises(crisis: Crisis) {
    const crisisId = crisis ? crisis.id : null;
    // Pass along the crisis id if available
    // so that the CrisisList component can select that crisis.
    // Include a junk 'foo' property for fun.
    // Relative navigation back to the crises
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], {
      relativeTo: this.route,
    });
  }

  save(crisis: Crisis): void {
    // old way of submitting:
    // if (this.crisis) {
    //   this.crisisService.updateCrisis(this.crisis).subscribe(() => this.goBack());
    // }
    if (crisis) {
      this.crisisService
        .updateCrisis(crisis)
        .subscribe(() => this.gotoCrises(crisis));
    }
  }
}
