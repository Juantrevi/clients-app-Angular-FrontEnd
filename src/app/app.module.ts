import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent }  from './header/header.component';
import { FooterComponent }  from './footer/footer.component';
import { DirectivesComponent } from './directives/directives.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientService } from './clients/client.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './clients/form.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', redirectTo: '/directives', pathMatch: 'full'},
  {path: 'directives', component: DirectivesComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'clients/form', component: FormComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivesComponent,
    ClientsComponent,
    FormComponent
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],

  providers: [ClientService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
