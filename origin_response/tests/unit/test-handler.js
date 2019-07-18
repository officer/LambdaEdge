'use strict';

const app = require('../../app.js');
const chai = require('chai');
const expect = chai.expect;
const fs = require('fs');
const data = fs.readFileSync('../origin_response.json');
var event = JSON.parse(data);
var context;

describe('Tests index', function () {
    it('verifies successful response', async () => {
        await app.lambdaHandler(event, context, callback)
    });
});

function callback(err, result){
    if(err){
        console.error(err);
        return;
    }
    console.log(JSON.stringify(result));

    expect(result.status).to.equal('200');
    expect(result.headers).to.be.an('object');
}