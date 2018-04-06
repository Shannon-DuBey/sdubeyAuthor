import { Component } from '@angular/core';
import { NavigationButtonComponent } from './navigation-button/navigation-button.component';

@Component({
  selector: 'app-navigation-bar',
  //templateUrl: './navigation-bar.component.html',
  template: `
    <div class="nav_bar_container">
      <app-navigation-button [btnTxt]="test1"></app-navigation-button>
      <app-navigation-button [btnTxt]="test2"></app-navigation-button>
      <app-navigation-button [btnTxt]="test3"></app-navigation-button>
    </div>
  `,
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {

  btnTxt = 'BtnTxt';

}
