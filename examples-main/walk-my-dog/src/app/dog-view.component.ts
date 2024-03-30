/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { map, Observable } from "rxjs";
import { Dog, DogsService } from "./dogs.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-dog-view",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-5  pt-5 ">
      <article class="details-panel" *ngIf="dog$ | async as dog">
        <img
          class="main-img"
          src="{{ dog.avatar }}"
          alt="Photo of {{ dog.first_name }}"
        />
        <article>
          <h3 class="main-text">Hi, I'm {{ dog.first_name }}</h3>
          <h5>
            My owner's is email<span class="emphasize">/:{{ dog.email }}</span>
          </h5>
          <h5>id:{{ dog.id }}</h5>
          <h5>
            first_name:<span class="emphasize">{{ dog.first_name }}</span>
            <br />
            last_name:<span class="emphasize">{{ dog.last_name }}</span>
          </h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
            veritatis qui debitis, dolore harum recusandae ducimus saepe
            cupiditate libero facilis quam temporibus tempora porro architecto
            non eum accusantium adipisci illum!
          </p>
        </article>
      </article>
    </div>
  `,
  styles: [
    `
      .details-panel {
        display: flex;
        padding: 10px;
        gap: 50px;
      }
      .main-img {
        border-radius: 10px;
        width: 400px;
      }
      .main-text {
        font-size: 34pt;
        margin-bottom: 20px;
      }
      .emphasize {
        font-weight: bold;
      }
      h2 {
      }
    `,
  ],
})
export class DogViewComponent implements OnInit {
  dog$!: Observable<Dog | undefined>;

  constructor(
    private dogsService: DogsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dog$ = this.route.paramMap.pipe(
      map((params) => {
        return this.dogsService.dogs[Number(params.get("index"))];
      })
    );
  }
}
