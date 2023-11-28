import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public navLinks = [
    { location: '/', label: 'Home' },
    { location: '/shopping-cart', label: 'Basket' },
  ];

  public activeLink = this.navLinks[0];
  
  constructor(private router: Router) {}

  ngOnInit() {
    sessionStorage.clear();
    this.router.navigate([''])
  }
}
