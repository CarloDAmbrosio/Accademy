import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { SecondaPaginaComponent } from './seconda-pagina/seconda-pagina.component';
import { BandiereComponent } from './bandiere/bandiere.component';
import { DettagliComponent } from './dettagli/dettagli.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SecondaPaginaComponent,
    BandiereComponent,
    DettagliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
