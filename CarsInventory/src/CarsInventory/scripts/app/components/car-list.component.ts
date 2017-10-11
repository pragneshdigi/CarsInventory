import { Component, OnInit, OnDestroy, NgModule } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { PaginatePipe, PaginationControlsComponent, PaginationService } from "ng2-pagination";
//import { CookieService } from "ngx-cookie";

import { Car } from "../viewmodels/car";
import { AppService } from "../services/app.service";
import { SearchFilterPipe } from "./search-filter.component";


@NgModule({
    declarations: [SearchFilterPipe, PaginatePipe, PaginationControlsComponent],
    exports: [SearchFilterPipe, PaginatePipe, PaginationControlsComponent]
})

@Component({
    selector: 'car-list',
    templateUrl: '../partials/cars.html',
    providers: [PaginationService]
})

export class CarListComponent implements OnInit {

    items: Car[];
    errorMessage: string;
    msg: string;

    //constructor(private appService: AppService, private _cookieService: CookieService) { }
    constructor(private appService: AppService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {        
        var userId = localStorage.getItem("userid");        
        var service = this.appService.getCar(userId);

        service.subscribe(
            items => { this.items = items; },
            error => this.errorMessage = <any>error
        );        
    }

    public logout() {        
        localStorage.removeItem("userid");        
        this.router.navigate(['/login']);
    }
}