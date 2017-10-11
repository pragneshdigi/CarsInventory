import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Car } from "../viewmodels/car";
import { AppService } from "../services/app.service";

//import { CookieService } from "ngx-cookie";

@Component({
    selector: 'car-edit',
    templateUrl: '../partials/editCars.html'
})

export class CarEditComponent implements OnInit {

    item: Car;
    sub: any;

    //constructor(private appService: AppService, private router: Router, private route: ActivatedRoute, private _cookieService: CookieService) { }
    constructor(private appService: AppService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            var id = params['id'];
            this.appService.getCarDetails(id).subscribe(item => this.item = item);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    public editCar() {
        this.appService.saveCar(this.item).subscribe(
            item => {
                this.item = item;
                this.router.navigate(['/cars']);
            },
            error => console.log(error)
        )
    }
    onCheckChange(entry): void {        
        this.item.new = entry;        
    }    
}