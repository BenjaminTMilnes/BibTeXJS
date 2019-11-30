import assert from "assert";
import * as bibtex from "../source/bibtex.js";

var exporter = new bibtex.BibTeXExporter();

describe("BibTeXExporter", function () {

    describe("convertBibTeXFieldToText", function () {

        [
            [new bibtex.BibTeXField("author", "B. T. Milnes"), "author = \"B. T. Milnes\""],
            [new bibtex.BibTeXField("year", "2019"), "year = \"2019\""],
            [new bibtex.BibTeXField("month", bibtex.BibTeXMonth.January), "month = \"January\""],
        ].forEach(a => {
            it(`should export to '${a[1]}'`, function () {

                exporter.beginEndFieldValueCharacterType = bibtex.BibTeXBeginEndFieldValueCharacterType.QuotationMarks;
                exporter.monthStyle = bibtex.BibTeXMonthStyle.Long;
                exporter.formatStyle = bibtex.BibTeXFormatStyle.Readable;

                var t = exporter.convertBibTeXFieldToText(a[0]);

                assert.equal(t, a[1]);
            });
        });

        [
            [new bibtex.BibTeXField("author", "B. T. Milnes"), "author={B. T. Milnes}"],
            [new bibtex.BibTeXField("year", "2019"), "year={2019}"],
            [new bibtex.BibTeXField("month", bibtex.BibTeXMonth.January), "month={Jan}"],
        ].forEach(a => {
            it(`should export to '${a[1]}'`, function () {

                exporter.beginEndFieldValueCharacterType = bibtex.BibTeXBeginEndFieldValueCharacterType.RecurveBrackets;
                exporter.beginFieldValueCharacter = "{";
                exporter.endFieldValueCharacter = "}";
                exporter.monthStyle = bibtex.BibTeXMonthStyle.Short;
                exporter.formatStyle = bibtex.BibTeXFormatStyle.Minimal;

                var t = exporter.convertBibTeXFieldToText(a[0]);

                assert.equal(t, a[1]);
            });
        });

    });

});