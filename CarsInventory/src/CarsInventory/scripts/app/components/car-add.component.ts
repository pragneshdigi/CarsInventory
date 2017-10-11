import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Car } from "../viewmodels/car";
import { AppService } from "../services/app.service";

//import { CookieService } from "ngx-cookie";

@Component({
    selector: 'car-add',
    templateUrl: '../partials/addCars.html'
})

export class CarAddComponent implements OnInit {
    item: Car;
    sub: any;    

    //constructor(private appService: AppService, private router: Router, private route: ActivatedRoute, private _cookieService: CookieService) { }
    constructor(private appService: AppService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.item = new Car();
        this.item.new = true;        
    }

    ngOnDestroy() { }

    public addCar() {                

        this.item.userid = localStorage.getItem("userid");
        this.appService.saveCar(this.item).subscribe(
           
            item => {
                
                this.item = item;
                this.router.navigate(['/cars']);
            },
            error => console.log(error)
        )
    }
    onStatusSelectionChange(entry): void {
        this.item.new = entry;
    }        
}

