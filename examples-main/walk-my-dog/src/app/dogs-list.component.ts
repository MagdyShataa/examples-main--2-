/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DogsService } from "./dogs.service";
import { DogsListCardComponent } from "./dogs-list-card.component";

@Component({
  selector: "app-dogs-list",
  standalone: true,
  imports: [CommonModule, DogsListCardComponent],
  template: `
    <section class="hero-section">
      <h2 class="hero-text">Discover Pets to walk near you</h2>
    </section>
    <div class="    bg-body-secondary  ">
      <app-dogs-list-card
        *ngFor="let dog of dogsService.dogs; let i = index"
        [index]="i"
        [dog]="dog"
      ></app-dogs-list-card>
    </div>
  `,
  styles: [``],
})
export class DogsListComponent implements OnInit {
  constructor(readonly dogsService: DogsService) {}

  ngOnInit(): void {}
}
