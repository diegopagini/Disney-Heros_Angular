import { Component, Input, OnInit } from '@angular/core';
import { Personajes } from 'src/app/interfaces/personajes.interfaces';

@Component({
  selector: 'app-horizontal-card',
  templateUrl: './horizontal-card.component.html',
  styleUrls: ['./horizontal-card.component.scss']
})
export class HorizontalCardComponent implements OnInit {

  @Input() personaje: Personajes;

  constructor() { }

  ngOnInit(): void {
  }

}
