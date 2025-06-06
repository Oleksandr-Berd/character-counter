export const handleData = (data) => {

    const {text, limit, excludeSpaces} = data || {}

let array

if (text) array=[...text]

const result = {
totalCharacters: array.length    
}

console.log(array);


}