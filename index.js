function StringChallenge(str) {
  if (str.length < 7 || str.length > 31) return false;
  let passCheck = str.replace(/[^\w]/g, "").toLocaleLowerCase();
  if (passCheck.includes("password")) return false;
  let regExp = /(?=.*[A-Z])(?=.*[0-9])(?=.*[!?:;\-."+\-*\/,=])/g;
  return str.match(regExp) ? true : false;
}

StringChallenge("pasWord0=")
