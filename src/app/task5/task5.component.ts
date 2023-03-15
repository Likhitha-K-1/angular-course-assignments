import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.css']
})
export class Task5Component {
  @Input('heading') heading ?: string;
  clicked : boolean = false;

  onClick(){
    this.clicked=!this.clicked;
  }
}
