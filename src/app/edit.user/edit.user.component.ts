import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-edit.user',
  templateUrl: './edit.user.component.html',
  styleUrls: ['./edit.user.component.css']
})
export class EditUserComponent {
  constructor(private  userData: DataService){}

}
