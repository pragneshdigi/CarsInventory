System.register(["@angular/router", "./components/car-list.component", "./components/car-add.component", "./components/car-edit.component", "./components/login.component", "./components/registration.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, car_list_component_1, car_add_component_1, car_edit_component_1, login_component_1, registration_component_1, routes, AppRoutingProviders, AppRouting;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
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
            }
        ],
        execute: function () {
            routes = [
                {
                    path: '',
                    redirectTo: '/login',
                    pathMatch: 'full'
                },
                {
                    path: 'cars',
                    component: car_list_component_1.CarListComponent
                },
                {
                    path: 'cars/add',
                    component: car_add_component_1.CarAddComponent
                },
                {
                    path: 'cars/editCar/:id',
                    component: car_edit_component_1.CarEditComponent
                },
                {
                    path: 'login',
                    component: login_component_1.LoginComponent
                },
                {
                    path: 'registration',
                    component: registration_component_1.RegistrationComponent
                },
            ];
            exports_1("AppRoutingProviders", AppRoutingProviders = []);
            exports_1("AppRouting", AppRouting = router_1.RouterModule.forRoot(routes));
        }
    };
});
//# sourceMappingURL=app.routing.js.map