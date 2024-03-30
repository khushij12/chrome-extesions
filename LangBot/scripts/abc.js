document.getElementById("1").addEventListener("click", () => {
    // {"tabId": choosen box}
    chrome.action.setBadgeBackgroundColor({color:'palegoldenrod'});
});
document.getElementById("2").addEventListener("click", () => {
    console.log("Hello");
    chrome.action.setBadgeBackgroundColor({color:'#f09892'});
});
document.getElementById("3").addEventListener("click", () => {
    console.log("Hello");
    chrome.action.setBadgeBackgroundColor({color:'#d5f092'});
});
document.getElementById("4").addEventListener("click", () => {
    console.log("Hello");
    chrome.action.setBadgeBackgroundColor({color:'#92f0e3'});
});
document.getElementById("5").addEventListener("click", () => {
    console.log("Hello");
    chrome.action.setBadgeBackgroundColor({color:'#92ccf0'});
});
document.getElementById("6").addEventListener("click", () => {
    console.log("Hello");
    chrome.action.setBadgeBackgroundColor({color:'#d8c3fa'});
});