import { Component, OnInit, Input, Output, EventEmitter, QueryList, ViewChildren } from '@angular/core';
import { IMultiselectItem } from 'src/app/models/multiselect-item.model';


@Component({
  selector: 'app-multiselect-item',
  templateUrl: './multiselect-item.component.html',
  styleUrls: ['./multiselect-item.component.scss']
})
export class MultiselectItemComponent {
  @Input() item: IMultiselectItem;
  @ViewChildren(MultiselectItemComponent) subItems: QueryList<MultiselectItemComponent>;
  @Output() valueChanged = new EventEmitter();

  onValueChanged(value: boolean) {
    this.item.checked = value;
    this.subItems.forEach((subItem: MultiselectItemComponent) => subItem.onValueChanged(value));
    this.valueChanged.emit(value);
  }

  childValueChanged(value: boolean) {
    const children = this.item.children.reduce((acc, val) => {
      val.checked ? acc.checked++ : acc.unchecked++;
      return acc;
    }, {
      checked: 0,
      unchecked: 0,
    });
    this.item.checked = children.checked === this.item.children.length;
    this.valueChanged.emit(this.item.checked);
  }


}
