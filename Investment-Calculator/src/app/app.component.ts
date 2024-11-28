import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserUnputComponent } from "./user-unput/user-unput.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserUnputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Investment-Calculator';
}
