import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //selector - element <app-root></app-root>
  // selector: '[app-root]', //selector - atribute <div app-root></div>
  // selector: '.app-root', //selector - class <div class="app-root"></div>
  templateUrl: './app.component.html',
  /*styleUrls: ['./app.component.scss']*/
  styles: [`
    h1{
      color: blueviolet;
     } 
    hr{
      color: #ddd;
      box-shadow: 0 2px 10px #888888;
    }
  `]
})
export class AppComponent {
  title = 'My test app';
}
