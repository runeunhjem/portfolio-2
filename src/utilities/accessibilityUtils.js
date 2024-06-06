/**
 * Adds ARIA labels to elements with specified roles if they lack inner text or an ARIA label.
 * The roles updated are "button", "link", and "menuitem".
 */
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

/**
 * Updates focusable elements within elements that have aria-hidden="true".
 * Sets tabindex to -1 for these focusable elements to remove them from the tab order.
 */
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
