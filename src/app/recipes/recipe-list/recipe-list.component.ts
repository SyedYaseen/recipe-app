import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipeList: Recipe[] = [new Recipe("Test Recipe", "Made of testy ingredients", 'https://images.immediate.co.uk/production/volatile/sites/2/2020/08/OliveSeasonal_Curry_preview-b6eaadb-e1598019888998.jpg?quality=90&webp=true&resize=1072,714')]

  constructor() { }

  ngOnInit(): void {
  }

}
