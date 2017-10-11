System.register(["@angular/core", "@angular/platform-browser", "@angular/http", "@angular/router", "@angular/forms", "ng2-pagination", "rxjs/Rx", "./app.component", "./components/car-list.component", "./components/car-add.component", "./components/car-edit.component", "./components/login.component", "./components/registration.component", "./components/search-filter.component", "./app.routing", "./services/app.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, http_1, router_1, forms_1, ng2_pagination_1, app_component_1, car_list_component_1, car_add_component_1, car_edit_component_1, login_component_1, registration_component_1, search_filter_component_1, app_routing_1, app_service_1, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (ng2_pagination_1_1) {
                ng2_pagination_1 = ng2_pagination_1_1;
            },
            function (_1) {
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (car_list_component_1_1) {
                car_list_component_1 = car_list_component_1_1;
            },
            function (car_add_component_1_1) {
                car_add_component_1 = car_add_component_1_1;
            },
            function (car_edit_component_1_1) {
                car_edit_component_1 = car_edit_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (registration_component_1_1) {
                registration_component_1 = registration_component_1_1;
            },
            function (search_filter_component_1_1) {
                search_filter_component_1 = search_filter_component_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            }
        ],
        execute: function () {
            AppModule = /** @class */ (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        // directives, components, and pipes
                        declarations: [
                            app_component_1.AppComponent,
                            car_list_component_1.CarListComponent,
                            car_add_component_1.CarAddComponent,
                            car_edit_component_1.CarEditComponent,
                            login_component_1.LoginComponent,
                            registration_component_1.RegistrationComponent,
                            search_filter_component_1.SearchFilterPipe,
                        ],
                        // modules
                        imports: [
                            platform_browser_1.BrowserModule,
                            http_1.HttpModule,
                            forms_1.FormsModule,
                            router_1.RouterModule,
                            ng2_pagination_1.Ng2PaginationModule,
                            app_routing_1.AppRouting,
                        ],
                        // providers
                        providers: [
                            app_service_1.AppService
                        ],
                        bootstrap: [
                            app_component_1.AppComponent
                        ]
                    })
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.module.js.map