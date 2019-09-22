var order = {
    first: 1,
    second: 2,
    third: 3
};

var isFirstTime = true;

var _1row = document.getElementById('first-row');
var _2row = document.getElementById('second-row');
var _3row = document.getElementById('third-row');

var first_s = [
    document.getElementById('mont-saint-michel'),
    document.getElementById('san-marco'),
    document.getElementById('santiago-de-compostela')
];
var second_s = [
    document.getElementById('sant-antimo'),
    document.getElementById('san-michele-maggiore'),
    document.getElementById('trani')
];
var third_s = [
    document.getElementById('san-pietro-di-moissac'),
    document.getElementById('san-nicola'),
    document.getElementById('modena')
];
var fourth_s = [
    document.getElementById('sant-ambrogio'),
    document.getElementById('san-giovanni'),
    document.getElementById('monreale')
];
var fifth_s = [
    document.getElementById('san-clemente'),
    document.getElementById('durham'),
    document.getElementById('pisa')
];

var all = [
    first_s, second_s, third_s, fourth_s, fifth_s
];

var firstRow = [], secondRow = [], thirdRow = [];
for (let el0 of all) {

    firstRow.push(el0[0]);
    secondRow.push(el0[1]);
    thirdRow.push(el0[2]);

}
var rows = [
    firstRow, secondRow, thirdRow
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

            //Calcola grandezza del testo

            document.getElementById('p-title').style.fontSize = '30px';
            if (el1 === document.getElementById('mont-saint-michel') ||
                el1 === document.getElementById('san-pietro-di-moissac') ||
                el1 === document.getElementById('sant-ambrogio') ||
                el1 === document.getElementById('san-clemente') ||
                el1 === document.getElementById('santiago-de-compostela') ||
                el1 === document.getElementById('san-michele-maggiore') ||
                el1 === document.getElementById('san-giovanni')) {

                document.getElementById('p-title').style.fontSize = '22px';

            }


            // Determine the element row

            var isFirstRow = false, isSecondRow = false, isThirdRow = false;

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
            for (let elm of thirdRow) {

                if (el1 == elm) {
                    isThirdRow = true;
                }

            }

            // Determine the element column

            var isFirstCol = false, isSecondCol = false, isThirdCol = false, isFourthCol = false, isFifthCol = false;

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
            for (let elm of fifth_s) {

                if (el1 == elm) {
                    isFifthCol = true;
                }

            }

            // Move arrow

            let arr = document.getElementById('arrow');

            if (isFirstCol) {
                arr.style.left = '14%';
            }
            if (isSecondCol) {
                arr.style.left = '32%';
            }
            if (isThirdCol) {
                arr.style.left = '50%';
            }
            if (isFourthCol) {
                arr.style.left = '68%';
            }
            if (isFifthCol) {
                arr.style.left = '86%';
            }

            if (isFirstTime) {

                isFirstTime = false;

                arr.style.opacity = '1';
                antir = setInterval(animSet_1, 20);

            }

            // Animations

            if (isFirstRow) {

                if (order.first !== 3) {

                    // order first
                    if (order.first === 1 || order.first === 2) {

                        _1row.style.transform = 'translate(0, 140px)';
                        order.first = 3;

                    }
                    // order second
                    if (order.second === 2) {

                        _2row.style.transform = 'translate(0, -70px)';
                        order.second = 1;

                    }
                    if (order.second === 3) {

                        _2row.style.transform = 'translate(0, 0)';
                        order.second = 2;

                    }
                    // order third
                    if (order.third === 2) {

                        _3row.style.transform = 'translate(0, -140px)';
                        order.third = 1;
                        
                    }
                    if (order.third === 3) {

                        _3row.style.transform = 'translate(0, -70px)';
                        order.third = 2;

                    }

                }

            }
            if (isSecondRow) {

                if (order.second !== 3) {

                    // order second
                    if (order.second === 1 || order.second === 2) {

                        _2row.style.transform = 'translate(0, 70px)';
                        order.second = 3;

                    }
                    // order first
                    if (order.first === 2) {

                        _1row.style.transform = 'translate(0, 0)';
                        order.first = 1;

                    }
                    if (order.first === 3) {

                        _1row.style.transform = 'translate(0, 70px)';
                        order.first = 2;

                    }
                    // order third
                    if (order.third === 2) {

                        _3row.style.transform = 'translate(0, -140px)';
                        order.third = 1;

                    }
                    if (order.third === 3) {

                        _3row.style.transform = 'translate(0, -70px)';
                        order.third = 2;

                    }
                    
                }

            }
            if (isThirdRow) {

                if (order.third !== 3) {

                    // order third
                    if (order.third === 1 || order.third === 2) {

                        _3row.style.transform = 'translate(0, 0)';
                        order.third = 3;

                    }
                    // order first
                    if (order.first === 2) {

                        _1row.style.transform = 'translate(0, 0)';
                        order.first = 1;

                    }
                    if (order.first === 3) {

                        _1row.style.transform = 'translate(0, 70px)';
                        order.first = 2;

                    }
                    // order second
                    if (order.second === 2) {

                        _2row.style.transform = 'translate(0, -70px)';
                        order.second = 1;

                    }
                    if (order.second === 3) {

                        _2row.style.transform = 'translate(0, 0)';
                        order.second = 2;

                    }
                    
                }

            }

        });

    } 

}

document.querySelector('.unrclick').addEventListener('contextmenu', ev => {
    ev.preventDefault();
});