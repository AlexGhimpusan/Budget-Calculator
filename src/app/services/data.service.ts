import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Value } from '../common/value';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private totalBudget: number = 0;
  private values: Value[] = [];

  private totalBudgetBehaviorSubject = new BehaviorSubject<number>(this.totalBudget);
  currentBudget = this.totalBudgetBehaviorSubject.asObservable();

  private valuesBehaviorSubject = new BehaviorSubject<Value[]>(this.values);
  currentValues = this.valuesBehaviorSubject.asObservable();

  constructor() { }

  addNewValue(inputAmount: number, inputDescription: string) {
    this.values.push(new Value(inputAmount, inputDescription))
    this.valuesBehaviorSubject.next(this.values);
  }

  updateBudget(amount: number) {
    this.totalBudget += amount;
    this.totalBudgetBehaviorSubject.next(this.totalBudget);
  }

  resetData() {
    this.values = [];
    this.totalBudget = 0;

    this.valuesBehaviorSubject.next(this.values);
    this.totalBudgetBehaviorSubject.next(this.totalBudget);
  }
}
