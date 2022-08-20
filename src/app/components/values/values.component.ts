import { Component, OnInit } from '@angular/core';
import { Value } from 'src/app/common/value';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {
  
  values!: Value[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.currentValues.subscribe(values => this.values = values);
  }
  


}
