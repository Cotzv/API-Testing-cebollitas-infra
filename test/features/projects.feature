Feature: Projects

@CRUD @Projects
Scenario: A user should be able to retrieve all projects
    Given I have valid credentials
    When I execute a GET request to projects.json endpoint
    Then the status code should be 200 OK

@DataDrive @Projects
Scenario Outline: A user should be able to retrieve all projects - Data Driven
    Given I have valid credentials
    When I execute a <verb> request to <endpoint> endpoint
    Then the status code should be <statusCode> <statusText>

    Examples:
    | verb | endpoint      | statusCode | statusText|
    | GET  | projects.json | 200        | OK        |

@POST
Scenario: A user should be able to create a project
    Given I have valid credentials
        And I have a payload
        | payload | POST |
    When I execute a POST request to projects.json endpoint
    Then the project is created
        And the status code should be 200 OK

@PUT
Scenario: A user should be able to update a project
    Given I have valid credentials
        And I have a payload
        | payload | POST |
    When I execute a POST request to projects.json endpoint
    Then the project is created
        And the status code should be 200 OK