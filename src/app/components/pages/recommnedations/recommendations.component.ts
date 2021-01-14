import { Component, OnInit } from '@angular/core';
import { Recommendation } from '../../models/recommendations.model';

import * as data from './recommendations.json';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})



export class RecommendationsComponent implements OnInit {

  recommendations: Recommendation[];
  constructor() {
    this.recommendations = (data as any).default as Recommendation[];
   }

  ngOnInit(): void {
  }

}
