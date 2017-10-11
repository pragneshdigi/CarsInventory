import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Car } from "./viewmodels/car";
import { User } from "./viewmodels/user";
import { AppService } from "./services/app.service";

@Component({
    selector: 'carsinventory',
    template: `
        <h1>{{title}}</h1>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {
    title = "Cars Inventory";
}
