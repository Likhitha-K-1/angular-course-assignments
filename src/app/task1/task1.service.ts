import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Task1Service {
  constructor() { }
  getAuthors(){
    return ["author1","author2","author3"];
  }
}
