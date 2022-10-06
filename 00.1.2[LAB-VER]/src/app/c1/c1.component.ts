import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  nome:string;
  constructor() { 
    this.nome = 'secondo'
  }

  ngOnInit(): void {
  }

}
