function brokerText(text, numberOfCharactersPerLine) {
  
  var words = text.split(" ");
  var phrase = "";
  var finalText = "";

  for (let i = 0; i < words.length; i++) {
    var phraseLength = phrase.length + words[i].length;

    if (phraseLength <= numberOfCharactersPerLine) {
      phrase += words[i] + " ";
      if (i == words.length - 1) 
        finalText += phrase + "\n";
    } else {
      finalText += phrase.trim() + "\n";
      phrase = words[i] + " ";
    }
  }
  return finalText.trim();
}

module.exports = brokerText;