System.register(["@angular/core", "@angular/http", "rxjs/Observable"], function (exports_1, context_1) {
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
    var core_1, http_1, Observable_1, AppService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }
        ],
        execute: function () {
            AppService = /** @class */ (function () {
                function AppService(http) {
                    this.http = http;
                    this.carUrl = 'api/cars/car/';
                    this.carDetailsUrl = 'api/cars/carDetails/';
                    this.userUrl = 'api/cars/user/';
                    this.loginUrl = 'api/cars/login/';
                }
                AppService.prototype.login = function (email, password) {
                    //login(user: User) {
                    if (email == null)
                        throw new Error("email is required");
                    if (password == null)
                        throw new Error("password is required");
                    //if (user == null) throw new Error("user is required");
                    var url = this.loginUrl + email + '/' + password;
                    //var url = this.carUrl + user;
                    return this.http.get(url)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                AppService.prototype.getCar = function (id) {
                    if (id == null)
                        throw new Error("id is required");
                    var url = this.carUrl + id;
                    return this.http.get(url)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                AppService.prototype.getCarDetails = function (id) {
                    if (id == null)
                        throw new Error("id is required");
                    var url = this.carDetailsUrl + id;
                    return this.http.get(url)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                AppService.prototype.saveCar = function (car) {
                    if (car == null)
                        throw new Error("car is required");
                    var url = this.carUrl;
                    return this.http.post(url, car)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                AppService.prototype.saveUser = function (user) {
                    if (user == null)
                        throw new Error("user is required");
                    var url = this.userUrl;
                    return this.http.post(url, user)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                AppService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || "Server error");
                };
                AppService = __decorate([
                    core_1.Injectable(),
                    __metadata("design:paramtypes", [http_1.Http])
                ], AppService);
                return AppService;
            }());
            exports_1("AppService", AppService);
        }
    };
});
//# sourceMappingURL=app.service.js.map