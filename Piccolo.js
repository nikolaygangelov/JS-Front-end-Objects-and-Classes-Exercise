function addAndRemoveCarNumbers(input) {
    const carRegister = input.reduce((acc, curr) => {
        const [direction, carNumber] = curr.split(', ');
        acc[carNumber] = direction;
        return acc;
    }, {});

    Object.keys(carRegister).sort().forEach(plate => {
        if (carRegister[plate] === 'IN') {
            console.log(plate);
        }
    });
    
    if (!Object.values(carRegister).includes('IN')) {
        console.log('Parking Lot Is Empty');
    }
}

addAndRemoveCarNumbers(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])