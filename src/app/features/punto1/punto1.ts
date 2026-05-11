import { Component } from '@angular/core';

interface Event {
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-punto1',
  imports: [],
  templateUrl: './punto1.html',
  styleUrl: './punto1.css',
})
export class Punto1 {
  events: Event[] = [
    {
      name: 'Festival de Gastronomía y Cultura Regional',
      description:
        'Un evento de fin de semana con platos típicos, música en vivo, artesanías locales y actividades culturales para toda la familia.',
      image: 'images/image_placeholder_01.jpg',
    },
    {
      name: 'Maratón Eco‑Aventura',
      description:
        'Una carrera al aire libre que promueve el cuidado del medio ambiente, con circuitos que atraviesan bosques, senderos naturales y paisajes panorámicos.',
      image: 'images/image_placeholder_02.jpg',
    },
    {
      name: 'Cumbre de Innovación Tecnológica 2026',
      description:
        'Un encuentro que reúne a desarrolladores, emprendedores y empresas para presentar los últimos avances en inteligencia artificial, computación en la nube y tecnologías emergentes.',
      image: 'images/image_placeholder_03.jpg',
    },
  ];
  private _initialPosition: number = 0;
  currentPosition: number = 0;
  private _lastPosition: number = this.events.length;

  previousPosition(): void {
    this.currentPosition -= 1;
    if (this.currentPosition < this._initialPosition) {
      this.currentPosition = this._lastPosition - 1;
    }
  }

  nextPosition(): void {
    this.currentPosition += 1;
    if (this.currentPosition === this._lastPosition) {
      this.currentPosition = this._initialPosition;
    }
  }
}
