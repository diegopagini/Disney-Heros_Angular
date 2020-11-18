import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Personajes } from '../interfaces/personajes.interfaces';
import { PersonajesService } from '../servicios/personajes.service.ts.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  personajes: Array<Personajes>;
  personajesBuscados: Array<Personajes>;

  search = new FormControl;

  constructor(private personajesService: PersonajesService) { }

  ngOnInit(): void {
    this.getCharacters()
  }

  listenSearch() {
    this.search.valueChanges.subscribe(result => {
      this.personajesBuscados = this.personajes.filter((el: Personajes) => {
        return el.nombre.toLocaleLowerCase().includes(result)
      })
    })
  }

  getCharacters() {
    this.personajesService.getPersonajes().subscribe((response: Array<Personajes>) => {
      this.personajes = response;
    });
  }

  searching() {
    if ( this.search.value != '') {
      console.log('value', this.search.value)

      this.personajes = this.personajes.filter((element: Personajes) => {
        return element.nombre.includes(this.search.value);
      })
    } else {
      this.personajes
    }
  }
}
