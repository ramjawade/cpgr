import { Component, Input, OnInit } from '@angular/core';
import { INav } from './nav.interface';

@Component({
  selector: 'pgr-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() isSidebarOpened: boolean = false;

  navList: INav[] = [
    {
      name: 'Home',
      link: '',
      icon: 'house',
    },
    {
      name: 'Dashboard',
      link: 'dashboard',
      icon: 'grid',
    },
    {
      name: 'Ticket Management',
      link: 'tickets',
      icon: 'ticket-detailed',
    },
    {
      name: 'User Management',
      link: 'users',
      icon: 'people',
    },
  ];

  bottomNavList :INav[] = [
    {
      name: 'Setting',
      link: '',
      icon: 'gear',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}