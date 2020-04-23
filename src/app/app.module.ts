import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { CollapsibleComponent } from './components/collapsible/collapsible.component';
import { MultiselectItemComponent } from './components/multiselect-item/multiselect-item.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    MultiSelectComponent,
    CollapsibleComponent,
    MultiselectItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
