const app = require("./../src/server/server");
const fetch = require('node-fetch')

describe("Testing the submit functionality", () => {
    test('Testing the handleSubmit() function', () => {
    const cityToAnal= 'Barcelona';   
        const newLocal = 'http://localhost:8001/addEntry';
    return addEntry (newLocal, {formDestination: cityToAnal}).then(geoData => {
        expect(geoData.city).toBe('Barcelona');
    })});
});