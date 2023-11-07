//for of

// const arr = [1,2,3,4,5]
// for (const element of arr) {
//     console.log(element)
// }

// const greetings = 'hello world'
// for (const greet of greetings) {
//     console.log(greet)
    
// }

//maps

// const map = new Map()
// map.set('actionGame','Gododwar')
// map.set('StealthGame','assassinscreed')
// map.set('MysteryGame','alan wake')
// map.set('racingGame','nfs')
// map.set('horrorGame','ghost')

// console.log(map)

// for (const [key,value] of map) {
//     console.log(key,value)
// }

// const obj ={
//     "game1":"nfs",
//     "game2":"godofwar",
//     "game3":"spiderman"
// }

// for (const key in obj) {
//     console.log(key)
//     }

// for (const key in obj) {
//     console.log(obj[key])
        
//     }

    // const games =["godofwar","spdierman","assassinscreed"]

    // for (const key in games) {
    //    console.log(games[key])
    // }

    //foreach
    // const games =["godofwar","spdierman","assassinscreed","deadbydaylight","alanwake"]

    // games.forEach((item)=>(console.log(item)))
    
    const print = function (i){
        console.log(i.gameName)
    }

    // games.forEach(print)

    const games = [
        {
            gameType:"action",
            gameName:"God of war"
        },
        {
            gameType:"action",
            gameName:"God of war 2"
        },
        {
            gameType:"action",
            gameName:"God of war 3"
        },
        {
            gameType:"action",
            gameName:"God of war 4"
        },
        {
            gameType:"action",
            gameName:"God of war 5"
        },
        {
            gameType:"action",
            gameName:"God of war 6"
        }
    ]

  games.forEach((item)=>(console.log(item.gameName)))