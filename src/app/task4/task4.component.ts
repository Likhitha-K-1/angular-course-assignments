import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})
export class Task4Component {
  @Input('likes') likes!: number;
  @Input('clicked') clicked!: boolean;
  // likes = 116;
  // cliked = false;
  imSrc="../../assets/heart.png";
  onClick(){
    if(this.clicked){
      this.likes--;
      this.imSrc="../../assets/heart.png";
    }
    else{
      this.likes++;
      this.imSrc="../../assets/heart-red.png"
    }
    this.clicked=!this.clicked;
  }
}
