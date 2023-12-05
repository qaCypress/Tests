const fs = require('fs');
import {KEYS} from './data.js';

async function fetchData() {
    const apiKey = 'AIzaSyDq2L4D73Y5E9jqyN3jk67b9xE-xzghqkE';
    const sheetId = '1Ki7_umFCqQvwWH-s9gExvnbomP3bUrYW3s0VTv5aIpg';
    const range = '10daily!A1:B4000'; 
    
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();


        const filteredData = data.values
        .filter(value => value[0] && /^[a-zA-Z]+\.[a-zA-Z]+.*$/.test(value[0]))
        .map(value => value[0].replace(/\([^)]*\)/g, '').split(' ')[0].trim()); 
        
        //fs.writeFileSync('filteredData.json', JSON.stringify(filteredData, null, 2));

        return filteredData;
    } catch (error) {
        console.error('Error:', error);
        throw error; 
    }
}

async function getKeys() {
    try {
        const resultArray = await fetchData();
        return  [...KEYS, ...resultArray] ;
    } catch (error) {
        console.error('Error in getKeys:', error);
        throw error; // Rethrow the error if necessary
    }
}

export default async function getExelKeys() {
    // Use this function in your Cypress spec file
    return await getKeys();
}

