var famousPoets = [
    {
        firstName: 'William',
        lastName: 'Wordsworth'
    },
    {
        firstName: 'William',
        lastName: 'Shakespeare'
    },
    {
        firstName: 'Percy',
        lastName: 'Shelley'
    },
    {
        firstName: 'Robert',
        lastName: 'Frost'
    },
    {
        firstName: 'Maya',
        lastName: 'Angelou'
    }
];

famousPoets.forEach(function (poet) {
    console.log(poet.firstName + " " + poet.lastName)
});