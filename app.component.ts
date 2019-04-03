import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { UserService } from './User.service';
import { Placer } from './placer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'primengtest';
  user: User;
  placer: Placer[];
  constructor(  private userService: UserService) {
  }

 ngOnInit() {
  this.userService.getUser(1).subscribe(
    data => {
      this.user = data;
      console.log(this.user);
    },
    error => {console.log(error); }
  );
  this.userService.getPlacer().subscribe(
    data => {
      this.placer = data;
      console.log(this.placer);
      },
    error => {console.log(error); }
  );
 }
}
