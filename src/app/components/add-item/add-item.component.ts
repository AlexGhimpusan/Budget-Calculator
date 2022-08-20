import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  update(inputAmount: HTMLInputElement, inputDescription: HTMLInputElement) {
    this.dataService.updateBudget(+inputAmount.value);

    if (+inputAmount.value != 0) {
      this.dataService.addNewValue(+inputAmount.value, inputDescription.value);
    }

    inputAmount.value = '';
    inputDescription.value = '';
  }

  reset() {
    this.dataService.resetData();
  }

}
