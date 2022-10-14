


const coffeeFactsArr = [
    '.The drink dates back to 800 A.D',
    'Coffee beans are technically seeds',
    'And you can eat coffee cherries as a food' ,
    'There are two main types: Arabica and Robusta',
    'Brazil grows the most coffee in the world' ,
    'Only two U.S. states produce coffee',
];

export default coffeeFactsArr;


// weather info

export const endpoint = 'https://data.everettwa.gov/resource/qvfa-2v26.json?naics=722515' // endpoint for naics business codes (coffee specific)
export const token = '4FqVdan6fFJP5rYtQNkZUXH5E' // city of everett specific app token for more queries

export const apiKey = 'fd8a2a48765006c606db0c624872cd65'
        
export const lat = '47.9970247'
export const lon = '-122.16871'
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`

// fetch(url) //cors issue, or api key
//     .then((res) => {
//         // console.log(res)
//         return res.json()
//     })
//     .then((data) => {
//         // console.log(data);
//         console.log(data);
//     }).catch(err => console.log(err))