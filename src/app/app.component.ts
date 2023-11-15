import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  created = false;
  text = 'Show my name';
  numbers: number[] = [];

  onCreate() {
    this.created = !this.created;
    this.numbers.push(this.numbers.length + 1);
    console.log(this.numbers)
  }
}

