import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { User } from "../viewmodels/user";
import { AppService } from "../services/app.service";

//import { CookieService } from "ngx-cookie";

@Component({
    selector: 'login',
    templateUrl: '../partials/login.html'
})

export class LoginComponent implements OnInit {
    item: User;
    sub: any;

    //constructor(private appService: AppService, private router: Router, private route: ActivatedRoute, private _cookieService: CookieService) { }
    constructor(private appService: AppService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.item = new User();
    }

    ngOnDestroy() { }

    public login() {
        
        this.appService.login(this.item.email, this.item.password).subscribe(
            item => {
                this.item = item;
                localStorage.setItem("userid", this.item.id);
                this.router.navigate(['/cars']);
            },
            error => console.log(error)
        )
    }
}

