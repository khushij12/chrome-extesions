// chrome.contextMenus.create({
//     title: "Get selected text",
//     context: ["page"],
//     onClick: function() {
//         chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//             chrome.tabs.sendMessage(tabs[0].id, { action: "getSelectedText" }, function(response) {
//               // Handle the response with the selected text
//               var selectedText = response.selectedText;
//               console.log("Selected Text:", selectedText);
//             })});
//     }
// })


chrome.action.setBadgeBackgroundColor({color:'palegoldenrod'});
chrome.action.setBadgeText({text:"      "})

// on any tab if color is changed then regsiter the tab id
// if tabid is registered => get its updated color
// else get defailt color

let TabsId = {};
function xyz(){

}
console.log("outer")

// function injectedFunction() {
   
//   } 
  
// chrome.action.onClicked.addListener((tab) => {
//     console.log("xfd")
//     chrome.scripting.executeScript({
//       target : {tabId : tab.id},
//       func : injectedFunction,
//     });
//   });