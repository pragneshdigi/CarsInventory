System.register(["@angular/core", "ng2-pagination", "../services/app.service", "./search-filter.component"], function (exports_1, context_1) {
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
    var core_1, ng2_pagination_1, app_service_1, search_filter_component_1, CarListComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_pagination_1_1) {
                ng2_pagination_1 = ng2_pagination_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            },
            function (search_filter_component_1_1) {
                search_filter_component_1 = search_filter_component_1_1;
            }
        ],
        execute: function () {
            CarListComponent = /** @class */ (function () {
                //constructor(private appService: AppService, private _cookieService: CookieService) { }
                function CarListComponent(appService) {
                    this.appService = appService;
                }
                CarListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var userId = localStorage.getItem("userid");
                    var service = this.appService.getCar(userId);
                    service.subscribe(function (items) { _this.items = items; }, function (error) { return _this.errorMessage = error; });
                };
                CarListComponent = __decorate([
                    core_1.NgModule({
                        declarations: [search_filter_component_1.SearchFilterPipe, ng2_pagination_1.PaginatePipe, ng2_pagination_1.PaginationControlsComponent],
                        exports: [search_filter_component_1.SearchFilterPipe, ng2_pagination_1.PaginatePipe, ng2_pagination_1.PaginationControlsComponent]
                    }),
                    core_1.Component({
                        selector: 'car-list',
                        templateUrl: '../partials/cars.html',
                        providers: [ng2_pagination_1.PaginationService]
                    }),
                    __metadata("design:paramtypes", [app_service_1.AppService])
                ], CarListComponent);
                return CarListComponent;
            }());
            exports_1("CarListComponent", CarListComponent);
        }
    };
});
//# sourceMappingURL=car-list.component.js.map