function printOddOccur(sentence) {
    const elements = sentence.split(' ');
    const loweredElements = elements.map((element) => element.toLowerCase());

    const wordOccur = loweredElements.reduce((acc, curr) => {
        if (!acc.hasOwnProperty(curr)) {
            acc[curr] = 0;
        }
        acc[curr]++;

        return acc;
    }, {})

    let result = '';
    Object.keys(wordOccur).forEach((key) => {
        if (wordOccur[key] % 2 !== 0) {
            result+=`${key} `;
        }
    });
    console.log(result);
}

printOddOccur('Cake IS SWEET is Soft CAKE sweet Food');