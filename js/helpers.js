let mobileCanvas = document.getElementsByClassName("mobile-chart");

let mobileData = {

    datasets: [{
        data: [1, 20, 56, ],
        backgroundColor: ["#7476be", "blue", "green"],

    }],
    labels: [
        "Desktop",
        "Tablet",
        "Phone",

    ],


}

let mobileOptions = {


    plugins: {

        legend: {
            position: "right",
            labels: {
                boxWidth: 20,
                fontStyle: "bold"
            },
        }
    }
}
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});