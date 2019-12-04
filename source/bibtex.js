
// The base class from which all other BibTeX entries inherit
export class BibTeXEntry {
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
export class BibTeXField {
    constructor(name, value, isOptional, requiredFieldGroup) {
        this.name = name;
        this.value = value;

        // Whether or not this field is optional; if set to true then the field is optional unless the requiredFieldGroup property is set
        this.isOptional = (typeof isOptional !== "undefined") ? isOptional : false;

        // Sometimes one field out of a group of fields is required; this property represents the group name
        this.requiredFieldGroup = (typeof requiredFieldGroup !== "undefined") ? requiredFieldGroup : "";
    }
}

export const BibTeXMonth = {
    None: { value: 0, long: "", short: "" },
    January: { value: 1, long: "January", short: "Jan" },
    February: { value: 2, long: "February", short: "Feb" },
    March: { value: 3, long: "March", short: "Mar" },
    April: { value: 4, long: "April", short: "Apr" },
    May: { value: 5, long: "May", short: "May" },
    June: { value: 6, long: "June", short: "Jun" },
    July: { value: 7, long: "July", short: "Jul" },
    August: { value: 8, long: "August", short: "Aug" },
    September: { value: 9, long: "September", short: "Sep" },
    October: { value: 10, long: "October", short: "Oct" },
    November: { value: 11, long: "November", short: "Nov" },
    December: { value: 12, long: "December", short: "Dec" }
};

export const BibTeXMonthStyle = {
    // e.g. January, February, March
    Long: 0,

    // e.g. Jan, Feb, Mar
    Short: 1,

    // e.g. 1, 2, 3
    Numeric: 2
};

// Represents the @book BibTeX entry type
export class BibTeXBook extends BibTeXEntry {
    constructor(title, author, publisher, year) {
        super("book");

        this.title = new BibTeXField("title", title);
        this.edition = new BibTeXField("edition", "", true);

        this.author = new BibTeXField("author", author, true, "author/editor");
        this.editor = new BibTeXField("editor", "", true, "author/editor");

        this.publisher = new BibTeXField("publisher", publisher);
        this.address = new BibTeXField("address", "", true);

        this.year = new BibTeXField("year", year);
        this.month = new BibTeXField("month", BibTeXMonth.None, true);

        this.volume = new BibTeXField("volume", "", true);
        this.number = new BibTeXField("number", "", true);

        this.series = new BibTeXField("series", "", true);
    }
}

// Represents the @inbook BibTeX entry type
export class BibTeXInBook extends BibTeXEntry {
    constructor(title, author, publisher, year, chapter) {
        super("inbook");

        this.title = new BibTeXField("title", title);
        this.edition = new BibTeXField("edition", "", true);

        this.author = new BibTeXField("author", author, true, "author/editor");
        this.editor = new BibTeXField("editor", "", true, "author/editor");

        this.publisher = new BibTeXField("publisher", publisher);
        this.address = new BibTeXField("address", "", true);

        this.year = new BibTeXField("year", year);
        this.month = new BibTeXField("month", BibTeXMonth.None, true);

        this.volume = new BibTeXField("volume", "", true);
        this.number = new BibTeXField("number", "", true);

        this.series = new BibTeXField("series", "", true);

        this.chapter = new BibTeXField("chapter", chapter, true, "chapter/pages");
        this.pages = new BibTeXField("pages", "", true, "chapter/pages");

        this.type = new BibTeXField("type", "", true);
    }
}

// Represents the @booklet BibTeX entry type
export class BibTeXBooklet extends BibTeXEntry {
    constructor(title) {
        super("booklet");

        this.title = new BibTeXField("title", title);

        this.author = new BibTeXField("author", "", true);

        this.howPublished = new BibTeXField("howpublished", "", true);
        this.address = new BibTeXField("address", "", true);

        this.year = new BibTeXField("year", "", true);
        this.month = new BibTeXField("month", BibTeXMonth.None, true);
    }
}

// Represents the @article BibTeX entry type
export class BibTeXArticle extends BibTeXEntry {
    constructor(title, author, journal, year, volume) {
        super("article");

        this.title = new BibTeXField("title", title);

        this.author = new BibTeXField("author", author);

        this.journal = new BibTeXField("journal", journal);

        this.year = new BibTeXField("year", year);
        this.month = new BibTeXField("month", BibTeXMonth.None, true);

        this.volume = new BibTeXField("volume", volume);
        this.number = new BibTeXField("number", "", true);

        this.pages = new BibTeXField("pages", "", true);
    }
}

// Represents the @incollection BibTeX entry type
export class BibTeXInCollection extends BibTeXEntry {
    constructor(title, bookTitle, author, publisher, year) {
        super("incollection");

        this.title = new BibTeXField("title", title);
        this.bookTitle = new BibTeXField("bookTitle", bookTitle);
        this.edition = new BibTeXField("edition", "", true);

        this.author = new BibTeXField("author", author, true, "author/editor");
        this.editor = new BibTeXField("editor", "", true, "author/editor");

        this.publisher = new BibTeXField("publisher", publisher);
        this.address = new BibTeXField("address", "", true);

        this.year = new BibTeXField("year", year);
        this.month = new BibTeXField("month", BibTeXMonth.None, true);

        this.volume = new BibTeXField("volume", "", true);
        this.number = new BibTeXField("number", "", true);

        this.series = new BibTeXField("series", "", true);

        this.chapter = new BibTeXField("chapter", "", true, "chapter/pages");
        this.pages = new BibTeXField("pages", "", true, "chapter/pages");

        this.type = new BibTeXField("type", "", true);
    }
}

// Represents the @inproceedings BibTeX entry type
export class BibTeXInProceedings extends BibTeXEntry {
    constructor(title, bookTitle, author, year) {
        super("inproceedings");

        this.title = new BibTeXField("title", title);
        this.bookTitle = new BibTeXField("bookTitle", bookTitle);

        this.author = new BibTeXField("author", author, true, "author/editor");
        this.editor = new BibTeXField("editor", "", true, "author/editor");

        this.publisher = new BibTeXField("publisher", "", true);
        this.organization = new BibTeXField("organization", "", true);
        this.address = new BibTeXField("address", "", true);

        this.year = new BibTeXField("year", year);
        this.month = new BibTeXField("month", BibTeXMonth.None, true);

        this.volume = new BibTeXField("volume", "", true);
        this.number = new BibTeXField("number", "", true);

        this.series = new BibTeXField("series", "", true);

        this.pages = new BibTeXField("pages", "", true);
    }
}

// Represents the @manual BibTeX entry type
export class BibTeXManual extends BibTeXEntry {
    constructor(title) {
        super("manual");

        this.title = new BibTeXField("title", title);
        this.edition = new BibTeXField("edition", "", true);

        this.author = new BibTeXField("author", "", true);

        this.organization = new BibTeXField("organization", "", true);
        this.address = new BibTeXField("address", "", true);

        this.year = new BibTeXField("year", "", true);
        this.month = new BibTeXField("month", BibTeXMonth.None, true);
    }
}

// Represents the @mastersthesis BibTeX entry type
export class BibTeXMastersThesis extends BibTeXEntry {
    constructor(title, author, school, year) {
        super("mastersthesis");

        this.title = new BibTeXField("title", title);

        this.author = new BibTeXField("author", author);

        this.school = new BibTeXField("school", school);
        this.address = new BibTeXField("address", "", true);

        this.year = new BibTeXField("year", year);
        this.month = new BibTeXField("month", BibTeXMonth.None, true);

        this.type = new BibTeXField("type", "", true);
    }
}

// Represents the @miscellaneous BibTeX entry type
export class BibTeXMiscellaneous extends BibTeXEntry {
    constructor() {
        super("misc");

        this.title = new BibTeXField("title", "", true);

        this.author = new BibTeXField("author", "", true);

        this.howPublished = new BibTeXField("howpublished", "", true);

        this.year = new BibTeXField("year", "", true);
        this.month = new BibTeXField("month", BibTeXMonth.None, true);
    }
}

// Represents the @phdthesis BibTeX entry type
export class BibTeXPhDThesis extends BibTeXEntry {
    constructor(title, author, school, year) {
        super("phdthesis");

        this.title = new BibTeXField("title", title);

        this.author = new BibTeXField("author", author);

        this.school = new BibTeXField("school", school);
        this.address = new BibTeXField("address", "", true);

        this.year = new BibTeXField("year", year);
        this.month = new BibTeXField("month", BibTeXMonth.None, true);

        this.type = new BibTeXField("type", "", true);
    }
}

// Represents the @proceedings BibTeX entry type
export class BibTeXProceedings extends BibTeXEntry {
    constructor(title, year) {
        super("proceedings");

        this.title = new BibTeXField("title", title);

        this.editor = new BibTeXField("editor", "", true);

        this.publisher = new BibTeXField("publisher", "", true);
        this.organization = new BibTeXField("organization", "", true);
        this.address = new BibTeXField("address", "", true);

        this.year = new BibTeXField("year", year);
        this.month = new BibTeXField("month", BibTeXMonth.None, true);

        this.volume = new BibTeXField("volume", "", true);
        this.number = new BibTeXField("number", "", true);

        this.series = new BibTeXField("series", "", true);
    }
}

// Technically not a BibTeX entry type, but I need it; represents a single webpage
export class BibTeXWebpage extends BibTeXEntry {
    constructor(author, title, url, dateAccessed) {
        super("webpage");

        this.author = new BibTeXField("author", author, true);
        this.title = new BibTeXField("title", title);
        this.websiteTitle = new BibTeXField("website_title", "", true);
        this.url = new BibTeXField("url", url);
        this.dateAccessed = new BibTeXField("date_accessed", dateAccessed);
    }
}

// Represents a BibTeX database, which comprises of a list of entries
export class BibTeXDatabase {
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

export const BibTeXBeginEndFieldValueCharacterType = {
    QuotationMarks: 0,
    RecurveBrackets: 1
}

// An enumeration for determining how outputted BibTeX is formatted
export const BibTeXFormatStyle = {
    // Don't add extra white-space; use as few characters as possible
    Minimal: 0,

    // Add line breaks and extra spaces to make the BibTeX easily readable
    Readable: 1
};

// Handles the conversion of BibTeX data from object representation to text
export class BibTeXExporter {

