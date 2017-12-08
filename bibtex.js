
class BibTeXEntry {
    constructor(name) {
        this.name = name;
        this.citationKey = "";
        this.note = new BibTeXField("note", "");
        this.key = new BibTeXField("key", "");
    }
}

class BibTeXField {
    constructor(name, value, isOptional = true, requiredFieldGroup = "") {
        this.name = name;
        this.value = value;
        this.isOptional = isOptional;
        this.requiredFieldGroup = requiredFieldGroup;
    }
}

class BibTeXBook extends BibTeXEntry {
    constructor() {
        super.constructor("book");

        this.author = new BibTeXField("author", "", true, "author/editor");
        this.editor = new BibTeXField("editor", "", true, "author/editor");
        this.title = new BibTeXField("title", "", false);
        this.publisher = new BibTeXField("publisher", "", false);
        this.year = new BibTeXField("year", "", false);
        this.volume = new BibTeXField("volume", "");
        this.number = new BibTeXField("number", "");
        this.series = new BibTeXField("series", "");
        this.address = new BibTeXField("address", "");
        this.edition = new BibTeXField("edition", "");
        this.month = new BibTeXField("month", "");
    }
}

class BibTeXExporter {

    getBibTeXEntryFields(entry) {
        var fields = [];

        for (var propertyName in entry){
            var property = entry[propertyName];

            if (property instanceof BibTeXField){
                fields.push(property);
            }
        }

        return fields;
    }

    convertBibTeXFieldToText(field) {
        return  field.name + " = \"" + field.value + "\"";
    }

    convertBibTeXFieldsToText(fields){
        var text = "";

        for (var i =0; i < fields.length; i++){
            var field = fields[i];

            text += ",\n\t" + this.convertBibTeXFieldToText(field);
        }

        return text;
    }

    convertBibTeXEntryToText(entry) {
        var fields = this.getBibTeXEntryFields(entry);
        var text = "";

        text += "@" + entry.name + "{" + entry.citationKey;
        text += this.convertBibTeXFieldsToText(fields);
        text += "}\n";

        return text;
    }

}