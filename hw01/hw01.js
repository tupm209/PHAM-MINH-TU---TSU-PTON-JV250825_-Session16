function processConfirm() {
  let answer = confirm("Would you like to play a game chess?");
  let result;

  if (answer) {
    result = "Excellent. We'll play a nice game of chess.";
  } else {
    result = "Maybe later then.";
  }
  return result;
}

alert(processConfirm());
