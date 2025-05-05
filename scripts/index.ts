import { Folder } from "./Folder";

const createFolderButton = document.getElementById("create-folder-button");
const rootContainer = document.getElementById("root-container");

if (createFolderButton !== null) {
    createFolderButton.addEventListener("click", () => {
    
    if (rootContainer !== null) {
      const createRoot = new Folder(rootContainer, 0);
      createRoot.getFolder();
    }
  });
}
