import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  public menu: any[] = [
    {
      title: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        {
          title: 'Main',
          url: '/',
        },
        {
          title: 'ProgressBar',
          url: 'progress',
        },
        {
          title: 'Grafico',
          url: 'grafico1',
        },
        {
          title: 'Promessa',
          url: 'promessa',
        },{
          title: 'Rxjs',
          url: 'rxjs',
        },
      ],
    },
  ];

  constructor() {}
}
