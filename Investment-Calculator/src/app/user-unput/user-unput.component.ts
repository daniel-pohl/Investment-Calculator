import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-unput',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-unput.component.html',
  styleUrl: './user-unput.component.css'
})
export class UserUnputComponent {

  onSubmit(){
    console.log('submitted!!');
  }

}
