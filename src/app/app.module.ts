

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { ExpansivePainelComponent } from './components/expansive-painel/expansive-painel.component';
import { ButtonAfterListComponent } from './components/button-after-list/button-after-list.component';
import { ItemOfListExpansiveComponent } from './components/item-of-list-expansive/item-of-list-expansive.component';
import { FlutterButtonComponent } from './components/flutter-button/flutter-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExpansivePainelComponent,
    ButtonAfterListComponent,
    ItemOfListExpansiveComponent,
    FlutterButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
