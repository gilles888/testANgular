import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';

import { AuthModule } from '@auth0/auth0-angular';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { HomeComponent } from './home/home.component';
import { PourquiComponent } from './pourqui/pourqui.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EquipeComponent } from './equipe/equipe.component';
import { DevcliniqueComponent } from './devclinique/devclinique.component';
import { PublicationsComponent } from './publications/publications.component';
import { TemoignageComponent } from './temoignage/temoignage.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { InscriptionComponent } from './inscription/inscription.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent,
    HomeComponent,
    PourquiComponent,
    NotFoundComponent,
    EquipeComponent,
    DevcliniqueComponent,
    PublicationsComponent,
    TemoignageComponent,
    ContactComponent,
    FooterComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AuthModule.forRoot({
      domain: 'dev-cqceccvn.eu.auth0.com',
      clientId: 'v8ANeRk4qo8W6XXiersGDuve9eVo28cw'
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
