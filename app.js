import ControllerInchirieri from "./js/controller/ControllerInchirieri.js";

import ControllerMasini from "./js/controller/ControllerMasini.js";
import Inchiriere from "./js/model/Inchiriere.js";
import Masina from "./js/model/Masina.js";


window.localStorage.setItem("people", []);


let controllerMasini = new ControllerMasini();

// let masina1 = new Masina(1, "renault", "simbol", 2012, "benzina");
// let masina2 = new Masina(2, "citroen", "C3", 2020, "benzina");
// let masina3 = new Masina(3, "dacia", "duster", 2014, "motorina");
// let masina4 = new Masina(4, "Opel", "Astra", 2008, "motorina");
// let masina5 = new Masina(5, "dacia", "spring", 2021, "electrica");


let controllerInchirieri = new ControllerInchirieri();

let inchiriere = new Inchiriere(4, 2, 1, "21.01.2022-22.03.2023");
controllerInchirieri.update({ id: 4, idMasina: 100 });