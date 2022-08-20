import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ValuesComponent } from './components/values/values.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { TotalBudgetComponent } from './components/total-budget/total-budget.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ValuesComponent,
    AddItemComponent,
    TotalBudgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
