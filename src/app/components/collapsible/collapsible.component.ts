import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss']
})
export class CollapsibleComponent {
  @Input() title: string;
  @Input() subtitle: string;
  isCollapsed: boolean = true;

}