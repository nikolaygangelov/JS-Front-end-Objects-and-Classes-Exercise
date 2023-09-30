function createHeroRegister(heroesInfo) {
    const heroes = [];
    heroesInfo.forEach(element => {
        const [heroName, heroLevel, items] = element.split(' / ');
        heroes.push({
            'Hero' : heroName,
            'level' : Number(heroLevel),
            'Items' : items
        })
    });
    
    heroes.sort((a, b) => a['level'] - b['level']).forEach(hero => {
        console.log(`Hero: ${hero.Hero}`);
        console.log(`level => ${hero.level}`);
        if (hero.Items !== undefined) {
            console.log(`items => ${hero.Items}`);
        }
    });
}

createHeroRegister([
    'Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])