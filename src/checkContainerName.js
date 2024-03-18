const checkInput = (containerName) => {
  // e.preventDefault();
  let l = 0;
  let n = 0;
  let tooManyLetters = false;
  let tooManyNumbers = false;
  let tooFewLetters = false;
  let tooFewNumbers = false;

  if (containerName.length > 0) {
    for (let i = 0; i < containerName.length; i++) {
      if (checkLettersNumbers(containerName[i]) === true) l++;
      if (checkLettersNumbers(containerName[i]) === false) n++;
    }
  } else {
    // containerName.style.backgroundColor = "rgb(255, 0, 0, 0.7)";
    console.log("hi");
  }
  // check how many letters.
  if (l < 4) tooFewLetters = true;
  if (l > 4) tooManyLetters = true;

  // check how many numbers
  if (tooManyLetters === false && tooFewLetters === false) {
    if (n < 7) tooFewNumbers = true;
    if (n > 7) tooManyNumbers = true;
  }

  if (tooFewLetters || tooFewNumbers || tooManyLetters || tooManyNumbers) {
    // containerName.style.backgroundColor = "rgb(255, 0, 0, 0.7)";
    console.log("bad");
  }
  //    else containerName.style.backgroundColor = "transparent";
};

// check if letters
const checkLettersNumbers = (x) => {
  return x.toUpperCase() != x.toLowerCase();
};
export default checkInput;
