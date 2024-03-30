if (typeof window.getSelection != "undefined") {
    // return window.getSelection();
      text = window.getSelection().toString();
  } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
    // return document.selection;
      text = document.selection.createRange().text;
}
console.log(text);