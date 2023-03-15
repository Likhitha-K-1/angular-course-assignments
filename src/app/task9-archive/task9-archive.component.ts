import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task9-archive',
  templateUrl: './task9-archive.component.html',
  styleUrls: ['./task9-archive.component.css']
})
export class Task9ArchiveComponent implements OnInit{
  year : number;
  month : number;

  constructor(private route : ActivatedRoute,
              private router : Router){ }
  ngOnInit(){
    let param = this.route.snapshot.paramMap;
    this.year = +param.get('year');
    this.month = +param.get('month');
  }
  
  viewAll(){
    this.router.navigate(['/']);
  }
  
}
