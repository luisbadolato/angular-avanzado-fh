import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    { 
      title: 'Dashboard', 
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Main', url: '/'},
        { title: 'Charts', url: 'charts'},
        { title: 'Progress Bar', url: 'progress'},
        { title: 'Promises', url: 'promises'},
        { title: 'Reactive', url: 'reactive'},
      ]
    },
  ];


  constructor() { }
}
