import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandiereComponent } from './bandiere/bandiere.component';
import { DettagliComponent } from './dettagli/dettagli.component';
import { SecondaPaginaComponent } from './seconda-pagina/seconda-pagina.component';

const routes: Routes = [
  {path: '', component: BandiereComponent },
  {path:'dettagli/:nome_caso2', component: DettagliComponent},
  {path:'secondaPagina', component: SecondaPaginaComponent },
  {path:'', component: BandiereComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
