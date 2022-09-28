import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-component',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
  nome:string;
  constructor() { 
    this.nome = 'terzo'
  }

  ngOnInit(): void {
  }

}
