// function feature                       
function getValueNumber(id) {
    const valueNumber = parseInt(document.getElementById(id).value);
    return valueNumber;
}
function getValue(id) {
    const value = document.getElementById(id).value;
    return value;
}

// function to toggle
function handleToggole(id) {
    const forms = document.getElementsByClassName('form');
    for (const form of forms) {
        form.style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
}

// function to toggle Buttons
function handleButtonToggle(id) {
    const formBtns = document.getElementsByClassName('form-btn');
    for (const btn of formBtns) {
        btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
        btn.classList.add('border-gray-300');
    }
    document.getElementById(id).classList.remove('border-gray-300');
    document.getElementById(id).classList.add('border-[#0874f2]', 'bg-[#0874f20d]');
}


const transactionData = [];

// add balance
document.getElementById('add-money-btn')
    .addEventListener('click', function (e) {
        e.preventDefault()
        const validPin = 1234;

        const bank = document.getElementById('bank').value;
        const bankNumber = getValue('account-number');
        const addAmount = getValueNumber('add-amount');
        const pinNumber = getValueNumber('pin-number');


        // console.log(bank, bankNumber, addAmount, pinNumber);

        const availableBalance = parseInt(document.getElementById('available-balance').innerText);
        console.log(availableBalance);

        if (bankNumber.length !== 11) {
            alert('place valid account number')
            return;
        }

        if (pinNumber !== validPin) {
            alert('place valid pin number');
            return;
        }

        const totalAvailableBalance = availableBalance + addAmount;

        document.getElementById('available-balance').innerText = totalAvailableBalance;

        const data = {
            name: 'Add Money',
            date: new Date().toLocaleDateString()
        }
        transactionData.push(data);
        // console.log(transactionData)
    });



// document.getElementById('cashout-home-btn')
//     .addEventListener('click', function () {
//         cashoutContainer.style.display = 'block';
//         addMoneyContainer.style.display = 'none';
//     });

// withdrow feature
document.getElementById('withdrow-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const agentNumber = getValue('agent-number');
        const pin = getValueNumber('pin');
        const valid = 1234;
        const availableBalance = parseInt(document.getElementById('available-balance').innerText);
        const amount = getValueNumber('amount');

        if (agentNumber.length !== 11) {
            alert('ptovid 11 digit agent number');
            return;
        }
        if (pin !== valid) {
            alert('provid correct pin');
            return;
        }
        if (availableBalance < amount) {
            alert('ato taka nei sala tor account a 😁');
            return;
        }

        const newBalance = availableBalance - amount;
        document.getElementById('available-balance').innerText = newBalance;

        const data = {
            name: 'Cash Out',
            date: new Date().toLocaleDateString()
        }
        transactionData.push(data);
        console.log(transactionData)
    });



// Tranesfer button
document.getElementById('transaction-btn')
    .addEventListener('click', function () {
        const transactionContainer = document.getElementById('transaction-container');

        transactionContainer.innerText = ''

        for (const data of transactionData) {
            const div = document.createElement('div');
            div.innerHTML = `
        <div class="flex items-center bg-white p-3 rounded-xl justify-between my-3">
                <div class="flex">
                    <div class="p-3 rounded-full bg bg-[#f4f5f7] mr-3">
                        <img src="assets/money1.png" alt="" class="mx-auto">
                    </div>
                    <div>
                        <h1>${data.name}</h1>
                        <p>${data.date}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis rotate-90"></i>
            </div>
        `
        transactionContainer.appendChild(div);
        }
    })




// home btn feature

// const addMoneyContainer = document.getElementById('add-money-container');
// const cashoutContainer = document.getElementById('cashout-container');


document.getElementById('add-money-home-btn')
    .addEventListener('click', function () {
        handleToggole('add-money-container')

        handleButtonToggle('add-money-home-btn')
    });


document.getElementById('cashout-home-btn')
    .addEventListener('click', function () {
        handleToggole('cashout-container');

        handleButtonToggle('cashout-home-btn')

    });


document.getElementById('tranesfer-btn')
    .addEventListener('click', function () {
        handleToggole('tranesfer-parent');

        handleButtonToggle('tranesfer-btn')
    });


document.getElementById('bonus-btn')
    .addEventListener('click', function () {
        handleToggole('bonus-parent');

        handleButtonToggle('bonus-btn')
    });


document.getElementById('bill-btn')
    .addEventListener('click', function () {
        handleToggole('bill-parent');

        handleButtonToggle('bill-btn')
    });


document.getElementById('transaction-btn')
    .addEventListener('click', function () {
        handleToggole('transaction-parent');

        handleButtonToggle('transaction-btn')
    });

