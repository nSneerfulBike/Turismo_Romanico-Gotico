var order = {
    first: 1,
    second: 2
};

var isFirstTime = true;

var _1row = document.getElementById('first-row');
var _2row = document.getElementById('second-row');

var first_s = [
    document.getElementById('abbazia-di-fontenay'),
    document.getElementById('basilica-di-sant-antonio-di-padova')
];
var second_s = [
    document.getElementById('abbazia-di-fossanova'),
    document.getElementById('basilica-di-saint-denis')
];
var third_s = [
    document.getElementById('basilica-di-santa-croce'),
    document.getElementById('cattedrale-di-notre-dame')
];
var fourth_s = [
    document.getElementById('basilica-di-santa-maria-novella'),
    document.getElementById('sainte-chapelle')
];

var all = [
    first_s, second_s, third_s, fourth_s
];

var firstRow = [], secondRow = [];
for (let el0 of all) {

    firstRow.push(el0[0]);
    secondRow.push(el0[1]);

}
var rows = [
    firstRow, secondRow
];

var antir;

function animSet_1() {

    clearInterval(antir);

    let arr = document.getElementById('arrow');
    arr.style.transition = 'opacity 0.15s linear, left 0.25s ease';

}

for (let el0 of all) {

    for (let el1 of el0) {

        el1.addEventListener('click', () => {

            for (let e0 of all) {

                for (let e1 of e0) {

                    e1.style.backgroundColor = '#242f3d';

                }

            }
            el1.style.backgroundColor = '#3a495c';

            // Determine the element row

            var isFirstRow = false, isSecondRow = false;

            for (let elm of firstRow) {

                if (el1 == elm) {
                    isFirstRow = true;
                }

            }
            for (let elm of secondRow) {

                if (el1 == elm) {
                    isSecondRow = true;
                }

            }

            // Determine the element column

            var isFirstCol = false, isSecondCol = false, isThirdCol = false, isFourthCol = false;

            for (let elm of first_s) {

                if (el1 == elm) {
                    isFirstCol = true;
                }

            }
            for (let elm of second_s) {

                if (el1 == elm) {
                    isSecondCol = true;
                }

            }
            for (let elm of third_s) {

                if (el1 == elm) {
                    isThirdCol = true;
                }

            }
            for (let elm of fourth_s) {

                if (el1 == elm) {
                    isFourthCol = true;
                }

            }

            // Move arrow

            let arr = document.getElementById('arrow');

            if (isFirstCol) {
                arr.style.left = '16%';
            }
            if (isSecondCol) {
                arr.style.left = '39%';
            }
            if (isThirdCol) {
                arr.style.left = '61%';
            }
            if (isFourthCol) {
                arr.style.left = '84%';
            }

            if (isFirstTime) {

                isFirstTime = false;

                arr.style.opacity = '1';
                antir = setInterval(animSet_1, 20);

            }

            // Animations

            if (isFirstRow) {

                if (order.first !== 2) {

                    if (order.first === 1) {

                        _1row.style.transform = 'translate(0, 93.3px)';
                        order.first = 2;

                    }
                    if (order.second === 2) {

                        _2row.style.transform = 'translate(0, -93.3px)';
                        order.second = 1;

                    }

                }

            }
            if (isSecondRow) {

                if (order.second !== 2) {

                    if (order.second === 1) {

                        _2row.style.transform = 'translate(0, 0)';
                        order.second = 2;

                    }
                    if (order.first === 2) {

                        _1row.style.transform = 'translate(0, 0)';
                        order.first = 1;

                    }

                }

            }

        });

    }

}

document.querySelector('.unrclick').addEventListener('contextmenu', ev => {
    ev.preventDefault();
});