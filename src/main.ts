import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import "bootstrap/dist/js/bootstrap.js";
import "jquery";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module'

platformBrowserDynamic().bootstrapModule(AppModule);
