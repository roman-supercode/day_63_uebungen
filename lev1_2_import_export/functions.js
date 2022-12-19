// gib nur das ERSTE Element des Arrays zurück
export const firstEle = (arr) => arr.slice(0, 1);

// gib alle AUSSER dem letzten Element des Arrays zurück
export const withoutLastEle = (arr) => arr.slice(0, -1);

// gib nur das LETZTE Element des Arrays zurück
export const lastEle = (arr) => arr.slice(-1);

// gib ALLE AUSSER DEM ERSTEN Element des Arrays zurück
export const withoutFirstEle = (arr) => arr.slice(1);

// schreibe eine function, die ein bestimmtes Element komplett aus deinem Array entfernt
// => Input: ([“remove”, “stay”, “stay5”, 22, true, “remove”], “remove”)
// => Output: [“stay”, “stay5”, 22, true]
export const filteredArray = (arr, remove) => arr.filter(e => e !== remove);

// gib ein Array zurück, dass nur aus einzigartigen Werten besteht. Entferne die doppelten Elemente!
// => Input: [1,6,9,2,1,6,7,10]
// => Output: [1,6,9,2,7,10]

// oder statt ...new Set(arr) ->> Array.from(new Set(arr));
export const uniqSum = (arr) => [...new Set(arr)].reduce((accumulator, value) => {
    return accumulator + value;
}, 0);

// gib die Summe des Arrays zurück
export const sumArray = (arr) => {
    return arr.reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);
};

// die function bekommt zwei Parameter übergeben. Gib eine zufällige Zahl zurück, die zwischen diesen beiden liegt
// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
export const randomIntBetweenTwoNumbers = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// Erstelle eine function, der ein String übergeben wird. Sie soll den ersten Buchstaben in einen Großbuchstaben umwandelt
export const capitalize = ([firstLetter, ...rest]) => firstLetter.toUpperCase() + rest.join('').toLowerCase();
// ! Erster Buchstabe in Großschrift, restliche Wörtzer in Kleinschrift

// Alternative für Sätze👇
export const toTitleCase = (phrase) => {
    return phrase
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

//Erstelle eine function, der ein String übergeben wird. Sie soll den gesamten String in Großbuchstaben umwandeln
export const allUpperCase = (phrase) => {
    return phrase.toUpperCase();
};

// Erstelle eine function, mit zwei Parametern.Sie soll überprüfen ob der letzte Buchstabe von Parameter 1 mit dem Parameter 2 überein stimmt
export const compareLastChar = (firstParam, secondParam) => {
    return firstParam.slice(-1) === secondParam.slice(-1) ? "true" : "false";
}


