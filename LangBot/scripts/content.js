//get selected text from the page
//open the pop up for that text 
//pop up will have two option : from and to
//pop will have text box converting that text

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     if (request.action === "getSelectedText") {
//       // Get the selected text
//       var selectedText = window.getSelection().toString();
  
//       // Send the selected text back to the background script
//       sendResponse({ selectedText: selectedText });
//     }
//   });

function getSelectedText() {
  var text = "";
  if (typeof window.getSelection != "undefined") {
    // return window.getSelection();
      text = window.getSelection().toString();
  } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
    // return document.selection;
      text = document.selection.createRange().text;
  }
  return text;
}

function doSomethingWithSelectedText() {
  var selectedText = getSelectedText();
  if (selectedText.length>0) {
      alert("Got selected text " + selectedText);
  }
}

document.onmouseup = doSomethingWithSelectedText;
document.onkeyup = doSomethingWithSelectedText;