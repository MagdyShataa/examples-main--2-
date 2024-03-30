/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Dog } from "./dogs.service";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-dogs-list-card",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <main>
      <div class="album py-5 bg-body-tertiary">
        <div class="container text-center mx-auto">
          <div>
            <div class="container text-center    mx-auto ">
              <div class="card shadow-sm w-50  h-25">
                <img
                  class="  img-fluid  rounded   shadow  h-25 "
                  src="{{ dog.avatar }}"
                  alt="Photo of {{ dog.first_name }}"
                />
                <div class="card-body">
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <a
                        class="btn btn-sm btn-outline-secondary"
                        href="/details/{{ index }}"
                        >Learn More</a
                      >
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- <article class="pet-card">
      <img
        class="pet-img"
        src="{{ dog.avatar }}"
        alt="Photo of {{ dog.first_name }}"
      />
      <p class="pet-headline">
        Meet <span class="pet-name">{{ dog.last_name }}</span>
      </p>
      <p class="pet-description">
        <span class="pet-name">{{ dog.id }}</span> wants you to know this about
        {{ dog.first_name }}:
        {{ dog.id }}
      </p>
      <p class="pet-learn-more">
        <a href="/details/{{ index }}">Learn More</a>
      </p>
      <article></article>
    </article> -->
  `,
  styles: [
    `
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      .b-example-divider {
        width: 100%;
        height: 3rem;
        background-color: rgba(0, 0, 0, 0.1);
        border: solid rgba(0, 0, 0, 0.15);
        border-width: 1px 0;
        box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
          inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
      }

      .b-example-vr {
        flex-shrink: 0;
        width: 1.5rem;
        height: 100vh;
      }

      .bi {
        vertical-align: -0.125em;
        fill: currentColor;
      }

      .nav-scroller {
        position: relative;
        z-index: 2;
        height: 2.75rem;
        overflow-y: hidden;
      }

      .nav-scroller .nav {
        display: flex;
        flex-wrap: nowrap;
        padding-bottom: 1rem;
        margin-top: -1px;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
      }

      .btn-bd-primary {
        --bd-violet-bg: #712cf9;
        --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

        --bs-btn-font-weight: 600;
        --bs-btn-color: var(--bs-white);
        --bs-btn-bg: var(--bd-violet-bg);
        --bs-btn-border-color: var(--bd-violet-bg);
        --bs-btn-hover-color: var(--bs-white);
        --bs-btn-hover-bg: #6528e0;
        --bs-btn-hover-border-color: #6528e0;
        --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
        --bs-btn-active-color: var(--bs-btn-hover-color);
        --bs-btn-active-bg: #5a23c8;
        --bs-btn-active-border-color: #5a23c8;
      }

      .bd-mode-toggle {
        z-index: 1500;
      }

      .bd-mode-toggle .dropdown-menu .active .bi {
        display: block !important;
      }
    `,
  ],
})
export class DogsListCardComponent implements OnInit {
  @Input() dog!: Dog;
  @Input() index!: Number;

  constructor() {}

  ngOnInit(): void {}
}
