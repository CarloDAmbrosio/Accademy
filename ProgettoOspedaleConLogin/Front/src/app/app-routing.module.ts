import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediciComponent } from './medici/medici.component';
import { RepartiComponent } from './reparti/reparti.component';
import { PazientiComponent } from './pazienti/pazienti.component';
import { EsamiComponent } from './esami/esami.component';
import { VisiteComponent } from './visite/visite.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AddMEdicoComponent } from './add-medico/add-medico.component';
import { AddPazienteComponent } from './add-paziente/add-paziente.component';



const routes: Routes = [
{path:'', component: HomeComponent},
{path:'medici', component: MediciComponent},
{path:'reparti', component: RepartiComponent},
{path:'pazienti', component: PazientiComponent},
{path:'esami', component: EsamiComponent},
{path:'visite', component: VisiteComponent},
{path:'login', component: LoginComponent},
{path:'registrati', component: RegisterComponent},
{path:'addMedico', component: AddMEdicoComponent},
{path:'addPaziente', component: AddPazienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
