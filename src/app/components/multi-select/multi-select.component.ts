import { Component, OnInit, Input } from '@angular/core';
import { IMultiselectItem } from 'src/app/models/multiselect-item.model';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent {
  @Input() items: IMultiselectItem[];

  recursevlyRetrieveChecked(items: IMultiselectItem[], accumulator: IMultiselectItem[]) {
    items.forEach((item: IMultiselectItem) => {
      if (item.checked) {
        accumulator.push(item);
      }
      if (item.children) {
        this.recursevlyRetrieveChecked(item.children, accumulator);
      }
    });
    return accumulator;
  }
  getContainerSubtitle() {
    if (!this.items) {
      return '';
    }
    const checkedElements = this.recursevlyRetrieveChecked(this.items, []);
    let itemsCount = '';
    if (checkedElements.length > 1) {
      itemsCount = 'Multiple items checked';
    } else if (checkedElements.length === 1) {
      itemsCount = checkedElements[0].name;
    } else {
      itemsCount = 'No items checked';
    }
    return `Monopoly Inc. | ${itemsCount}`;
  }

  saveData() {
    const allSelectedData = this.recursevlyRetrieveChecked(this.items, []);
    console.log(allSelectedData);
  }
}
