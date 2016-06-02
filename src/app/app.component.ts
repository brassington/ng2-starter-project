import { Component } from '@angular/core';
import { HomeComponent } from './+home';
import { RouteConfig, Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import { AboutComponent } from './+about';
import { ItemsComponent } from './+items';
import {MessageService} from './shared';
import { WidgetsComponent } from './+widgets';
import { GadgetsComponent } from './gadgets';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [MessageService]
})
@RouteConfig([
  {path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true},
  {path: '/about', name: 'About', component: AboutComponent},
  {path: '/items', name: 'Items', component: ItemsComponent},
  {path: '/widgets', name: 'Widgets', component: WidgetsComponent},
  {path: '/gadgets', name: 'Gadgets', component: GadgetsComponent},
  {path: '/**', redirectTo: ['Home']}
])
export class AppComponent {
  constructor(private router: Router) {}
}
