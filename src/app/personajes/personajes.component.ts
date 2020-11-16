import { Component, OnInit } from '@angular/core';
import { Personajes } from '../interfaces/personajes.interfaces';
import { PersonajesService } from '../servicios/personajes.service.ts.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  personajes: Array<Personajes>;

  constructor(private personajesService: PersonajesService) { }

  ngOnInit(): void {
    this.personajesService.getPersonajes().subscribe((response: Array<Personajes>) => {
      this.personajes = response;
    });
  }

}
