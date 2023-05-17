import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRicettaComponent } from './add-ricetta/add-ricetta.component';
import { AllComponent } from './all/all.component';
import { LoginComponent } from './login/login.component';
import { RegistratiComponent } from './registrati/registrati.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  
  {path:"add", component:AddRicettaComponent},
  {path:"lista", component:AllComponent},
  {path:"login", component:LoginComponent},
  {path:"reg", component:RegistratiComponent},
  {path:"info", component:InfoComponent},
  {path:"", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
