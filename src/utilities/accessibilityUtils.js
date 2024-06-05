export const addAriaLabels = () => {
  const rolesToUpdate = ["button", "link", "menuitem"];

  rolesToUpdate.forEach((role) => {
    const elements = document.querySelectorAll(`[role="${role}"]`);
    elements.forEach((element, index) => {
      if (!element.innerText.trim()) {
        if (!element.getAttribute("aria-label")) {
          element.setAttribute("aria-label", `${role} ${index + 1}`);
        }
      }
    });
  });
};
