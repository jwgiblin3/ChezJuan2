import { Component, Input, OnInit } from '@angular/core';
import { Recommendation } from '../../models/recommendations.model'
@Component({
  selector: 'app-prod-rec',
  templateUrl: './prod-rec.component.html',
  styleUrls: ['./prod-rec.component.css']
})
export class ProdRecComponent implements OnInit {

  @Input() recommendation: Recommendation;
  
  constructor() { }

  ngOnInit(): void {
  }

}
