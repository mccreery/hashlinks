// Create context menu item, made visible later when applicable
const menuItemId = browser.menus.create({
  title: browser.i18n.getMessage("copyLinkToElement", "?"),
  visible: false
});

// The most recent targeted element HTML id property
let id;
let currentMenuId = 0;

browser.menus.onShown.addListener(async (info, tab) => {
  // Only show menu item in top level documents
  // And only if an element is targeted
  if (info.frameId !== 0 || info.targetElementId === undefined) {
    return;
  }

  // Record menu id in case it changes during async activity
  const menuId = ++currentMenuId;

  // Content script responds with id
  id = await browser.tabs.sendMessage(tab.id, {
    request: "id",
    targetElementId: info.targetElementId
  });

  // Don't show the item if the element tree had no id
  // Or if the menu changed
  if (id !== undefined && menuId === currentMenuId) {
    browser.menus.update(menuItemId, {
      title: browser.i18n.getMessage("copyLinkToElement", "#" + id),
      visible: true
    });

    browser.menus.refresh();
  }
});

browser.menus.onClicked.addListener(info => {
  const url = new URL(info.pageUrl);
  url.hash = id;
  navigator.clipboard.writeText(url);
});

browser.menus.onHidden.addListener(() => {
  browser.menus.update(menuItemId, { visible: false });
  ++currentMenuId;
});
