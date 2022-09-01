import { Component, OnInit } from '@angular/core';

interface Symptomes {
  src: string;
  id?: number;
  description: string;
}

@Component({
  selector: 'app-symptomes',
  templateUrl: './symptomes.component.html',
  styleUrls: ['./symptomes.component.scss'],
})
export class SymptomesComponent implements OnInit {
  symptomes: Symptomes[] = [
    {
      src: '',
      id: 1,
      description: 'Сильное натуживание',
    },
    {
      src: '',
      id: 2,
      description: 'Редкая и трудная дефекация',
    },
    {
      src: '',
      id: 3,
      description: 'Боль в животе',
    },
    {
      src: '',
      id: 4,
      description: 'Урчание',
    },
    {
      src: '',
      id: 5,
      description: 'Ощущение неполного опорожнения',
    },
    {
      src:'',
      id: 6,
      description:'Тяжесть в животе'
      },
  ];
  constructor() {}

  ngOnInit(): void {}
}
