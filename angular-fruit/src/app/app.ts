import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-fruit');
}
