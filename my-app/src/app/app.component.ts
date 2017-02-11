import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!!';
  value = 0;
  values = [12, 44, 99, 10];
  valueif = true;
  valueswitch = 'case1';
  valuepipe = 'aBc';
  isActive = true;
  myClasses = {
    largeText: true,
    infoColor: true
  }

  save(event){
    console.log(event);
  }
}
