import axios from "axios";

const API_URL = 'https://api.github.com/users/vikrant48';



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~httpresuest~~~~~~~~~~~~~~~~~~~~~~~~~~~ 

// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// // Create an XMLHttpRequest instance
// const xhr = new XMLHttpRequest();

// // Open a GET request
// xhr.open('GET', API_URL, true);

// // Define the onload function
// xhr.onload = () => {
//     if (xhr.status === 200) {
//         const res = xhr.responseText;
//         const data = JSON.parse(res);
//         console.log(data);
//         console.log(data.name)
//     } else {
//         // Handle non-200 responses
//         console.error('ERROR:', xhr.status, xhr.statusText);
//     }
// };

// // Define the onerror function
// xhr.onerror = () => {
//     console.error('Request failed');
// };

// // Send the request
// xhr.send();


//~~~~~~~~~~~~~~~~~~~~~~~~fetch~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// async function fetchData() {
//     try {
//         const responce = await fetch(API_URL)
//         const data = await responce.json()

//         console.log(data)
//         console.log(data.name)

//     } catch (error) {
//         console.log('ERROR', error)

//     }

// }

// fetchData()


//~~~~~~~~~~~~~~~~~~~~~~~~~~AXIOS~~~~~~~~~~~~~~~~~~~~~~~

async function fetchData() {
    try {
        const responce = await axios.get(API_URL)
        const data = responce.data

        console.log(data)
        console.log(data.bio)

    } catch (error) {
        console.log('ERROR', error)

    }
}

fetchData()