    constructor(beginEndFieldValueCharacterType = BibTeXBeginEndFieldValueCharacterType.QuotationMarks, monthStyle = BibTeXMonthStyle.Long, formatStyle = BibTeXFormatStyle.Readable, includeNullFields = false) {
        this.beginEndFieldValueCharacterType = beginEndFieldValueCharacterType;

        if (this.beginEndFieldValueCharacterType == BibTeXBeginEndFieldValueCharacterType.QuotationMarks) {
            this.beginFieldValueCharacter = "\"";
            this.endFieldValueCharacter = "\"";
        }
        else if (this.beginEndFieldValueCharacterType == BibTeXBeginEndFieldValueCharacterType.RecurveBrackets) {
            this.beginFieldValueCharacter = "{";
            this.endFieldValueCharacter = "}";
        }

        this.monthStyle = monthStyle;
        this.formatStyle = formatStyle;
        this.includeNullFields = includeNullFields;
    }

    static getBibTeXEntryFields(entry) {
        var fields = [];

        for (var propertyName in entry) {
            var property = entry[propertyName];

            if (property instanceof BibTeXField) {
                fields.push(property);
            }
        }

        return fields;
    }

    static listContainsObject(l, o) {
        for (var i = 0; i < l.length; i++) {
            if (l[i] === o) {
                return true;
            }
        }

        return false;
    }

