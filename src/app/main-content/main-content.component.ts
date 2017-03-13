import {Component,OnInit} from "@angular/core"
import { DataService } from "./shared/data.service"
import { IData } from "./shared/data"

@Component({
	selector:"main-content",
	templateUrl:"src/app/main-content/main-content.component.html",
	styleUrls:['src/app/main-content/main-content.component.css']
})

export class MainComponent implements OnInit{

	data:IData;
	errorMessage:string;

	constructor(private _service:DataService){

	}


	ngOnInit():void{
		this._service.getData()
            .subscribe(data => 
            	this.data = data,
                error => this.errorMessage = <any>error);
		
	}

}