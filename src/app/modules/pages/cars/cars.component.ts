import { Component } from '@angular/core';
import { carsList } from '../../../../assets/cars-list';
import { Car } from '../../../models/car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss'
})
export class CarsComponent {

  carsList = carsList;
  // carNames:string[] = ['mercedes', 'volkswagen', 'peugeot', 'toyota', 'renault' ]
  mercedes: Car[] = [];
  renault: Car[] = [];
  toyota: Car[] = [];
  peugeot: Car[] =[];
  volkswagen: Car[] = [];

  constructor() { this.filterCars(); }

  filterCars() {
    this.mercedes = this.carsList.filter(car => car.company.toLowerCase() === 'mercedes');
    this.renault = this.carsList.filter(car => car.company.toLowerCase() === 'renault');
    this.toyota = this.carsList.filter(car => car.company.toLowerCase() === 'toyota');
    this.peugeot = this.carsList.filter(car => car.company.toLowerCase() === 'peugeot');
    this.volkswagen = this.carsList.filter(car => car.company.toLowerCase() === 'volkswagen');
  }

}
