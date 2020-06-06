// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

//CLASSES FOR A PARK AND A STREET
class MainData {
    constructor(name, buildYear,){
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends MainData{
    constructor(name, buildYear, numberOfTrees, area){
        super(name, buildYear);
        this.numberOfTrees= numberOfTrees;
        this.area = area;
    }
    parkDensity(){
        const density = this.numberOfTrees/this.area;
        return density;
    }
    age(){
        return 2020 - this.buildYear;
    }
}

class Street extends MainData{
    constructor(name, buildYear, length, size = 2){ //default parameter is selected when you dont define it in callback
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'small');
        classification.set(2, 'normal');
        classification.set(3, 'big');
        classification.set(4, 'huge');

        console.log(this.name + ', built in ' + this.buildYear +', is a ' + classification.get(this.size) + ' street');
    
    }
}


const allParks = [new Park ('Dundridge', 1980, 1001, 15000), 
                  new Park ('St Andrews', 1800, 500, 7000), 
                  new Park('Clifton Downs', 1700, 1500, 3000),
                 ];

const allStreets = [new Street('GLoucester rd', 1600, 3.4, 4), 
                    new Street('Park Street', 1300, 2.3, 1), 
                    new Street('Broadmead', 1990, 1.0, 3),
                    new Street('Church rd', 1200, 5.4, 4)
                   ];


console.log('------------------------------PARKS -------------------------------------');

//THE DENSITY OF EACH PARK
const parksDensity = allParks.forEach(current => console.log(`The density of ${current.name} is ${current.parkDensity()}`));

//THE AVERAGE AGE OF A PARK IN TOWN:
const eachparksAge = allParks.map(current=> {
         return current.age();
        });

        //spread 
function averageParkAge(a,b,c){
    return (a+b+c)/allParks.length;
}
averageParkAge(...eachparksAge);
console.log(`Average park age in the town is + ${averageParkAge(...eachparksAge)}`);


//PARK WITH MORE THAT 1000 TREES
    //for of  + ternary operator
function thousandTrees() {
    for(cur of allParks){
        (cur.numberOfTrees > 1000 ? console.log(`${cur.name} is the park that has got more than 1000 trees`) :  false);
    }
}
thousandTrees();


console.log('------------------------------STREETS -------------------------------------');
//STREET CLASSIFICATION
const streetClassification = allStreets.map(current => {
    return current.classifyStreet();
});

//Total and average length of the town's streets
const eachStreetlength = allStreets.map(current=> {
    return current.length;
   });

   //spread 
function averageStreetlength(a,b,c,d){
return (a+b+c+d)/allStreets.length;
}

function totalStreetLength(a,b,c,d) {
    return a+b+c+d;
}

totalStreetLength(...eachStreetlength);
averageStreetlength(...eachStreetlength);
console.log('The total length of the streets in our town is ' + 
totalStreetLength(...eachStreetlength) + 'km and the average street length in town is ' + averageStreetlength(...eachStreetlength)+' km');















