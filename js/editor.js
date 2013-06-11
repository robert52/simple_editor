window.SimpleEditor = (function() {
  'use strict';

  /**
   * Constructor
   */
  function SimpleEditor(options) {
    //get the editor element
    this.element = document.getElementById(options.holder);

    this.editorContent = this.element.querySelector('.editor-content');
    var initialPara = document.createElement('p');
    initialPara.innerHTML = '<br>';

    this.editorContent.appendChild(initialPara);

    //bind event handlers for the editor
    bindHandlers(this);
  }

  function doCommand(command, value) {
    value = value || null;
    document.execCommand(command, false, value);
  }

  function bindHandlers(editor) {
    var d = editor.element;
    var editorContent = d.querySelector('.editor-content');;

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
      doCommand('formatBlock', 'H1');
    }, false);

    d.querySelector('[data-action="add-heading-two"]').addEventListener('click', function(event) {
      doCommand('formatBlock', 'H2');
    }, false);

    d.querySelector('[data-action="add-heading-three"]').addEventListener('click', function(event) {
      doCommand('formatBlock', 'H3');
    }, false);

    d.querySelector('[data-action="bold-text"]').addEventListener('click', function(event) {
      doCommand('bold');
    }, false);

    d.querySelector('[data-action="italic-text"]').addEventListener('click', function(event) {
      doCommand('italic');
    }, false);

    d.querySelector('[data-action="clear-formating"]').addEventListener('click', function(event) {
      doCommand('removeFormat');
    }, false);

    d.querySelector('[data-action="undo"]').addEventListener('click', function(event) {
      doCommand('undo');
    }, false);

    d.querySelector('[data-action="redo"]').addEventListener('click', function(event) {
      doCommand('redo');
    }, false);
  }

  return SimpleEditor;
})();