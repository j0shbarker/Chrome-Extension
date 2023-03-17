document.addEventListener('DOMContentLoaded', function() {
    var note = document.getElementById('note');
    var saveButton = document.getElementById('save');
    var clearButton = document.getElementById('clear');
  
    // Load the saved note, if any
    chrome.storage.local.get(['note'], function(result) {
      note.value = result.note;
    });
  
    // Save the note when the "Save Note" button is clicked
    saveButton.addEventListener('click', function() {
      chrome.storage.local.set({note: note.value});
      alert('Note saved!');
    });
  
    // Clear the note when the "Clear Note" button is clicked
    clearButton.addEventListener('click', function() {
      note.value = '';
      chrome.storage.local.remove('note');
      alert('Note cleared!');
    });
    // Save the text in the textarea to local storage when the user clicks the Save button
document.getElementById('save-button').addEventListener('click', function() {
    var text = document.getElementById('note-text').value;
    chrome.storage.sync.set({note: text}, function() {
      console.log('Note saved');
    });
  });
  
  // Retrieve the saved text from local storage when the extension is opened
  document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.sync.get('note', function(data) {
      if (data.note) {
        document.getElementById('note-text').value = data.note;
      }
    });
  });
  // Add event listener to the "View Notes" button
document.getElementById('view-notes-button').addEventListener('click', function() {
    // Retrieve the saved notes from local storage
    chrome.storage.sync.get('notes', function(data) {
      // Display the saved notes in an alert window
      alert(data.notes);
    });
  });
  
  
  });
  