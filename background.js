chrome.action.onClicked.addListener((tab) => {
  
  console.log(tab.url);
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['script.js']
  });

});

