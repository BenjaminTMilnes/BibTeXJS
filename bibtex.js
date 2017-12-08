
class BibTeXEntry {
    constructor(name) {
        this.name = name;
        this.citationKey = "";
        this.note = new BibTeXField("note", "");
        this.key = new BibTeXField("key", "");
    }
}

class BibTeXField {
    constructor(name, value, isOptional, requiredFieldGroup) {
        this.name = name;
        this.value = value;
        this.isOptional = (typeof isOptional !== "undefined") ? isOptional : false;
        this.requiredFieldGroup = (typeof requiredFieldGroup !== "undefined") ? requiredFieldGroup : "";
    }
}

var BibTeXMonth = {
    None: 0,
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12
};

class BibTeXBook extends BibTeXEntry {
    constructor(author, title, publisher, year) {
        super("book");

        this.author = new BibTeXField("author", author, true, "author/editor");
        this.editor = new BibTeXField("editor", "", true, "author/editor");
        this.title = new BibTeXField("title", title);
        this.publisher = new BibTeXField("publisher", publisher);
        this.year = new BibTeXField("year", year);
        this.volume = new BibTeXField("volume", "", true);
        this.number = new BibTeXField("number", "", true);
        this.series = new BibTeXField("series", "", true);
        this.address = new BibTeXField("address", "", true);
        this.edition = new BibTeXField("edition", "", true);
        this.month = new BibTeXField("month", BibTeXMonth.None, true);
    }
}

class BibTeXDatabase {
    constructor() {
        this.entries = [];
    }

    getEntryByCitationKey(citationKey) {
        return this.entries.filter(entry => entry.citationKey == citationKey)[0];
    }

    getEntriesByType(type) {
        return this.entries.filter(entry => entry.name == type);
    }
}

class BibTeXExporter {

    getBibTeXEntryFields(entry) {
        var fields = [];

        for (var propertyName in entry) {
            var property = entry[propertyName];

            if (property instanceof BibTeXField) {
                fields.push(property);
            }
        }

        return fields;
    }

    convertBibTeXFieldToText(field) {
        return field.name + " = \"" + field.value + "\"";
    }

    convertBibTeXFieldsToText(fields) {
        var text = "";

        for (var i = 0; i < fields.length; i++) {
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
        text += "}\n\n";

        return text;
    }

    convertBibTeXDatabaseToText(database) {
        var text = "";

        for (var i = 0; i < database.entries.length; i++) {
            var entry = database.entries[i];

            text += this.convertBibTeXEntryToText(entry);
        }

        return text;
    }
}