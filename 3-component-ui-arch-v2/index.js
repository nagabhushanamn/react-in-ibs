

// --------------------------------------------
//  plain-js
// --------------------------------------------


let asiaKolkataEle = document.getElementById("asia-kolkata");
let asiaDubaiEle = document.getElementById("asia-dubai");
let americaNewyorkEle = document.getElementById("america-newyork");

// component class
function Clock(props) {
    let timeZone = props.timeZone;
    let time = new Date().toLocaleTimeString('en-US', { timeZone: timeZone })
    return `
    <div class="card">
        <div class="card-header">${timeZone}</div>
        <div class="card-body">
            <span class="badge badge-dark">${time}</span>
        </div>
    </div>
    `
}

setInterval(() => {
    asiaKolkataEle.innerHTML = Clock({ timeZone: 'Asia/Kolkata' })
    asiaDubaiEle.innerHTML = Clock({ timeZone: 'Asia/Dubai' })
    americaNewyorkEle.innerHTML = Clock({ timeZone: 'America/New_york' })
}, 1000);


//----------------------------------------------------
// react
//----------------------------------------------------


let asiaKolkataEle_v2 = document.getElementById("asia-kolkata-v2");
let asiaDubaiEle_v2 = document.getElementById("asia-dubai-v2");
let americaNewyorkEle_v2 = document.getElementById("america-newyork-v2");



// component class
function NewClock(props) {
    let timeZone = props.timeZone;
    let time = new Date().toLocaleTimeString('en-US', { timeZone: timeZone })

    // let div1Ele = React.createElement('div', { className: 'card-header' }, timeZone)
    // let spanEle = React.createElement('span', { className: 'badge badge-dark' }, time)
    // let div2Ele = React.createElement('div', { className: 'card-body' }, spanEle)
    // let divEle = React.createElement('div', { className: 'card' }, div1Ele, div2Ele)
    // return divEle;

    return (
        <div class="card">
            <div class="card-header">{timeZone}</div>
            <div class="card-body">
                <span class="badge badge-dark">{time}</span>
            </div>
        </div>
    )

}


setInterval(() => {
    // ReactDOM.render(NewClock({ timeZone: 'Asia/Kolkata' }), asiaKolkataEle_v2)
    // ReactDOM.render(NewClock({ timeZone: 'Asia/Dubai' }), asiaDubaiEle_v2)
    // ReactDOM.render(NewClock({ timeZone: 'America/New_york' }), americaNewyorkEle_v2)

    ReactDOM.render(<NewClock timeZone='Asia/Kolkata' />, asiaKolkataEle_v2)
    ReactDOM.render(<NewClock timeZone='Asia/Dubai' />, asiaDubaiEle_v2)
    ReactDOM.render(<NewClock timeZone='America/New_york' />, americaNewyorkEle_v2)

}, 1000);

