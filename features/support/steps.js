import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import HttpRequestManager from '../../src/common/api/http.request.manager';
import payloads from '../../src/resources/payloads.json'

let validCredentials = false;
let _response = '';
let data = '';

Given(/^I have valid credentials$/, function () {
    validCredentials = true;
})

Given(/^I have a payload$/, function (table) {
    data = payloads.UserById[table.rowsHash().payload]
})

Given(/^background test$/, function () {
    console.log(" -- Background Test -- ");
})


When(/^I execute a (.*) request to (.*) endpoint$/, async function (verb, endpoint) {
    let _endpoint = ''

    switch (verb) {
        case 'PUT':
            _endpoint = endpoint.replace('{id}', this.id)
            break
        default:
            _endpoint = endpoint
            break
    }

    await HttpRequestManager.makeRequest(verb, _endpoint, data, validCredentials)
        .then(function (response) {
            _response = response;
        })
        .catch(function (error) {
            console.log(error)
            throw error
        })
})

Then(/^the status code should be (\d+) (.*)$/, function (statusCode, statusText) {
    console.log(_response.status)
    console.log(_response.statusText)
    console.log(statusCode)
    console.log(statusText)
    expect(_response.status).to.equal(statusCode)
    expect(_response.statusText).to.equal(statusText)
})

Then(/^the user is created|updated$/, function () {
    expect(_response.data.id).not.to.be.undefined
    this.id = _response.data.id
})