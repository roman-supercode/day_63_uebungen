// Erstelle dir in deiner Functions Datei:
// eine function, die mit Hilfe von filter ein Array mit Objekten anhand von population filtert. Sie soll die Städte zurückgeben, die mehr als 100000 Einwohner haben. 
// eine weitere function, die die Städte zurückgibt, die weniger als 100000 Einwohner haben
// exportiere beide function
// In deiner Daten Datei:
// Erstelle eine Variable, nutze den Code aus dem Kommentarbereich.
// Exportiere diese Variable
// Importiere alles in deiner Hauptdatei und verwende die function um die Data zu filtern

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter?retiredLocale=de
export const overPopulation = (data) => data.filter(ele => ele.population > 100000);
export const underPopulation = (data) => data.filter(ele => ele.population < 100000);

