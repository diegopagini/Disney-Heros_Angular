import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HorizontalCardComponent } from './shared/horizontal-card/horizontal-card.component';
import { ShowPersonajeComponent } from './show-personaje/show-personaje.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonajesComponent,
    NavbarComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    FooterComponent,
    HorizontalCardComponent,
    ShowPersonajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
