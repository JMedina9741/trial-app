import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  hero = {
    name: 'spider-man'
  };

  
  heroes = [
    {name: 'Spider-Man'},
    {name: 'Iron Man'},
    {name: 'Capitan America'},
    {name: 'Black Widow'},
  ];

  selectedHero:string = "";
  selectHero(hero:any):void {
    this.selectedHero = hero.name;
    console.log('Selected Hero;', hero.name);

  }
  title = 'trial-app';
  saludo = 'Hola alumno de Angular';
  isUnchanged:boolean = true;
}
