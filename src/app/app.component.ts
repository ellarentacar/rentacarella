import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'rent a car ella herceg novi';
  constructor(private metaService: Meta) {}
  
  ngOnInit() {
    this.metaService.addTags([
      { name: 'description', content: 'rent a car herceg novi' },
      { name: 'keywords', content: 'rent, car, herceg novi, igalo, montenegro,crna gora, dubrovnik ' },
      { name: 'author', content: 'rent a car ella' },
    ]);
  }

}
