/*

bibtex.js
A JavaScript library for reading, writing, and editing BibTeX bibliographic data
Created by B. T. Milnes

Version: 0.1
Project Page: https://github.com/BenjaminTMilnes/BibTeXJS

*/

// The base class from which all other BibTeX entries inherit
class BibTeXEntry {
    constructor(name) {

        // The entry name, which is one of a set list of values: book, article, ...
        this.name = name;

        // The key used in citations to reference a particular entry, e.g. @book{<citationKey> ...
        this.citationKey = "";

        this.note = new BibTeXField("note", "");
        this.key = new BibTeXField("key", "");
    }
}

// Represents a BibTeX field, and contains the value of the field as well as other special properties
class BibTeXField {
    constructor(name, value, isOptional, requiredFieldGroup) {
        this.name = name;
        this.value = value;

        // Whether or not this field is optional; if set to true then the field is optional unless the requiredFieldGroup property is set
        this.isOptional = (typeof isOptional !== "undefined") ? isOptional : false;

        // Sometimes one field out of a group of fields is required; this property represents the group name
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

// Represents the @book BibTeX entry type
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

// Represents a BibTeX database, which comprises of a list of entries
class BibTeXDatabase {
    constructor() {
        this.entries = [];
    }

    // Gets the first entry in the database that has the given citation key
    getEntryByCitationKey(citationKey) {
        return this.entries.filter(entry => entry.citationKey == citationKey)[0];
    }

    // Gets all of the entries in the database that are of the given type, i.e. "book"
    getEntriesByType(type) {
        return this.entries.filter(entry => entry.name == type);
    }
}

// Handles the conversion of BibTeX data from object representation to text
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