import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './shared/components/login/login.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { EmployeeListComponent } from './shared/components/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './shared/components/employee-create/employee-create.component';
import { DocumentCreateComponent } from './shared/components/document-create/document-create.component';
import { DocumentListComponent } from './shared/components/document-list/document-list.component';
import { DocumentShowComponent } from './shared/components/document-show/document-show.component';
import { EmployeeShowComponent } from './shared/components/employee-show/employee-show.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login' , component: LoginComponent },
  { path: 'dashboard' , component: DashboardComponent },
  {
    path: 'employees', children: [
      {path: '', component: EmployeeListComponent},
      {path: 'create', component: EmployeeCreateComponent}
    ]
  },
  { path: '**' , redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    DocumentCreateComponent,
    DocumentListComponent,
    DocumentShowComponent,
    EmployeeShowComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
