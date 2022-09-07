import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

interface Ingridients {
  id: number;
  title: string;
  image: string;
  description: string;
  compound: string;
}

@Component({
  selector: 'app-ingridients',
  templateUrl: './ingridients.component.html',
  styleUrls: ['./ingridients.component.scss'],
})
export class IngridientsComponent implements OnInit {
  ingridients: Ingridients[] = [
    {
      id: 1,
      title: 'Ферула асафетида',
      image: 'assets/imgs/ingridients01.png',
      description:
        ' Многолетнее пряноароматическое растение семейства зонтичных, отличающееся огромными размерами (от 1,2 до 2 м) и резким, специфическим, крайне острым вкусом и ароматом. Едкий, неприятный запах асафетиды обусловлен большим содержанием в ней серных веществ.​Произрастает в центральной Азии, ткаже широко распространена на территории современных Ирана и Афганистана. В качестве пряности используется смола растения (олеосмола, камедь), которая представляет собой высушенный на воздухе млечный сок корневища.',
      compound:
        'Состав:*​<br/>от 25 до 60%  общей массы асафетиды составляет смола, состоящая из сложных эфиров феруловой кислоты​ ​<br/> Эфирное масло содержит соединения серы, некоторое количество терпенов, карбоновые кислоты* ',
    },
    {
      id: 2,
      title: 'Айован душистый',
      image: 'assets/imgs/ingridients02.png',
      description:
        'Однолетнее растение высотой до 1 метра, цветки мелкие, собраны в сложные зонтики, до 3-5 см в диаметре. Цветет в июне-июле, плоды созревают в августе- сентябре. Распространен в тропической Африке и от берегов Средиземноморья через Северо-Западную Азию, Индию до Западного Китая.',
      compound:
        'Эфирное масло, основным компонентом которого является тимол (40-60%) А также в составе масла присутствуют карвакрол, ά- и β- пинены, β-феландрен, парацимол, • до 50% жирного масла • протеины',
    },
    {
      id: 3,
      title: 'Гардения гуммифера',
      image: 'assets/imgs/ingridients03.png',
      description:
        'Большой куст или небольшое дерево, часто с кривым стеблем и шероховатыми витыми ветвями, кора буроватая, цветки крупные желтоватые. Произрастает только на территории Индии на плато Декан, и далее к северу в районах Бундельханд и Бихар',
      compound:
        'Состав:*• различные виды смолистых веществ • эфирное масло • флавоноиды (дикамалиартаны) • антрахиноны • таннины • фенольные соединения',
    },
    {
      id: 4,
      title: 'Имбирь лекарственный',
      image: 'assets/imgs/ingridients04.png',
      description:
        'Многолетнее травянистое растение вы сотой 0,5–1 м. Цветоносный стебель около 12 см в высоту, на его верх ушке – шишковидное соцветие. Считается, что вид бесплоден и не дает семян в обычных условиях культивирования. Растение размножается только путем разрастания корневища.Выращивается в Китае, в Индии, в Индонезии, в Австралии, вЗападной Африке, на Ямайке, на Барбадосе',
      compound:
        'Состав: • эфирное масло, • до 38% эфирного масла состоит из зингеберена, также масло содержит цинеол, борнеол, камфин, гингерол • жирные кислоты (олеиновая, каприловая, линолевая) • белки и аминокислоты (лейцин, валин, изолейцин, треонин, лизин, метионин, фенилаланин, триптофан)',
    },
    {
      id: 5,
      title: 'Перец чёрный',
      image: 'assets/imgs/ingridients05.png',
      description:
        'Многолетнее вьющееся растение. Цветки мелкие, серо-жёлтые или белые, собранные в соцветия длиной 7—10 см. Родом из Индии. В диком виде не встречается, культивируется в тропических странах.',
      compound:
        'Состав: алкалоиды • пиперин, пиролин, пиперидин, • эфирное масло • смолистые вещества • витамины',
    },
  ];
  constructor() {}
  active = false;
  @Input() init!: boolean;
  @Output() opened = new EventEmitter<any>();
  ngOnInit(): void {}
  toggleDialog($event:any) {
    console.log($event);
    
    this.active = !this.active;
    this.opened.emit();
  }
}
