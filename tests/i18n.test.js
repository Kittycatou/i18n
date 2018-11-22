let expect = require("chai").expect;
let i18n = require("../dist/index.js");

let languages = [
  {
    name: "English",
    strings: i18n.en
  },
  {
    name: "German",
    strings: i18n.de
  },
  {
    name: "Spanish",
    strings: i18n.es
  },
  {
    name: "French",
    strings: i18n.fr
  },
  {
    name: "Dutch",
    strings: i18n.nl
  }
];

function checkTranslations(from, to) {
  let originals = Object.keys(from.strings);
  let translated = to.strings;
  for (let string of originals) {
    if (typeof translated[string] === "undefined") {
      console.log(
        "String",
        string,
        "in",
        from.name,
        "is not available in",
        to.name
      );
      expect(typeof translated[string]).to.equal("string");
    }
  }
}

for (let language of languages) {
  if (language.name !== "English") {
    it(`All English strings should be translated to ${language.name}`, () => {
      checkTranslations(languages[0], language);
    });
  }
}

for (let language of languages) {
  if (language.name !== "English") {
    it(`All ${language.name} strings should be available in English`, () => {
      checkTranslations(language, languages[0]);
    });
  }
}
