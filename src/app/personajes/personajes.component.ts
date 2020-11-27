import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Personajes } from '../interfaces/personajes.interfaces';
import { PersonajesService } from '../servicios/personajes.service.ts.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss'],
})
export class PersonajesComponent implements OnInit {
  personajes: Array<Personajes>;
  personajesBuscados: Array<Personajes>;

  search = new FormControl();

  constructor(private personajesService: PersonajesService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.personajesService
      .getPersonajes()
      .subscribe((response: Array<Personajes>) => {
        this.personajes = response;
        this.personajesBuscados = response;
      });
  }

  searching() {
    this.personajesBuscados = this.personajes.filter((element: Personajes) => {
      return element.nombre.toLocaleLowerCase().includes(this.search.value.trim());
    });
  }
}
