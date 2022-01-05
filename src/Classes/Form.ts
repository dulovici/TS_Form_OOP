// Form Class / responsible for interaction with DOM

import { IFormEntries } from "../Interfaces/interfaces.js";
import { RadioButton } from "../Types/types.js";
import { Constants } from "../Enums/Enums.js";

const { EmptyString } = Constants;
export class Form {
  firstNameHtmlElement: HTMLInputElement;
  lastNameHtmlElement: HTMLInputElement;
  nickNameHtmlElement: HTMLInputElement;
  eMailHtmlElement: HTMLInputElement;
  passwordHtmlElement: HTMLInputElement;
  dObHtmlElement: HTMLInputElement;
  genderHtmlElement: NodeListOf<Element>;
  mobileHtmlElement: HTMLInputElement;
  adressHtmlElement: HTMLInputElement;
  msgContainerHtmlElement: HTMLElement;
  msgHtmlElement: HTMLElement;
  errorListHtmlElement: HTMLElement;
  submitBtn: HTMLButtonElement;
  ressetBtn: HTMLButtonElement;

  constructor() {
    this.firstNameHtmlElement = document.querySelector("#fname");
    this.lastNameHtmlElement = document.querySelector("#lname");
    this.nickNameHtmlElement = document.querySelector("#nname");
    this.eMailHtmlElement = document.querySelector("#email");
    this.passwordHtmlElement = document.querySelector("#password");
    this.dObHtmlElement = document.querySelector("#dob");
    this.genderHtmlElement = document.querySelectorAll('input[name="gender"]');
    this.mobileHtmlElement = document.querySelector("#mobile");
    this.adressHtmlElement = document.querySelector("#adress");
    this.msgContainerHtmlElement = document.querySelector(".msg-wr");
    this.msgHtmlElement = document.querySelector(".msg");
    this.errorListHtmlElement = document.querySelector(".error-list");
    this.submitBtn = document.querySelector("#submit");
    this.ressetBtn = document.querySelector("#resset");
  }

  radioButtonValue(radioGroup: NodeListOf<Element>): RadioButton {
    let radioValue = null;
    radioGroup.forEach((el: HTMLInputElement) => {
      if (el.checked) radioValue = el.value;
    });
    return radioValue;
  }

  getData(): IFormEntries {
    return {
      firstName: this.firstNameHtmlElement.value,
      lastName: this.lastNameHtmlElement.value,
      nickName: this.nickNameHtmlElement.value,
      eMail: this.eMailHtmlElement.value,
      password: this.passwordHtmlElement.value,
      dOb: this.dObHtmlElement.value,
      gender: this.radioButtonValue(this.genderHtmlElement),
      mobile: this.mobileHtmlElement.value,
      adress: this.adressHtmlElement.value,
    };
  }

  clearData(): void {
    this.firstNameHtmlElement.value = EmptyString;
    this.lastNameHtmlElement.value = EmptyString;
    this.nickNameHtmlElement.value = EmptyString;
    this.eMailHtmlElement.value = EmptyString;
    this.passwordHtmlElement.value = EmptyString;
    this.dObHtmlElement.value = EmptyString;
    this.mobileHtmlElement.value = EmptyString;
    this.adressHtmlElement.value = EmptyString;
  }
}
