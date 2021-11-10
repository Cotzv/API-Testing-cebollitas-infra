import { BeforeAll, Before, AfterAll, After, BeforeStep, AfterStep } from "@cucumber/cucumber";
import { expect } from "chai"
import HttpRequestManager from "../../src/common/api/http.request.manager";
import endpoints from "../../src/resources/endpoints.json"


BeforeAll({ tags: "@CRUD" }, function () {
    console.log(" -- Before All Scenarios -- ");
})
Before({ tags: "@CRUD" }, function () {
    console.log(" -- Before Scenarios -- ");
    this.count = 1;
    console.log(this.count);
})

AfterAll({ tags: "@CRUD" }, function () {
    console.log(" -- After All Scenarios -- ");
})

After({ tags: "@CRUD" }, function () {
    console.log(" -- After Scenarios -- ");
})

After({ tags: "@POST" }, function () {
    let _postId = this.id;
    await HttpRequestManager.makeRequest('DELETE', endpoints.projectById.replace('{id}', _postId))
        .then(function (response) {
            expect(response.status).to.equal(200);
            expect(response.statusText).to.equal('OK');
            console.log(`project ${_postId} deleted`);
            console.log()
        })
        .catch(function (error) {
            console.log(error);
            throw error;
        })
})

BeforeStep({ tags: "@CRUD" }, function () {
    console.log(" -- Before Step Scenarios -- ");
})

AfterStep({ tags: "@CRUD" }, function () {
    console.log(" -- After Step Scenarios -- ");
})