import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main-content/main-content.component';
import {DataService} from './main-content/shared/data.service';
import {HttpModule} from "@angular/http"

@NgModule({
imports:[BrowserModule, HttpModule],
declarations:[AppComponent, HeaderComponent, MainComponent],
bootstrap:[AppComponent],
providers:[DataService]
})

export class AppModule{
	
}