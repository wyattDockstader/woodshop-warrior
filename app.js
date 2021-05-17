var units = 0;





var clickUpgrades = {
    drill: {
        name: "Drill",
        id: "Drill",
        price: 10,
        quantity: 0,
        multiplier: 2,
        imgUrl: 'https://www.northerntool.com/images/product/2000x2000/256/25623_2000x2000.jpg'
    },
    chopSaw: {
        name: "Chop Saw",
        id: "ChopSaw",
        price: 20,
        quantity: 0,
        multiplier: 4,
        imgUrl: "https://www.northerntool.com/images/product/2000x2000/307/30722_2000x2000.jpg"
    },
    tableSaw: {
        name: "Table Saw",
        id: "TableSaw",
        price: 40,
        quantity: 0,
        multiplier: 10,
        imgUrl: "https://www.northerntool.com/images/product/2000x2000/846/84632_2000x2000.jpg"
    }
}
var automaticUpgrades = {
    employee: {
        name: "Employee",
        id: "Employee",
        price: 50,
        quantity: 0,
        multiplier: 2,
        imgUrl: "https://www.northerntool.com/images/product/2000x2000/177/177505_2000x2000.jpg"
    },
    cnc: {
        name: "CNC",
        id: "Cnc",
        price: 200,
        quantity: 0,
        multiplier: 4,
        imgUrl: "https://www.northerntool.com/images/product/2000x2000/846/84669_2000x2000.jpg"
    },
    workShop: {
        name: "Work Shop",
        id: "WorkShop",
        price: 400,
        quantity: 0,
        multiplier: 10,
        imgUrl: "http://static1.squarespace.com/static/58dec31debbd1ab87bd5fbc1/t/5c352dfc21c67c3150f439b1/1546989081559/bryant+exterior+2sm.jpg?format=1500w"
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
        <div class="card col-12 col-sm-6 col-lg-3 d-flex bg-theme text-light" style="width: 5rem;">
            <img class="card-img p-4" src="${tool.imgUrl}" alt="Card image cap">
        <div class="card-body">
            <span class="card-text">Price:<span id="dri"></span>${tool.price} units</span>
            <br>
            <span>Productivity: X<span>${tool.multiplier}</span></span>
            <br>
            <span>Total: <span></span>${tool.quantity}</span>
            <br>
    <a href="#" class=" btn btn-primary" onclick="buy${tool.id}()">buy ${tool.name}</a>
  </div>
</div>`
    }
    document.getElementById('click-upgrades').innerHTML = template
}
function drawAutomaticUpgrades() {
    let template = ''
    for (let key in automaticUpgrades) {
        let tool = automaticUpgrades[key]
        template += `
        <div class="card col-12 col-sm-6 col-lg-3 d-flex text-light" style="width: 5rem;">
            <img class="card-img p-5" src="${tool.imgUrl}" alt="Card image cap">
        <div class="card-body">
            <span class="card-text">Price:<span id="dri"></span>${tool.price} units</span>
            <br>
            <span>Productivity: X<span>${tool.multiplier}</span></span>
            <br>
            <span>Total: <span></span>${tool.quantity}</span>
            <br>
    <a href="#" class="btn btn-primary" onclick="buy${tool.id}()">buy ${tool.name}</a>
  </div>
</div>`
    }
    document.getElementById('automatic-upgrades').innerHTML = template
}



function buyDrill() {
    if (units >= clickUpgrades.drill.price) {
        clickUpgrades.drill.quantity += 1
        units -= clickUpgrades.drill.price
        clickUpgrades.drill.price *= 3
        drawClickUpgrades()
        updateTotal()
        console.log("purchased drill")
    } else {
        window.alert("you broke")
    }
}
function buyChopSaw() {
    if (units >= clickUpgrades.chopSaw.price) {
        clickUpgrades.chopSaw.quantity += 1
        units -= clickUpgrades.chopSaw.price
        clickUpgrades.chopSaw.price *= 3
        drawClickUpgrades()
        updateTotal()
        console.log("purchased chop saw")
    }
}
function buyTableSaw() {
    if (units >= clickUpgrades.tableSaw.price) {
        clickUpgrades.tableSaw.quantity += 1
        units -= clickUpgrades.tableSaw.price
        clickUpgrades.tableSaw.price *= 3
        drawClickUpgrades()
        updateTotal()
        console.log("purchased table saw")
    }
}
function buyEmployee() {
    if (units >= automaticUpgrades.employee.price) {
        automaticUpgrades.employee.quantity += 1
        units -= automaticUpgrades.employee.price
        automaticUpgrades.employee.price *= 3
        drawAutomaticUpgrades()
        updateTotal()
        console.log("hired employee")
    }
}
function buyCnc() {
    if (units >= automaticUpgrades.cnc.price) {
        automaticUpgrades.cnc.quantity += 1
        units -= automaticUpgrades.cnc.price
        automaticUpgrades.cnc.price *= 3
        drawAutomaticUpgrades()
        updateTotal()
        console.log("purchased cnc")
    }
}
function buyWorkShop() {
    if (units >= automaticUpgrades.workShop.price) {
        automaticUpgrades.workShop.quantity += 1
        units -= automaticUpgrades.workShop.price
        automaticUpgrades.workShop.price *= 3
        drawAutomaticUpgrades()
        updateTotal()
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
updateTotal()
startInterval()
drawClickUpgrades()
drawAutomaticUpgrades()