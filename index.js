// Write your solution here!

// .push() (adds to end) .unshift()  (adds to beginning)

// (pops from end) .pop() .shift() -->from beginning

// ... spread operator 

// .slice()   removes and is non-destructive

// .splice() can remove add or replace     is destructive 


let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
    cats.push('Ralph')
}

function destructivelyPrependCat() {
    cats.unshift('Bob')
}

function destructivelyRemoveLastCat() {
    cats.pop('Garfeild')
}

function destructivelyRemoveFirstCat() {
    cats.shift('Milo')
}

function appendCat() {
    let newArray = [...cats, 'Broom']
    return newArray
}

function prependCat() {
    let newerArray = ['Arnold', ...cats]
    return newerArray
}

function removeLastCat() {
    const copyCats = cats.slice(0, cats.length -1)
    return copyCats
}

function removeFirstCat() {
    const copyCatsTwo = cats.slice(1)
    return copyCatsTwo
}

// 