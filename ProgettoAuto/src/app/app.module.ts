import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RiparazioniComponent } from './riparazioni/riparazioni.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AddRiparazioneComponent } from './add-riparazione/add-riparazione.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    RiparazioniComponent,
    AddRiparazioneComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
