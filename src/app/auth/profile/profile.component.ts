import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    standalone: false
})
export class ProfileComponent implements OnInit {
  username$!: Observable<string | null>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.username$ = this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('username')),
    );
  }
}
