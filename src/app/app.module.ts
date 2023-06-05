import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient }from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindComponent } from './databind/databind.component';
import { LoginComponent } from "./demo3/login/login.component";
import {FormsModule} from'@angular/forms';
import { RedElDirective } from './red-el.directive';
import { NgSwitch } from "@angular/common";
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { AgePipe } from './pipes/age.pipe';
import { HttpClientModule} from '@angular/common/http';
import { EditUserComponent } from './edit.user/edit.user.component';


@NgModule({
    declarations: [
        AppComponent,
        DatabindComponent,
        RedElDirective,
        HomeComponent,
        UserComponent,
        AboutComponent,
        AgePipe,
        EditUserComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        NgSwitch,
       
    ]
})
export class AppModule { }
