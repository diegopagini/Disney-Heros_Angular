import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { ShowPersonajeComponent } from './show-personaje/show-personaje.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'personajes', component: PersonajesComponent },
  { path: 'personajes/:id', component: ShowPersonajeComponent },
  { path: 'about-us', component: AboutUsComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }