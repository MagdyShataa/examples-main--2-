/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div
      class=" navbar rounded-0  fixed-top  shadow-sm  border bg-primary   border-1 "
    >
      <div>
        <a
          routerLinkActive="active"
          ariaCurrentWhenActive="page"
          [routerLink]="['/']"
          ><img class="logo" src="../assets/imgs/images.png"
        /></a>
        <span class="example-spacer">My user </span>
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      nav {
        display: flex;
        justify-content: space-between;
        margin: 20px 10px 10px 10px;
      }

      nav div.menu-items {
        display: flex;
        width: 10%;
        justify-content: space-between;
      }
      nav > div {
        display: flex;
      }
      .title {
        font-size: 25pt;
      }

      .logo {
        height: 50px;
        border-radius: 10% / 20%;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 6px 8px -2px;
        margin: 0px 3px 0px 15px;
        -webkit-border-radius: 10% / 20%;
        -moz-border-radius: 10% / 20%;
        -ms-border-radius: 10% / 20%;
        -o-border-radius: 10% / 20%;
      }

      .example-spacer {
        flex: 1 1 auto;
        font-size: 18pt;
        margin: 10px 0px 0px 0px;
        font-family: Georgia, "Times New Roman", Times, serif;
      }
    `,
  ],
})
export class AppComponent {
  title = "walk-my-dog";
}
