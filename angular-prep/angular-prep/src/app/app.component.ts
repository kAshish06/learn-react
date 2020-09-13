import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-prep';
  test = ['pen', 'book', 'ink'];
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getAnimals().subscribe(
      (res) => {
        console.log(res);
      },
      (e) => {
        console.log(e);
      }
    );
  }
}
