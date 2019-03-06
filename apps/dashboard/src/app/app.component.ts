import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') localSideNav: MatSidenav;
  title = 'Angular core workshop';

  links = [
    { path: '/', icon: 'home', title: ' Home' },
    { path: '/customers', icon: 'face', title: 'Customers' },
    { path: '/projects', icon: 'work', title: 'Projects' }
  ];

  //asignando a una variable local la variable del template
  toggle() {
    this.localSideNav.toggle();
  }

  //pasando la varaible del template como referencia
  toggle2(sidenav) {
    sidenav.toggle();
  }
}
