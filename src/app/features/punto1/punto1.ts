import { Component } from '@angular/core';

@Component({
  selector: 'app-punto1',
  imports: [],
  templateUrl: './punto1.html',
  styleUrl: './punto1.css',
})
export class Punto1 {
  events: { name: string; description: string; image: string }[] = [
    {
      name: 'Festival de Gastronomía y Cultura Regional',
      description:
        'Un evento de fin de semana con platos típicos, música en vivo, artesanías locales y actividades culturales para toda la familia.',
      image: 'images/image_placeholder.jpg',
    },
    {
      name: 'Maratón Eco‑Aventura',
      description:
        'Una carrera al aire libre que promueve el cuidado del medio ambiente, con circuitos que atraviesan bosques, senderos naturales y paisajes panorámicos.',
      image: 'images/image_placeholder.jpg',
    },
    {
      name: 'Cumbre de Innovación Tecnológica 2026',
      description:
        'Un encuentro que reúne a desarrolladores, emprendedores y empresas para presentar los últimos avances en inteligencia artificial, computación en la nube y tecnologías emergentes.',
      image: 'images/image_placeholder.jpg',
    },
  ];
}
