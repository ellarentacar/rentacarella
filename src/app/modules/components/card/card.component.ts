import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() id:number = 0;
  @Input() company:string='';
  @Input() title:string = '';
  @Input() fuel:string = '';
  @Input() transmition:string = '';
  @Input() door_number:string = '';
  @Input() seats_number:string = '';
  @Input() air_conditioner:string = '';
  @Input() quatro_drive:string = '';
  @Input() imageUrl:string = '';

}
