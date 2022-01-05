// App Class / responsible business logic

import { Account } from "./Classes/Account.js";
import { Form } from "./Classes/Form.js";
import { Constants } from "./Enums/Enums.js";
import { ValidationService } from "./Classes/ValidationService.js";

const { EmptyString } = Constants;
class App {
  form: Form;
  service: ValidationService;

  constructor() {
    this.form = new Form();
    this.service = new ValidationService();
  }

  scanForErrors(filledForm: Account): string[] {
    const errors = [];
    Object.values(filledForm).forEach((el) => {
      if (el[0] === "error") errors.push(el[1]);
    });
    return errors;
  }

  displayError(errors: string[]): void {
    this.form.errorListHtmlElement.textContent = EmptyString;
    this.form.msgHtmlElement.classList.remove("green");
    this.form.msgHtmlElement.textContent = "Inputs need to be filled corectly.";
    errors.forEach((el) => {
      const ul = document.createElement("ul");
      ul.className = "error-msg";
      ul.textContent = el;
      this.form.errorListHtmlElement.append(ul);
    });

    this.form.msgContainerHtmlElement.classList.remove("hidden");
  }

  displaySuccess(): void {
    this.form.errorListHtmlElement.innerHTML = EmptyString;
    this.form.msgHtmlElement.textContent = "You created an account.";
    this.form.msgHtmlElement.classList.add("green");
    this.form.msgContainerHtmlElement.classList.remove("hidden");
  }

  submitForm(): void {
    const colectedData = this.form.getData();
    const validationService = this.service;
    const user = new Account(colectedData, validationService);
    const errors = this.scanForErrors(user);
    errors.length > 0 ? this.displayError(errors) : this.displaySuccess();
  }

  ressetForm(): void {
    this.form.clearData();
    this.form.msgContainerHtmlElement.classList.add("hidden");
    this.form.msgHtmlElement.textContent = EmptyString;
    this.form.errorListHtmlElement.innerHTML = EmptyString;
  }
}

window.onload = function (): void {
  const app = new App();
  app.form.submitBtn.addEventListener("click", app.submitForm.bind(app));
  app.form.ressetBtn.addEventListener("click", app.ressetForm.bind(app));
};
