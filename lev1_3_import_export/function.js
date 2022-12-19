// Erstelle eine function, der 3 Parameter übergeben werden sollen. Zwei Zahlen und ein Zeichen (+, -, /, *)
// je nachdem, was für ein Zeichen übergeben wird, soll die function addieren, subtrahieren, dividieren oder multiplizieren
// importiere diese function in deiner index.js und teste sie.
// Bonus: Überprüfe, ob die Eingabe richtig war, falls nicht gib einen Fehler zurück

export const calc = (a, b, operator) => {

    if (Number(a) && Number(b)) {
        switch (operator) {
            case "+": return a + b;
            case "-": return a - b;
            case "*": return a * b;
            case "/": return a / b;
            default: return console.error(`unsupported operator: ${operator}`);
        }
    } else {
        console.error("Bitte eine Zahl eingeben");
    }
};
