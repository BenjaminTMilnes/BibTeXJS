import fs from "fs";
import assert from "assert";
import * as bibtex from "../source/bibtex.js";

var importer = new bibtex.BibTeXImporter();

fs.readFile("./example1.bib", (e, data) => {
    if (e) throw e;

    var database = importer.importDatabase(data);

    describe("BibTeXImporter", function () {

        it("", function () {
            assert.equal(database.getEntryByCitationKey("HarryPotter1").author = "J. K. Rowling");
        });

    });
});