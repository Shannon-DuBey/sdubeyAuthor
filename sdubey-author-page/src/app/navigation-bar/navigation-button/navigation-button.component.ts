import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-button',
  templateUrl: './navigation-button.component.html',
  styleUrls: ['./navigation-button.component.css']
})
export class NavigationButtonComponent implements OnInit {
  buttonText: string;

  constructor() {
    this.buttonText = 'test';
  }

  ngOnInit() {

  }

}
