import addFolderIcon from "../images/add-folder.svg";
import addFileIcon from "../images/add-file.svg";
import deleteIcon from "../images/delete.svg";
import fileSvg from "../images/file.svg";

export class Utils {
  createInput() {
    const input = document.createElement("input");
    input.classList.add("input");

    return input;
  }

  createButton(buttonIcon: HTMLImageElement, buttonName: string) {
    const button = document.createElement("button");
    button.classList.add("button");
    button.setAttribute("name", buttonName);

    button.appendChild(buttonIcon);

    return button;
  }

  createFolder(inputValue: string, nesting: number) {
    const folder = document.createElement("details");
    folder.classList.add("folder");
    folder.open;

    const toggle = document.createElement("summary");
    toggle.classList.add("toggle");
    toggle.textContent = inputValue;

    folder.style.setProperty("--indent", `${nesting * 0.2}rem`);

    const folderActions = this.createFolderActions();

    toggle.appendChild(folderActions);
    folder.appendChild(toggle);

    return folder;
  }

  createFolderActions() {
    const actionContainer = document.createElement("div");
    actionContainer.classList.add("action-containers");

    const addFolder = document.createElement("img");
    addFolder.classList.add("icon");
    const addFolderbutton = this.createButton(addFolder, "add-folder-button");

    const addFile = document.createElement("img");
    addFile.classList.add("icon");
    const addFilebutton = this.createButton(addFile, "add-file-button");

    const deleteFolder = document.createElement("img");
    deleteFolder.classList.add("icon");
    const deletebutton = this.createButton(deleteFolder, "delete-folder");

    actionContainer.appendChild(addFilebutton);
    addFile.src = addFileIcon;

    actionContainer.appendChild(addFolderbutton);
    addFolder.src = addFolderIcon;

    actionContainer.appendChild(deletebutton);
    deleteFolder.src = deleteIcon;

    return actionContainer;
  }

  createFile(inputValue: string, nesting: number) {
    const file = document.createElement("div");
    file.classList.add("file-container");
    file.id = `${nesting}`;

    const fileIcon = document.createElement("img");
    fileIcon.classList.add("file-icon");

    const fileText = document.createElement("span");
    fileText.textContent = inputValue;
    fileText.classList.add("file-text");

    const fileDeleteIcon = document.createElement("img");
    fileDeleteIcon.classList.add("file-deleteIcon");

    file.appendChild(fileIcon);
    fileIcon.src = fileSvg;

    file.appendChild(fileText);

    file.appendChild(fileDeleteIcon);
    fileDeleteIcon.src = deleteIcon;

    return file;

  }
}
