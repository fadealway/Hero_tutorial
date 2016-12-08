import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes';
  
  // test = {table:[{a:"1",b:"2"},{a:"9",b:"9"}]}

  // hero = 'Windstorm';
  hero: Hero = {
  id: 1,
  name: 'Windstorm'
};
  
}

