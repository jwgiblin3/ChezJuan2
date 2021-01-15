import { Component, OnInit } from '@angular/core';
import * as data from '../../../../assets/data/recipes.json';
import { RecipeDetail } from '../../models/recipe-detail';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: RecipeDetail;

  constructor() {
    this.recipe = (data as any).default as RecipeDetail;
   }

  ngOnInit(): void {
  }

}
