import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 1;
  Here(id: number) {
    this.title = id;
  }
  isActive(id: number) {
    if (this.title === id) {
      return 'active' ;
    }
    return null;
  }
}
