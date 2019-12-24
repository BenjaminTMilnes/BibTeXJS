import assert from "assert";
import * as bibtex from "../source/bibtex.js";

var importer = new bibtex.BibTeXImporter();

var example1 = `
  @book{HarryPotter1,
      author = "J. K. Rowling",
      title = "Harry Potter and the Philosopher's Stone"
  }
  @book{HarryPotter2,
      author = "J. K. Rowling",
      title = "Harry Potter and the Chamber of Secrets"
  }
  
  @book{TheLordOfTheRings,
        author={J. R. R. Tolkien},
        title={The Lord of the Rings}
    }
  `;

describe("BibTeXImporter", function () {

    describe("importDatabase", function () {

        it("should correctly import example 1.", function () {
            var database1 = importer.importDatabase(example1);

            assert.equal(database1.entries.length, 3);

            var entry1 = database1.getEntryByCitationKey("HarryPotter1");

            assert.equal(entry1.author.value, "J. K. Rowling");
            assert.equal(entry1.title.value, "Harry Potter and the Philosopher's Stone");

            var entry2 = database1.getEntryByCitationKey("HarryPotter2");

            assert.equal(entry2.author.value, "J. K. Rowling");
            assert.equal(entry2.title.value, "Harry Potter and the Chamber of Secrets");

            var entry3 = database1.getEntryByCitationKey("TheLordOfTheRings");

            assert.equal(entry3.author.value, "J. R. R. Tolkien");
            assert.equal(entry3.title.value, "The Lord of the Rings");
        });

    });

});