// Q1
function number(n) {
    return n <= 0 ? true : false
}
console.log(number(2));

// Q2
function nextInt(n) {
    return n+1
}
console.log(nextInt(2));

// Q3
function strings(arr) {
    return arr.filter((str) => {
        return /[0-9]/.test(str)
    })
}
console.log(strings(['d' , 'n' , '4f', '3e']
));

// Q4 
function oddEven(n){
        if (n === 0) {
          return "even";
        } else if (n === 1) {
          return "odd";
        } else {
          return oddEven(n - 2);
        }   
}
console.log(oddEven(5));

// Q5
function charswap(str, ch1, ch2) {
    let swapStr = ""
    for (let i = 0; i < str.length; i++) {
        if(str[i] == ch1) {
        
            swapStr += ch2
        } 
        else if(str[i] == ch2) {
        
            swapStr += ch1
        } 
        else {
            swapStr += str[i]

        }
    }
    return swapStr

}

console.log(charswap( "aaddeee", "a", "d"));

// Q6

function returnNames(arr) {
    namesArr = []
    for(let i =0; i <arr.length; i++){

        if (!namesArr.includes(arr[i])) {
            namesArr.push(arr[i])
        }
    }
    return namesArr
}

console.log(returnNames(["Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", "Dareen"]));

// Q7
function returnNames2(arr) {
    namesArr = []
    arr.forEach(n =>{
        if (!namesArr.includes(n)) {
            namesArr.push(n)
        }
    })
    return namesArr

}

console.log(returnNames2(["Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", "Dareen"]));

// Q8

function idTitle(arr){
    newArr = []
    arr.forEach(series => {
        ser = {"id" : series.id, "title": series.title}
        newArr.push(ser)
    })
    return newArr
}

let newSeries = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
         ]

console.log(idTitle(newSeries));

// Q9

function idTitle2(arr){
    let newArr = arr.map(series => {
       return {id: series.id, title: series.title}
    })
    return newArr
}

console.log(idTitle2(newSeries));

// Q10

function rating(arr){
    let newArr= arr.filter(series => series.rating <5)
    return newArr
}

console.log(rating(newSeries));

// Q11

function longestStr(arr) {
    return arr.reduce((acc, str) => {
        return acc.length > str.length ? acc : str
    })
}

console.log(longestStr(['duaazcmxb ncbnszvduwaeudgy', 'skjgchxzv', 'sbzcvgsgaetwyuiu']));
console.log(longestStr(["Java", "JavaScript", "Python", "C++", "PHP"]));

// Q12 

function displayName(arr) {
    return arr.reduce((acc, curr) => {
        return acc.concat(curr.version.name)
    }, [])
}

let pokemonData =[
    {
      "game_index": 76,
      "version": {
        "name": "red",
        "url": "https://pokeapi.co/api/v2/version/1/"
      }
    },
    {
      "game_index": 76,
      "version": {
        "name": "blue",
        "url": "https://pokeapi.co/api/v2/version/2/"
      }
    },
    {
      "game_index": 76,
      "version": {
        "name": "yellow",
        "url": "https://pokeapi.co/api/v2/version/3/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "gold",
        "url": "https://pokeapi.co/api/v2/version/4/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "silver",
        "url": "https://pokeapi.co/api/v2/version/5/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "crystal",
        "url": "https://pokeapi.co/api/v2/version/6/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "ruby",
        "url": "https://pokeapi.co/api/v2/version/7/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "sapphire",
        "url": "https://pokeapi.co/api/v2/version/8/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "emerald",
        "url": "https://pokeapi.co/api/v2/version/9/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "firered",
        "url": "https://pokeapi.co/api/v2/version/10/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "leafgreen",
        "url": "https://pokeapi.co/api/v2/version/11/"
      }
    },
    {
      "game_index": 132,
      "version": {
        "name": "diamond",
        "url": "https://pokeapi.co/api/v2/version/12/"
      }
    }
    ]


console.log(displayName(pokemonData));

// Q13

// Q14

// a. Hi Coach! Rawan --- yes
// b. Car Owner? True --- wrong!because it said this.hascar (undefined) instead of this.info.hasCar
// c. Zarqa --- nothing cause no console log, but Zarqa when console logged because this refers to info in this case

// var employee = {
//     firstName: 'Rawan',
//     sayHi: function(){
//         console.log("Hi Coach ! " + this.firstName);
//     }
// }

// employee.sayHi() 

// var employee = {
//     firstName: 'Rawan',
//     info: {
//         hasCar: true,
//         hasPet: true
//     },
//     printInfo: function(){
//         console.log("Car owner? " + this.hasCar);
//     }
// }

// employee.printInfo()

// var employee = {
//     firstName: 'Rawan',
//     info: {
//         hasCar: true,
//         hasPet: true,
//         printAddress: function(){
//             return this.data.address;
//         },
//         data: {
//             address: "Zarqa"
//         }
//     },
// }

// console.log(employee.info.printAddress()) 