import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { RiparazioniComponent } from './riparazioni/riparazioni.component';
import { AddRiparazioneComponent } from './add-riparazione/add-riparazione.component';


const routes: Routes = [
{path:'', component: HomeComponent},
{path:'catalogo', component: CatalogoComponent},
{path:'riparazioni', component: RiparazioniComponent},
{path:'addRiparazione', component: AddRiparazioneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
