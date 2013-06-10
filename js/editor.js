window.SimpleEditor = (function() {
  'use strict';

  /**
   * Constructor
   */
  function SimpleEditor(options) {
    //get the editor element
    this.element = document.getElementById(options.holder);

    //bind event handlers for the editor
    bindHandlers(this);
  }

  function bindHandlers(editor) {
    var d = editor.element;
    var editorContent = editor.element.querySelector('.editor-cotent');

    //set the default element to paragraph when you press enter
    document.execCommand('defaultParagraphSeparator', false, 'p');

    d.addEventListener('keydown', function(event) {
      console.log(event.keyCode);
      if (event.keyCode === 13) {
        //var paragraph = document.createElement('p');
        //event.target.appendChild(paragraph);
      }
    }, false);

    d.querySelector('[data-action="add-heading-one"]').addEventListener('click', function(event) {
      //console.log('add heading one: ', event);
      var h1 = document.createElement('h1');
      h1.innerHTML = 'Your cool title here';

      editorContent.appendChild(h1);
    }, false);

    d.querySelector('[data-action="add-heading-two"]').addEventListener('click', function(event) {
      console.log('add heading one: ', event);
    }, false);

    d.querySelector('[data-action="add-heading-three"]').addEventListener('click', function(event) {
      console.log('add heading one: ', event);
    }, false);
  }

  return SimpleEditor;
})();