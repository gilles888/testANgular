import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DevcliniqueComponent } from './devclinique/devclinique.component';
import { EquipeComponent } from './equipe/equipe.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PourquiComponent } from './pourqui/pourqui.component';
import { PublicationsComponent } from './publications/publications.component';
import { TemoignageComponent } from './temoignage/temoignage.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'pourqui', component:PourquiComponent },
  
  {path:'equipe', component:EquipeComponent},
  {path:'devclinique', component:DevcliniqueComponent},
  {path:'publications', component:PublicationsComponent},
  {path:'temoignages', component:TemoignageComponent},
  {path:'contact', component:ContactComponent},

  {path:'inscription', component:InscriptionComponent},

  {path:'' , redirectTo:'home',pathMatch:'full'},
  {path:'not-found', component:NotFoundComponent},
  {path:'**', redirectTo: 'not-found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
