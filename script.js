
//Basic calculator and scientific

let outputscreen = document.getElementById("output");
let equalto = document.getElementById(".equal");

function display(num){
    outputscreen.value += num;
}

function calculate(){
    try {
        outputscreen.value = Math.round(eval(outputscreen.value.replace('^', '**')));
    } catch (error) {
        alert("inavlid");
    }
}

function Clear(){
    outputscreen.value = "";
}

function del(){
    outputscreen.value =  outputscreen.value.slice(0,-1);
}

function sin() {
    outputscreen.value = Math.sin(outputscreen.value);
}

function cos() {
    outputscreen.value = Math.cos(outputscreen.value);
}

function tan() {
    outputscreen.value = Math.tan(outputscreen.value);
}

function sqrt() {
    outputscreen.value = Math.sqrt(outputscreen.value);
}

function log() {
    outputscreen.value = Math.log(outputscreen.value);
}

function pi() {
    outputscreen.value = Math.PI;
}

function e() {
    outputscreen.value = Math.E;
}

function fact() {
    let num = parseInt(outputscreen.value);
    outputscreen.value = factorial(num);
}



function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

// unit calculator

const unitConversions = {
    length: {
        meter: 1,
        centimeter: 100,
        kilometer: 0.001,
        millimeter: 1000,
        micrometer: 1e6,
        nanometer: 1e9,
        mile: 0.000621371,
        yard: 1.09361,
        foot: 3.28084,
        inch: 39.3701,
        'nautical-mile': 0.000539957,
    },
    area: {
        square_meter: 1,
        square_kilometer: 0.000001,
        square_centimeter: 10000,
        square_millimeter: 1000000,
        hectare: 0.0001,
        square_mile: 3.861e-7,
        square_yard: 1.19599,
        square_foot: 10.7639,
        square_inch: 1550,
        acre: 0.000247105,
    },
    'data-transfer-rate': {
        bps: 1,
        Kbps: 0.001,
        Mbps: 0.000001,
        Gbps: 0.000000001,
        Tbps: 0.000000000001,
    },
    'digital-storage': {
        bit: 1,
        byte: 0.125,
        KB: 0.000125,
        MB: 0.000000125,
        GB: 0.000000000125,
        TB: 0.000000000000125,
    },
    energy: {
        joule: 1,
        kilojoule: 0.001,
        gram_calorie: 0.239006,
        kilocalorie: 0.000239006,
        watt_hour: 0.000277778,
        kilowatt_hour: 0.000000277778,
    },
    frequency: {
        hertz: 1,
        kilohertz: 0.001,
        megahertz: 0.000001,
        gigahertz: 0.000000001,
    },
    'fuel-economy': {
        'km/l': 1,
        'mpg(US)': 2.35215,
        'mpg(UK)': 2.82481,
    },
    mass: {
        kilogram: 1,
        gram: 1000,
        milligram: 1000000,
        microgram: 1000000000,
        metric_ton: 0.001,
        pound: 2.20462,
        ounce: 35.274,
    },
    'plane-angle': {
        degree: 1,
        radian: 0.0174533,
        grad: 1.11111,
    },
    pressure: {
        pascal: 1,
        kilopascal: 0.001,
        bar: 0.00001,
        psi: 0.000145038,
        atm: 0.00000986923,
    },
    speed: {
        'm/s': 1,
        'km/h': 3.6,
        'mph': 2.23694,
        'knots': 1.94384,
    },
    temperature: {
        celsius: 1,
        fahrenheit: 33.8,
        kelvin: 274.15,
    },
    time: {
        second: 1,
        millisecond: 1000,
        minute: 0.0166667,
        hour: 0.000277778,
        day: 0.0000115741,
        week: 0.0000016534,
    },
    volume: {
        liter: 1,
        milliliter: 1000,
        cubic_meter: 0.001,
        cubic_centimeter: 1000,
        cubic_millimeter: 1000000,
        gallon: 0.264172,
        quart: 1.05669,
        pint: 2.11338,
        cup: 4.22675,
        fluid_ounce: 33.814,
        tablespoon: 67.628,
        teaspoon: 202.884,
    },
};

function updateUnits() {
    const unitType = document.getElementById('unitType').value;
    const inputUnit = document.getElementById('inputUnit');
    const outputUnit = document.getElementById('outputUnit');
    
    inputUnit.innerHTML = '';
    outputUnit.innerHTML = '';

    const units = unitConversions[unitType];
    for (const unit in units) {
        const option1 = document.createElement('option');// Create the Html elements 
        option1.value = unit;
        option1.text = unit.replace(/_/g, ' ');
        inputUnit.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = unit;
        option2.text = unit.replace(/_/g, ' ');// Replaces all underscores
        outputUnit.appendChild(option2);

        convertUnits();
    }
}

function convertUnits() {
    const unitType = document.getElementById('unitType').value;
    const inputValue = document.getElementById('inputValue').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    
    const inputFactor = unitConversions[unitType][inputUnit];
    const outputFactor = unitConversions[unitType][outputUnit];
    
    const outputValue = (inputValue * inputFactor) / outputFactor;
    document.getElementById('outputValue').value = outputValue;

    const formulaText = `multiply the ${unitType} value by ${inputFactor} and divide by ${outputFactor}`;
    document.getElementById('formulaText').innerText = formulaText;
}

updateUnits();

