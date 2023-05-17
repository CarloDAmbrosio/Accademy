import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AllComponent } from './all/all.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FiltroPipePipe } from './filtro-pipe.pipe';
import { IngredientiPipe } from './ingredienti.pipe';
import { IngredientiNonPresentiPipe } from './ingredienti-non-presenti.pipe';
import { OrdinaPipe } from './ordina.pipe';
import { AddRicettaComponent } from './add-ricetta/add-ricetta.component';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { RegistratiComponent } from './registrati/registrati.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { authInterceptorProviders } from './services/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    FiltroPipePipe,
    IngredientiPipe,
    IngredientiNonPresentiPipe,
    OrdinaPipe,
    AddRicettaComponent,
    NavbarComponent,
    LoginComponent,
    RegistratiComponent,
    FooterComponent,
    HomeComponent,
    InfoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule
    

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
