import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunction(): void; // Hack-fraud para obligar a TS a "localizar" la función en el scope global

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  
  constructor( private settingsService: SettingsService ) { }
  
  ngOnInit(): void {
    
    customInitFunction();

  }

  

}


