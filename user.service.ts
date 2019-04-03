import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';
import { Placer } from './Placer';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  placer: Placer[];
constructor() { }
getUser(id): Observable<User> {

  this.user = {
    id: 1,
    username: 'isreal',
    name: 'ישראל ישראלי'
  };
  return of(this.user);
}
getPlacer(): Observable<Placer[]> {

  this.placer = [{
    id: 1,
    firstname: 'ישראל',
    lastname: ' ישראלי',
    role: 'סוקר'
  },
  {
    id: 2,
    firstname: 'מנחם',
    lastname: ' כהן',
    role: 'סוקר'
  },
  {
    id: 3,
    firstname: 'מנחם',
    lastname: ' צרפתי',
    role: 'סוקר'
  },
  {
    id: 4,
    firstname: 'דוד',
    lastname: ' כהן',
    role: 'סוקר'
  },
  {
    id: 5,
    firstname: 'דוד',
    lastname: ' לוי',
    role: 'סוקר'
  }
  ,
  {
    id: 6,
    firstname: 'רעות',
    lastname: ' לוי',
    role: 'סוקר'
  },
  {
    id: 6,
    firstname: 'רעות',
    lastname: ' מנשה',
    role: 'סוקר'
  }];
  return of(this.placer);
}

}
