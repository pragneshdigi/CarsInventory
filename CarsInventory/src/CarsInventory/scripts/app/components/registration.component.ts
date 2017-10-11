import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { User } from "../viewmodels/user";
import { AppService } from "../services/app.service";

//import { CookieService } from "ngx-cookie";

@Component({
    selector: 'registration',
    templateUrl: '../partials/registration.html'
})

export class RegistrationComponent implements OnInit {
    item: User;
    sub: any;

    //constructor(private appService: AppService, private router: Router, private route: ActivatedRoute, private _cookieService: CookieService) { }
    constructor(private appService: AppService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.item = new User();        
    }

    ngOnDestroy() { }

    public addCar() {

        this.appService.saveUser(this.item).subscribe(
            item => {
                this.item = item;
                localStorage.setItem("userid", this.item.id);
                this.router.navigate(['/cars']);
            },
            error => console.log(error)
        )
    }    
}

