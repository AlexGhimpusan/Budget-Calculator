import { Component, OnInit } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  totalBudget: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  updateBudget(inputValue: string) {

    this.totalBudget += +inputValue;
  }

  resetBudget() {
    this.totalBudget = 0;
  }

}
