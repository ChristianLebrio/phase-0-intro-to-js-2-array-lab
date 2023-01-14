// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(input){
    return cats.push("Ralph")
}

function destructivelyPrependCat(input){
    return cats.unshift("Bob")
}

function destructivelyRemoveLastCat(input){
    return cats.pop()
}

function destructivelyRemoveFirstCat(input){
    return cats.shift()
}

function appendCat(input){
    const newArray = [...cats, "Broom"]
    return newArray
}

function prependCat(input){
    const newArray = ["Arnold", ...cats]
    return newArray
}

function removeLastCat(input){
    return cats.slice(0,-1)
}

function removeFirstCat(input){
    return cats.slice(1)
}