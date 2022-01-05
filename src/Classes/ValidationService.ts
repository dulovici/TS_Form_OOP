//ValidationService class/ responsible to provide validation tools

import { CheckedValue } from "../Types/types";

export class ValidationService {
  checkName(name: string): CheckedValue {
    if (name === "") return ["error", "Type your name please."];
    return name;
  }

  checkLName(lName: string): CheckedValue {
    if (lName === "") return ["error", "Type your last name please"];
    return lName;
  }

  checkEmail(email: string): CheckedValue {
    const re = /\S+@\S+\.\S+/;
    if (email === "") return ["error", "Type your email please"];
    if (!re.test(email)) return ["error", "Email is not valid, try again."];
    return email;
  }

  checkPassword(password: string): CheckedValue {
    const re = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,20}$");
    if (password === "") return ["error", "Set your date of password please."];
    if (re.test(password)) return password;
    return [
      "error",
      "Password must be between 6 and 20 characters with at least one upper case letter, one lower case letter and one digit",
    ];
  }

  checkLegality(dOb: string): CheckedValue {
    const today = new Date();
    const birthDate = new Date(dOb);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (dOb === "") return ["error", "Set your date of birth please."];
    if (age <= 18) return ["error", "You need to be onder than 18."];
    return `${age}`;
  }

  checkGender(gender: string): CheckedValue {
    if (!gender) return ["error", "Pick your gender."];
    return gender;
  }

  checkMobile(mobile: string): CheckedValue {
    const re = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    if (mobile === "") return ["error", "Please give us your mobile number."];
    if (!re.test(mobile)) return ["error", "Invalid phone number."];
    return mobile;
  }

  checkAdress(adress: string): CheckedValue {
    if (adress === "") return ["error", "Type your adress please."];
    return adress;
  }
}
