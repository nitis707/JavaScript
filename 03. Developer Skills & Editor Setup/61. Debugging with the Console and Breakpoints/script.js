const measureKelvin = function () {
    const measurement = {
        type: "temp",
        unit: "celsius",

        // (c) Fix - to fix this we have to use "Number" funtion
        value: Number(prompt("Degrees celsius:")), // prompt always return the reult is "string".
    };

    // (b) find
    console.table(measurement);

    // console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
}

// (a) Identify
console.log(measureKelvin());

/* Output:

Degrees celcuis:
10

283

*/

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);

    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];

        if (typeof curTemp !== "number") continue;

        // debugger; -- Auto Set for debug
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }

    console.log(max, min);
    return max - min;
};

const amlitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amlitudeBug);

/* Output:

[ 3, 5, 1, 9, 4, 5 ]
9 1
8

*/