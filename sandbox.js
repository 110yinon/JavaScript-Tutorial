
const peoples = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

peoples.forEach(people => console.log(`hello ${people}`));

// Same
const logPeople = people => console.log(`hello ${people}`);

peoples.forEach(logPeople);