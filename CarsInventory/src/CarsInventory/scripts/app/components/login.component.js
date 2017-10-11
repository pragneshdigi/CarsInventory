System.register(["@angular/core", "@angular/router", "../viewmodels/user", "../services/app.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, user_1, app_service_1, LoginComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            }
        ],
        execute: function () {
            LoginComponent = /** @class */ (function () {
                //constructor(private appService: AppService, private router: Router, private route: ActivatedRoute, private _cookieService: CookieService) { }
                function LoginComponent(appService, router, route) {
                    this.appService = appService;
                    this.router = router;
                    this.route = route;
                }
                LoginComponent.prototype.ngOnInit = function () {
                    this.item = new user_1.User();
                };
                LoginComponent.prototype.ngOnDestroy = function () { };
                LoginComponent.prototype.login = function () {
                    var _this = this;
                    this.appService.login(this.item.email, this.item.password).subscribe(function (item) {
                        _this.item = item;
                        localStorage.setItem("userid", _this.item.id);
                        _this.router.navigate(['/cars']);
                    }, function (error) { return console.log(error); });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        templateUrl: '../partials/login.html'
                    }),
                    __metadata("design:paramtypes", [app_service_1.AppService, router_1.Router, router_1.ActivatedRoute])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    };
});
//# sourceMappingURL=login.component.js.map