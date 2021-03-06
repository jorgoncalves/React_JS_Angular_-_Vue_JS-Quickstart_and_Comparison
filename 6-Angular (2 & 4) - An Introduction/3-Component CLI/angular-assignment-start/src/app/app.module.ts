import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router"
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { InfoComponent } from './info/info.component';
import { AccountComponent } from './account/account.component';
import { BlogComponent } from './blog/blog.component';


const appRoutes: Routes = [
  {path: "", component: UserComponent}, 
  {path: "blog", component: BlogComponent}, 
  {path: "account", component: AccountComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    InfoComponent,
    AccountComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
