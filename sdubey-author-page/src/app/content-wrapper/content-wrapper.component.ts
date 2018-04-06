import { Component } from '@angular/core';
import { BOOKS } from '../books';

@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.css']
})
export class ContentWrapperComponent {

 books = BOOKS;

}
