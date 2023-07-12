import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MediciComponent } from './medici/medici.component';
import { RepartiComponent } from './reparti/reparti.component';
import { PazientiComponent } from './pazienti/pazienti.component';
import { EsamiComponent } from './esami/esami.component';
import { VisiteComponent } from './visite/visite.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MatCardModule} from '@angular/material/card';
import {authInterceptorProviders} from './authentication/auth.interceptor';
import { HomeComponent } from './home/home.component';
import {MatSelectModule} from '@angular/material/select';
import { AddMEdicoComponent } from './add-medico/add-medico.component';
import { AddPazienteComponent } from './add-paziente/add-paziente.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MediciComponent,
    RepartiComponent,
    PazientiComponent,
    EsamiComponent,
    VisiteComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AddMEdicoComponent,
    AddPazienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatInputModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatSelectModule

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
