import { IFormEntries } from "../Interfaces/interfaces";
import { CheckedValue } from "../Types/types";
import {
  checkLegality,
  checkName,
  checkEmail,
  checkPassword,
  checkGender,
  checkMobile,
  checkAdress,
  checkLName,
} from "../Utilities/utilities.js";

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
  constructor(user: IFormEntries) {
    this.firstName = checkName(user.firstName);
    this.lastName = checkLName(user.lastName);
    this.nickName = user.nickName;
    this.eMail = checkEmail(user.eMail);
    this.password = checkPassword(user.password);
    this.dOb = checkLegality(user.dOb);
    this.gender = checkGender(user.gender);
    this.mobile = checkMobile(user.mobile);
    this.adress = checkAdress(user.adress);
  }
}
