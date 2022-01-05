// Account Class / responsible for creating a instance from colected data

import { IFormEntries } from "../Interfaces/interfaces";
import { CheckedValue } from "../Types/types";
import { ValidationService } from "../Classes/ValidationService.js";

export class Account {
  firstName: CheckedValue;
  lastName: CheckedValue;
  nickName: CheckedValue;
  eMail: CheckedValue;
  password: CheckedValue;
  dOb: CheckedValue;
  gender: CheckedValue;
  mobile: CheckedValue;
  adress: CheckedValue;
  constructor(user: IFormEntries, service: ValidationService) {
    this.firstName = service.checkName(user.firstName);
    this.lastName = service.checkLName(user.lastName);
    this.nickName = user.nickName;
    this.eMail = service.checkEmail(user.eMail);
    this.password = service.checkPassword(user.password);
    this.dOb = service.checkLegality(user.dOb);
    this.gender = service.checkGender(user.gender);
    this.mobile = service.checkMobile(user.mobile);
    this.adress = service.checkAdress(user.adress);
  }
}
