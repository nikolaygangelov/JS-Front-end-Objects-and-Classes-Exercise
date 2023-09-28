function createList(input) {
    input.forEach(name => {
        const employee = {
            name,
            personalNumber : name.length
        };
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);        
    });
}

createList([ 'Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal' ]);