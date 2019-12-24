# BibTeXJS

BibTeXJS is a JavaScript library for reading, writing, and editing BibTeX bibliographic data. It's essentially a JavaScript version of a library I wrote in C# (https://github.com/BenjaminTMilnes/BibTeX).

## How to use

```js

var importer = new BibTeXImporter();

var database = importer.importDatabase(string);

var entry = database.getEntryByCitationKey("HarryPotter1");

```