import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-component',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {
  nome: string;
  constructor() { 
    this.nome = 'quarto'
  }

  ngOnInit(): void {
  }

}
