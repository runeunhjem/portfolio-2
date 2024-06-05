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

export const updateFocusableElements = () => {
  const ariaHiddenElements = document.querySelectorAll('[aria-hidden="true"]');

  ariaHiddenElements.forEach((element) => {
    const focusableElements = element.querySelectorAll(
      "a, button, input, textarea, select, [tabindex]",
    );

    focusableElements.forEach((focusableElement) => {
      focusableElement.setAttribute("tabindex", "-1");
    });
  });
};