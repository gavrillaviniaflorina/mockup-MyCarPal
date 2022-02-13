import ControllerMasini from "./js/controller/ControllerMasini.js";
import Home from "./js/view/Home.js";
// import AllCars from "./js/view/AllCars.js";
// import Login from "./js/view/Login.js"
// import Car from "./js/view/Car.js";



let home = new Home();

// // let car = new Car();

// // let controller = new ControllerMasini();

// // console.log(controller.findId("AICI", "C3"));

// // let list = controller.allBrands();

// // for (let i = 0; i < list.length; i++) {
// //     console.log(list[i]);

// // }

// // let allCars = new AllCars();

// // let masini = new ControllerMasini();
// // let list = masini.filterMasini("dacia", "motorina");

// // for (let i = 0; i < list.length; i++) {
// //     // console.log(list[i]);
// // }

let controller = new ControllerMasini();

// for (let i = 0; i < controller.list.length; i++) {

//     if (i % 2 == 0) {
//         controller.update({ id: controller.list[i].id, tip: "benzina" });
//     } else if (i % 3 == 0) {
//         controller.update({ id: controller.list[i].id, tip: "motorina" });
//     } else {
//         controller.update({ id: controller.list[i].id, tip: "hibrid" });
//     }
// }