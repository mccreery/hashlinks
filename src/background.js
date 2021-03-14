const jumpMenuItemId = browser.contextMenus.create({
  title: browser.i18n.getMessage("jumpToElement")
});

const copyMenuItemId = browser.contextMenus.create({
  title: browser.i18n.getMessage("copyLinkToElement")
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case jumpMenuItemId:
      console.log("Boing boing");
      break;
    case copyMenuItemId:
      console.log("Snip snip");
      break;
  }
});
