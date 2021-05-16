var units = 0;





var clickUpgrades = {
    drill: {
        name: "Drill",
        price: 10,
        quantity: 0,
        multiplier: 2,
        imgURL: "https://via.placeholder.com/100"
    },
    chopSaw: {
        name: "Chop Saw",
        price: 20,
        quantity: 0,
        multiplier: 4,
        imgURL: "https://via.placeholder.com/101"
    },
    tableSaw: {
        name: "Table Saw",
        price: 40,
        quantity: 0,
        multiplier: 10,
        imgURL: "https://via.placeholder.com/102"
    }
}
var automaticUpgrades = {
    employee: {
        price: 100,
        quantity: 0,
        multiplier: 2
    },
    cnc: {
        price: 200,
        quantity: 0,
        multiplier: 4
    },
    workShop: {
        price: 400,
        quantity: 0,
        multiplier: 10
    },

}
function build() {
    units += 1
    updateTotal()
}
function updateTotal() {
    document.getElementById("build-total").innerText = units
}
function drawClickUpgrades() {
    let template = ''
    for (let key in clickUpgrades) {
        let tool = clickUpgrades[key]
        template += `
        <div class="col-2 d-flex flex-column">
        <img class="img-fluid" 
            src="${tool.imgUrl}">
        <button id="buy-drill" onclick="buyDrill()">buy ${tool.name}</button>
        <span>Price: $<span id="dri"></span>${tool.price}</span>
        <span>Productivity: X<span>${tool.multiplier}</span></span>
        <span>Total: <span id="drill-total"></span>${tool.quantity}</span>
        </div>`
    }
    document.getElementById('click-upgrades').innerHTML = template
}
//     for (let key in toppings){
//         let topping = toppings[key]
//         template += `
//           <div class="col-4 text-center">
//             <img class="img-fluid"
//               src="${topping.imgUrl}"
//               alt="">
//             <button class="btn btn-primary btn-block" onclick="addItem('${topping.name}')"> ${topping.name}</button>
//             <p>$${topping.price.toFixed(2)}</p>
//           </div>`
// 
function buyDrill() {
    if (units >= clickUpgrades.drill.price) {
        clickUpgrades.drill.quantity += 1
        units -= clickUpgrades.drill.price
        clickUpgrades.drill.price *= 3
        drawClickUpgrades()
        updateTotal()
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
function autoMultiplyer(value) {
    for (let i = 0; i < value; i++) {
        build()

    }
}
function startInterval() {
    let interval = setInterval(collectAutoUpgrades, 3000)
}

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
startInterval()
drawClickUpgrades()












            // function updatePrice(id) {
            //     document.getElementById(id).innerText = clickUpgrades.drill.price
            // }
            // function updateQuantity() {
            //     document.getElementById("drill-total").innerText = clickUpgrades.drill.quantity
            // }