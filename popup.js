window.onload = function () {

  let url;
  let frame = document.getElementById('frame');

  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, currentTab);

  function currentTab(tabs) {
    url = tabs[0].url;
    if (!url.match('youtube')) {
      return;
    }
    frame.src = url.replace('youtube.com', '9xyoutube.com');

  }

} 
