///<reference path="../../typings/index.d.ts"/>
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
//import { Ng2SearchPipeModule } from "ng2-search-filter";
import { Ng2PaginationModule } from "ng2-pagination";
import "rxjs/Rx";
//import { CookieModule } from "ngx-cookie";

import { AppComponent } from "./app.component";
import { CarListComponent } from "./components/car-list.component";
import { CarAddComponent } from "./components/car-add.component";
import { CarEditComponent } from "./components/car-edit.component";
import { LoginComponent } from "./components/login.component";
import { RegistrationComponent } from "./components/registration.component";

import { SearchFilterPipe } from "./components/search-filter.component";

import { AppRouting } from "./app.routing";
import { AppService } from "./services/app.service";


@NgModule({
    // directives, components, and pipes
    declarations: [
        AppComponent,
        CarListComponent,        
        CarAddComponent,
        CarEditComponent,
        LoginComponent,
        RegistrationComponent,        
        SearchFilterPipe,        
    ],
    // modules
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule,        
        Ng2PaginationModule,
        AppRouting,
        //CookieModule.forRoot()
    ],
    // providers
    providers: [
        AppService
    ],

    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }