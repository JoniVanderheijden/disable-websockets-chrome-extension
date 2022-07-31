function toggleWebSockets() {
  if (window) {
    delete window.WebSocket;
    console.log('WebSockets disabled | Extension Clicked');

    window.addEventListener('load', () => {
      delete window.WebSocket;
      console.log('WebSockets disabled | Page Loaded');
    });
  }
}

chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.includes('chrome://')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: toggleWebSockets,
    });
  }
});
