import assert from "assert";
import * as bibtex from "../source/bibtex.js";

var importer = new bibtex.BibTeXImporter();

var example1 = `
  @book{HarryPotter1,
      author = "J. K. Rowling",
      title = "Harry Potter and the Philosopher's Stone"
  }
  `;

var database = importer.importDatabase(example1);

describe("BibTeXImporter", function () {

    it("", function () {
        assert.equal(database.getEntryByCitationKey("HarryPotter1").author.value, "J. K. Rowling");
    });

});