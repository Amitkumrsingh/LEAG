

function wordSearch() {
    document.getElementById('searchResult').style.visibility = 'visible';


    var word = document.getElementById('word');
    var audio = document.getElementById('audio');
    var definition = document.getElementById('definition');
    var example = document.getElementById('example');
    var synonyms= document.getElementById('synonyms');

    var wordToSearch = document.getElementById('searchBox').value;

function constructAPIEndpoint (word, language, version = 'v2') {
    return `https://api.dictionaryapi.dev/api/${version}/entries/${language}/${word}`;
  }
  
  const form = document.querySelector('form');
  
  form.addEventListener("submit", function(e) {
    e.preventDefault();
  
    let word = document.querySelector('#input1').value,
      language = document.querySelector('[name="lang"]').value;
  
    return window.location.assign(constructAPIEndpoint(word, language));
  });