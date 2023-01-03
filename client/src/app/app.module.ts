import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { SectorComponent } from './components/sector/sector.component';
import { DetailComponent } from './components/sector/detail/Computer detail/detail/detail.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OtherdetailComponent } from './components/sector/detail/Other detail/otherdetail/otherdetail.component';
import { PhonedetailComponent } from './components/sector/detail/Phone detail/phonedetail/phonedetail.component';
import { NavbarComponent } from './components/navbar/navbar.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'sectores/:sector', component: SectorComponent },
      { path: 'detail/:id', component: DetailComponent },
      { path: 'otherdetail/:id', component: OtherdetailComponent },
      { path: 'phonedetail/:id', component: PhonedetailComponent },
      { path: '*', component: HomeComponent },
    ],
  },
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SectorComponent,
    DetailComponent,
    OtherdetailComponent,
    PhonedetailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgbModule,
    NgbAccordionModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
