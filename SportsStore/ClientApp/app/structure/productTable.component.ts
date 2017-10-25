//these statements use the import keyword to declare dependencies on
//the types that the component relies on
//these paths never include file extensions, only their names

//import { Component } from '@angular/core' => tells Angular when a class is a component
import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { Product } from "../models/product.model";
import { Router } from "@angular/router";

//the Component brings the component to life and provides Angular with the information
//it needs to apply the component in the application
@Component({
    selector: "product-table",
    templateUrl: "./productTable.component.html"
})
export class ProductTableComponent {
    //used to declare a dependency on the Repository class
    //this dependency will be resolved using the dependency injection feature
    //when a new instance of the component is created
    constructor(private repo: Repository, private router: Router) { }

    get products(): Product[] {
        return this.repo.products;
    }

    selectProduct(id: number) {
        this.repo.getProduct(id);
        this.router.navigateByUrl("/detail");
    }
}
