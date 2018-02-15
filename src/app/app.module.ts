import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppCompartilhadoModule} from './app-compartilhado/app-compartilhado.module';


import { AppComponent } from './app.component';
import { MenuComponent } from './layout/menu/menu.component';
import { BarrasComponent } from './layout/barras/barras.component';
import { AtributosComponent } from './atributos/atributos.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BarrasComponent,
    AtributosComponent
  ],
  imports: [
    BrowserModule,
    AppCompartilhadoModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
