//the @angular/core module includes the types that provide the 
import { NgModule } from "@angular/core";
import { Repository } from "./repository";
import { Cart } from "./cart.model";
import { Order } from "./order.model";

//decorator that tells Angular that the ModelModule class is an Angular module
@NgModule({
    //property which is used to register classes for dependency injection
    //other parts of the application will be able to receive a repository object using dependency injection
    providers: [Repository, Cart, Order]
})
    //class
export class ModelModule {}