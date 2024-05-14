//#1 ändra den här funktionen till en ternary and och tilldela den en variabel som heter experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

var experiencePoints = winBattle() ? 10 : 1;

//Med hjälp av fuktionen nedan, svara på frågorna:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
Kommer säga "undefined"

//#3 return value when moveCommand("back");
Kommer säga "you arrived home"

//#4 return value when moveCommand("right");
Kommer säga "you found a river"

//#5 return value when moveCommand("left");
Kommer säga "undefined"

//BONUS: Övning ger färdighet. Skriv ditt egna Switch påstående:
function favoritFarg(farg) {
    var personensFavoritFarg;
    switch (farg) {
    case "Ella":
        break;
        personensFavoritFarg = "Rosa";
    case "Sebastian":
        break;
        personensFavoritFarg = "Ingen";
    case "Fredrik":
        break;
        personensFavoritFarg = "Grön";
    case "Margareta":
        break;
        personensFavoritFarg = "Orange";
    
default:
    personensFavoritFarg = "Fråga Ella, Sebastian, Fredrik eller Margareta deras favoritfärg?";
}
return personensFavoritFarg;
}
