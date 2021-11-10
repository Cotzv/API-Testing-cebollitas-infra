import { Given, When, Then } from '@cucumber/cucumber';
import chai, { expect } from 'chai';
import HttpRequestManager from '../../src/common/api/http.request.manager';
import payloads from "../../src/resources/payloads.json"

let validCredentials = false;
let _response = '';
let data = '';

Given(/^I have valid credentials$/, function () {
    validCredentials = true;
})

Given(/^I have a payload$/, function (table) {
    data = payloads.ProjectById[table.rowsHash().payload]
})

When(/^I execute a (.*) request to (.*) endpoint$/, async function (verb, endpoint) {
    await HttpRequestManager.makeRequest(verb, endpoint, data, validCredentials)
        .then(function (response) {
            _response = response;
        })
        .catch(function (error) {
            console.log(error)
            throw error
        })
})

Then(/^the status code should be (\d+) (.*)$/, function (statusCode, statusText) {
    expect(_response.status).to.equal(statusCode)
    expect(_response.statusText).to.equal(statusText)
    //expect(_response.data)
})

Then(/^the project is created$/, function () {
    expect(_response.data.Id).not.to.be.undefined;
    this.id = _response.data.Id;
})