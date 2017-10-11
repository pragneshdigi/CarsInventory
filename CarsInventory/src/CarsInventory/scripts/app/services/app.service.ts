import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Car } from "../viewmodels/car";
import { User } from "../viewmodels/user";
import { Observable } from "rxjs/Observable";
//import { Observable } from "rxjs";

@Injectable()
export class AppService {

    constructor(private http: Http)
    { }

    private carUrl = 'api/cars/car/';    
    private carDetailsUrl = 'api/cars/carDetails/'; 
    private userUrl = 'api/cars/user/';
    private loginUrl = 'api/cars/login/';

    login(email: string, password: string) {
        
    //login(user: User) {
        if (email == null) throw new Error("email is required");
        if (password == null) throw new Error("password is required");
        //if (user == null) throw new Error("user is required");
        var url = this.loginUrl + email + '/' + password;
        //var url = this.carUrl + user;
       
        return this.http.get(url)
            .map(response => <User>response.json())
            .catch(this.handleError);
    }

    getCar(id: string) {
        
        if (id == null) throw new Error("id is required");
        var url = this.carUrl + id;
            
        return this.http.get(url)
            .map(response => <Car>response.json())
            .catch(this.handleError);
    }

    getCarDetails(id: string) {

        if (id == null) throw new Error("id is required");
        var url = this.carDetailsUrl + id;

        return this.http.get(url)
            .map(response => <Car>response.json())
            .catch(this.handleError);
    }

    saveCar(car: Car) {        
        
        if (car == null) throw new Error("car is required");
        var url = this.carUrl;
       
        return this.http.post(url, car)
            .map(response => <Car>response.json())
            .catch(this.handleError);
    }

    saveUser(user: User) {
        if (user == null) throw new Error("user is required");
        var url = this.userUrl;

        return this.http.post(url, user)
            .map(response => <User>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || "Server error");
    }
}