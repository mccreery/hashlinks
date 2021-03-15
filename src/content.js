browser.runtime.onMessage.addListener((message, _, sendResponse) => {
  // Handle id requests
  if (message.request === "id") {
    let element = browser.menus.getTargetElement(message.targetElementId);
    element = getAncestorWithId(element);

    if (element) {
      sendResponse(element.id);
    }
  }
});

/**
 * Searches up the DOM for an element with an id.
 *
 * @param {HTMLElement} element The child element.
 * @returns The child or closest ancestor with a truthy id, otherwise null.
 */
 function getAncestorWithId(element) {
  while (element && !element.id) {
    element = element.parentElement;
  }
  return element;
}
