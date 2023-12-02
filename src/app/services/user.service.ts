import { Injectable } from '@angular/core';
import { IUserModel } from '../models/entity';
import { employeeMath } from './data/data-math';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getInfosUser(): IUserModel {
    return employeeMath;
  }
}
