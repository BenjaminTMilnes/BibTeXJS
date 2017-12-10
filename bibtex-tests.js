describe("BibTeXExporter", function () {

    var exporter = new BibTeXExporter();

    it("", function () {
        var field = new BibTeXField("author", "B. T. Milnes");

        expect(exporter.convertBibTeXFieldToText(field)).toBe("author = \"B. T. Milnes\"");
    });

});