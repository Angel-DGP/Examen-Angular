import { Component } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
    imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  cerrarSesion(){
    console.log('Cerrando sesion...')
  }
}
