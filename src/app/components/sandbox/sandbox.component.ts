import {Component} from '@angular/core';
import {Customer} from './Customer'

@Component({
    selector: 'sandbox',
    templateUrl: './sandbox.component.html',
    styleUrls: ['./sandbox.component.css']
    /* styles: [`
        .special{
            color:green;
            font-size:24;
            text-transform:uppercase
        }
    `] */

})

export class SandboxComponent{
    name:string = 'Mike Davidson';
    age:number = 35;
    hasChildren:boolean = true;
    city:any = 'Boston';
    myNumberArray:number[] = [1,2,3];
    person = {firstname:'jon', lastname:'smith'};
    customers:Customer[];//using interface as type
    constructor (){
        //run stuff here
        console.log('Constructor ran...');
        this.hasBirthday();
        this.customers = [
            {
                id: 1,
                name: 'j smith',
                email: 'jsmith@gmail.com'
            },
            {
                id: 2,
                name: 'r smith',
                email: 'rsmith@gmail.com'
            },
            {
                id: 3,
                name: 't smith',
                email: 'tsmith@gmail.com'
            }
        ]
    }
    hasBirthday(){
        this.age += 1;
    }
    showAge():number{
        
        return this.age;
    }
}