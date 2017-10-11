import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'category'    
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {

    transform(categories: any, searchText: any): any {
        if (searchText == null) return categories;

        return categories.filter(function (category) {
            return ((category.brand.toLowerCase().indexOf(searchText.toLowerCase()) > -1) || (category.model.toLowerCase().indexOf(searchText.toLowerCase()) > -1));
        })        
    }
}