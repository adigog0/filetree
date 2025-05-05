import { validation } from "../utils/validation";
import { Utils } from "./Utils";

export class File extends Utils {
  private parent: HTMLElement;
  private nesting: number;

  constructor(parent: HTMLElement, nesting: number) {
    super();
    this.parent = parent;
    this.nesting = nesting;
  }

  fileActionHandler(file: HTMLElement) {
    const fileDeleteButton = file.children[2];
    fileDeleteButton.addEventListener("click", () => {
      this.parent.removeChild(file);
    });
  }

  private validFile(input: HTMLInputElement) {
    const file = this.createFile(input.value, this.nesting);
    this.fileActionHandler(file);
    this.parent.removeChild(input);
    this.parent.appendChild(file);
  }

  private invalidFile(input: HTMLInputElement) {
    if (input == null) return;
    this.parent.removeChild(input);
  }

  generateInput() {
    const input = this.createInput();

    this.parent.appendChild(input);
    input.focus();

    input.addEventListener("blur", () => {
      const valid = validation(input);
      if (valid) {
        this.validFile(input);
      } else {
        this.invalidFile(input);
      }
    });

    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const valid = validation(input);
        if (valid) {
          this.validFile(input);
        } else {
          this.invalidFile(input);
        }
      }
    });
  }

  getFile() {
    this.generateInput();
  }
}