    isFieldValueMonth(fieldValue) {
        var months = [BibTeXMonth.None, BibTeXMonth.January, BibTeXMonth.February, BibTeXMonth.March, BibTeXMonth.April, BibTeXMonth.May, BibTeXMonth.June, BibTeXMonth.July, BibTeXMonth.August, BibTeXMonth.September, BibTeXMonth.October, BibTeXMonth.November, BibTeXMonth.December];

        return BibTeXExporter.listContainsObject(months, fieldValue);
    }

    convertBibTeXFieldValueToText(fieldValue) {
        if (typeof fieldValue === "undefined" || fieldValue == "") {
            return "";
        }

        if (this.isFieldValueMonth(fieldValue)) {
            if (this.monthStyle == BibTeXMonthStyle.Short) {
                return fieldValue.short;
            }
            if (this.monthStyle == BibTeXMonthStyle.Numeric) {
                if (fieldValue.value > 0) {
                    return fieldValue.value;
                }
                return "";
            }
            return fieldValue.long;
        }

        return fieldValue;
    }

    convertBibTeXFieldToText(field) {
        var text = "";

        text += field.name;

        if (this.formatStyle == BibTeXFormatStyle.Minimal) {
            text += "=";
        }
        else {
            text += " = ";
        }

        text += this.beginFieldValueCharacter;
        text += this.convertBibTeXFieldValueToText(field.value);
        text += this.endFieldValueCharacter;

        return text;
    }

    convertBibTeXFieldsToText(fields) {
        var text = "";

        for (var i = 0; i < fields.length; i++) {
            var field = fields[i];

            if (this.convertBibTeXFieldValueToText(field.value) != "") {
                text += ",";

                if (this.formatStyle == BibTeXFormatStyle.Readable) {
                    text += "\n\t";
                }

                text += this.convertBibTeXFieldToText(field);
            }
        }

        return text;
    }

    convertBibTeXEntryToText(entry) {
        var fields = BibTeXExporter.getBibTeXEntryFields(entry);
        var text = "";

        text += "@" + entry.name + "{" + entry.citationKey;
        text += this.convertBibTeXFieldsToText(fields);
        text += "\n} ";

        if (this.formatStyle == BibTeXFormatStyle.Readable) {
            text += "\n\n";
        }

        return text;
    }

    convertBibTeXEntriesToText(entries) {
        return entries.map(e => this.convertBibTeXEntryToText(e)).join("");
    }
    convertBibTeXDatabaseToText(database) {
        return this.convertBibTeXEntriesToText(database.entries);
    }
}