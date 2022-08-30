const messages = {
    'noun': ['Anna', 'Olivia', 'Luisa', 'Flora', 'Georgie', 'Meredith', 'Barnaby', 'Julian', 'Filipe', 'Tomas', 'Salvador', 'Luisa', 'Francisco'],
    'verb': [' is', ' snores', ' stinks', ' cries', ' agrees', ' holds', ' lends', ' hides', ' hits', ' dives', ' drops', ' does', ' farts'],
    'adjective': [' a cunty', ' at the beach', ' in the bum', ' at the lake', ' in Mars', ' a melon', ' all over the place', ' down the isle', ' slut as Olivia']
};

let message = '';

for (const part in messages) {
    const item = messages[part][Math.floor(Math.random()*messages[part].length)];
    message += item
}

console.log(message)