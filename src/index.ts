import { Account } from "./Classes/Account.js";
import { Form } from "./Classes/Form.js";
import { Constants } from "./Enums/Enums.js";

const { EmptyString } = Constants;
class App {
  form: Form;

  constructor() {
    this.form = new Form();
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
    const data = this.form.getData();
    const user = new Account(data);
    const errors = [];
    Object.values(user).forEach((el) => {
      if (el[0] === "error") errors.push(el[1]);
    });
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
