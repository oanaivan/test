import { Component } from '@angular/core';
import { MY_TEST_CONSTANT } from './utils/data.const';
import { IMultiselectItem } from './models/multiselect-item.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: IMultiselectItem[] = MY_TEST_CONSTANT;

}
