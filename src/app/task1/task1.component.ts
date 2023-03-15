import { Component } from '@angular/core';
import { Task1Service } from './task1.service';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {
  authors: string[];
  constructor(author: Task1Service){
    this.authors=author.getAuthors();
  }
}
