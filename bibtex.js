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
    None: {value: 0, long: "", short:""},
    January:  {value: 1, long: "January", short:"Jan"},
    February:  {value: 2, long: "February", short:"Feb"},
    March:  {value: 3, long: "March", short:"Mar"},
    April:  {value: 4, long: "April", short:"Apr"},
    May:  {value: 5, long: "May", short:"May"},
    June:  {value: 6, long: "June", short:"Jun"},
    July:  {value: 7, long: "July", short:"Jul"},
    August:  {value: 8, long: "August", short:"Aug"},
    September:  {value: 9, long: "September", short:"Sep"},
    October:  {value: 10, long: "October", short:"Oct"},
    November:  {value: 11, long: "November", short:"Nov"},
    December:  {value: 12, long: "December", short:"Dec"}
};

var BibTeXMonthStyle = {
    // e.g. January, February, March
    Long : 0,

    // e.g. Jan, Feb, Mar
    Short : 1,

    // e.g. 1, 2, 3
    Numeric : 2
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

var BibTeXBeginEndFieldValueCharacterType = {
    QuotationMarks :0,
    RecurveBrackets: 1
}

// An enumeration for determining how outputted BibTeX is formatted
var BibTeXFormatStyle = {
    // Don't add extra white-space; use as few characters as possible
    Minimal: 0,

    // Add line breaks and extra spaces to make the BibTeX easily readable
    Readable: 1
};

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