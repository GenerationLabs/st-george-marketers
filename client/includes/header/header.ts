import 'reflect-metadata';
import 'zone.js/dist/zone';
import {
    Component,
    Input,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';
import { MeteorComponent } from 'angular2-meteor';

@Component({
  selector: 'pageHeader',
  template: `
Start of App <br>
  `,
  directives: []
})
export class PageHeader extends MeteorComponent  {

}
