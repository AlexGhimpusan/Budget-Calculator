import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-total-budget',
  templateUrl: './total-budget.component.html',
  styleUrls: ['./total-budget.component.css']
})
export class TotalBudgetComponent implements OnInit {

  public totalBudget: number = 0;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.currentBudget.subscribe(currentBudget => this.totalBudget = currentBudget);
  }

}
