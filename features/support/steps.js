import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
const chai = require('chai');
chai.use(require('chai-json-schema-ajv'));
import chaijsonschemaajv from 'chai-json-schema-ajv'
import HttpRequestManager from '../../src/common/api/http.request.manager';
import error from '../../src/resources/errors.json';
import payloads from '../../src/resources/payloads.json';
import schema from '../../schema.json';

let validCredentials = false;
let _response = '';
let data = '';

Given('I have valid credentials', function () {
    validCredentials = true;
});

Given(/^I have a payload$/, function (table) {
    data = payloads.Pages[table.rowsHash().payload];
});

// Given(/^background test$/, function () {
//     console.log('----background test');
// });

When(/^I execute a (.*) request to (.*) endpoint$/, async function (verb, endpoint) {
    let _endpoint = '';

    switch (verb) {
        // to refactor for GET ALL
        case 'GET':
        case 'PUT':
            _endpoint = endpoint.replace('{id}', this.id);
            break;
        default:
            _endpoint = endpoint;
            break;
    }

    await HttpRequestManager.makeRequest(verb, _endpoint, data, validCredentials)
        .then(response => {
            _response = response;
        })
        .catch(error => {
            throw error;
        })
});

Then(/^the status code should be (\d+) (.*)$/, function (statusCode, statusText) {
    expect(_response.status).to.equal(statusCode);
    expect(_response.statusText).to.equal(statusText);
    expect(_response.data).not.to.equal(error.Authentication);
});

Then(/^the project is created|updated$/, function () {
    expect(_response.data.id).not.to.be.undefined;
    this.id = _response.data.id;
});

Then(/^the page is validated$/, function () {
    const _schema = {
        type: "object",
        required: ['id'],
        properties: {
            id: { type: 'integer' },
        }
    }
    expect(_response.data).to.be.jsonSchema(_schema);
})