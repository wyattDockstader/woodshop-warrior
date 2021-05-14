var units = 100;


updateTotal()

var clickUpgrades = {
    drill: {
        price: 10,
        quantity: 0,
        multiplier: 2,
    },
    chopSaw: {
        price: 20,
        quantity: 0,
        multiplier: 4
    },
    tableSaw: {
        price: 40,
        quantity: 0,
        multiplier: 8
    }
};
var automaticUpgrades = {
    employee: {
        price: 100,
        quantity: 0,
        multiplier: 20
    },
    cnc: {
        price: 200,
        quantity: 0,
        multiplier: 40
    },
    workShop: {
        price: 400,
        quantity: 0,
        multiplier: 80
    },
}
function build() {
    units += 1
    updateTotal()
}
function updateTotal() {
    document.getElementById("build-total").innerText = units
}
function buyDrill() {
    if (units >= 10) {
        clickUpgrades.drill.quantity += 1
        units -= 10
        updateTotal()
        document.getElementById("drill-total").innerText = clickUpgrades.drill.quantity
        console.log("purchased drill")
    }
}
function buyChopSaw() {
    if (units >= 20) {
        clickUpgrades.chopSaw.quantity += 1
        units -= 20
        updateTotal()
        console.log("purchased chop saw")
    }
}
function buyTableSaw() {
    if (units >= 40) {
        clickUpgrades.tableSaw.quantity += 1
        units -= 40
        updateTotal()
        console.log("purchased table saw")
    }
}
function buyEmployee() {
    if (units >= 100) {
        automaticUpgrades.employee.quantity += 1
        units -= 100
        updateTotal()
        document.getElementById("employee-total").innerText = automaticUpgrades.employee.quantity
        console.log("hired employee")
    }
}
function buyCnc() {
    if (units >= 200) {
        automaticUpgrades.cnc.quantity += 1
        units -= 200
        updateTotal()
        document.getElementById("cnc-total").innerText = automaticUpgrades.cnc.quantity
        console.log("purchased cnc")
    }
}
function buyWorkShop() {
    if (units >= 400) {
        automaticUpgrades.workShop.quantity += 1
        units -= 400
        updateTotal()
        document.getElementById("work-shop-total").innerText = automaticUpgrades.workShop.quantity
        console.log("purchased work shop")
    }
}
function collectAutoUpgrades() {
    let collectAutoElem = (automaticUpgrades.employee.quantity * automaticUpgrades.employee.multiplier) + (automaticUpgrades.cnc.quantity * automaticUpgrades.cnc.multiplier) + (automaticUpgrades.workShop.quantity * automaticUpgrades.workShop.multiplier)
    autoMultiplyer(collectAutoElem)
}
function autoMultiplyer(value)
for (let i = 0; i < value; i++) {
    build()

}
// function startInterval() {
//     let interval = setInterval(collectAutoUpgrades, 3000)
// }


function clickTracker() {
    let clickTrackerElem = (clickUpgrades.drill.quantity * clickUpgrades.drill.multiplier) + (clickUpgrades.chopSaw.quantity * clickUpgrades.chopSaw.multiplier) + (clickUpgrades.tableSaw.quantity * clickUpgrades.tableSaw.multiplier)
    if (clickTrackerElem == 0) {
        clickTrackerElem += 1
    }
    clickMultiplier(clickTrackerElem)
}
function clickMultiplier(value) {
    for (let i = 0; i < value; i++) {
        build()

    }

}