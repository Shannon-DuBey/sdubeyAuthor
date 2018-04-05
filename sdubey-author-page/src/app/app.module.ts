import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NavigationButtonComponent } from './navigation-bar/navigation-button/navigation-button.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { AboutAuthorComponent } from './about-author/about-author.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookInfoComponent } from './book-info/book-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroImageComponent,
    NavigationBarComponent,
    NavigationButtonComponent,
    ContentWrapperComponent,
    AboutAuthorComponent,
    BookCardComponent,
    BookInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
