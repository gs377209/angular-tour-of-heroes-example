import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

import { CanComponentDeactivate } from 'src/app/can-deactivate.guard';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import { DialogService } from 'src/app/dialog.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss'],
})
export class CrisisDetailComponent implements OnInit, CanComponentDeactivate {
  crisis!: Crisis;
  editName = '';

  constructor(
    private route: ActivatedRoute,
    private crisisService: CrisisService,
    private location: Location,
    private router: Router,
    private dialogService: DialogService,
  ) {}

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }

  ngOnInit(): void {
    this.getCrisis();
  }

  getCrisis(): void {
    // unstable way if you are not reusing everywhere:
    // const id = parseInt(this.route.snapshot.paramMap.get('id') ?? '', 10);
    // this.crisis$ = this.crisisService.getCrisis(id);
    // old way of doing things:
    // this.crisisService.getCrisis(id).subscribe((crisis) => (this.crisis = crisis));

    // moved this to route resolver:
    // this.crisis$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.crisisService.getCrisis(parseInt(params.get('id') ?? '', 10))
    //   )
    // );
    // this.crisis$.subscribe((c) => {
    //   this.crisis = c;
    //   this.editName = c.name;
    // });

    this.route.data.subscribe((data) => {
      const crisis: Crisis = data['crisis'];
      this.editName = crisis.name;
      this.crisis = crisis;
    });
  }

  goBack(crisis: Crisis): void {
    // old way of navigating:
    // this.location.back();
    this.gotoCrises(crisis);
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
      this.crisis = crisis;
      this.crisis.name = this.editName;
      this.crisisService
        .updateCrisis(crisis)
        .subscribe(() => this.gotoCrises(crisis));
    }
  }
}
