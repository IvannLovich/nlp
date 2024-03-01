import validUrl from "valid-url";

function checkForName(inputText) {
  return validUrl.isWebUri(inputText);
}

export { checkForName };
