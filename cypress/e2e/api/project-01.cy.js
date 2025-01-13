
//   /**
//  * UI APP: https://www.techglobal-training.com/backend 
// SWAGGER: https://api.tech-global-training.com/api-docs/ 

// TASK-1: Get All Students
// Title: Retrieve all students and validate the response
// Steps:
// 1.Send a GET request to the endpoint to retrieve all students.
// 2.Validate that the status code is 200.
// 3.Validate that there are at least 2 students in the response.
// 4.Validate that each student object has a property called STUDENT_ID.
//  */

//     /**
//   * 
// TASK-2: Create a New Student
// Title: Create a new student and validate the response
// Steps:
// 1.Send a POST request to the endpoint to create a new student with the provided details.
// 2.Validate that the status code is 201.
// 3.Validate that the STUDENT_ID is greater than 2.
// 4.Validate that the DOB matches the provided DOB.
// 5.Validate that the EMAIL matches the provided EMAIL.
// 6.Validate that the FIRST_NAME matches the provided FIRST_NAME.
// 7.Validate that the LAST_NAME matches the provided LAST_NAME.
// 8.Validate that the INSTRUCTOR_ID matches the provided INSTRUCTOR_ID.
//   */

//  * TASK-3: Get Newly Created Student
// Title: Retrieve the newly created student and validate the response
// Steps:
// 1.Send a GET request to the endpoint to retrieve the newly created student using STUDENT_ID.
// 2.Validate that the status code is 200.
// 3.Validate that the STUDENT_ID matches the provided STUDENT_ID.
// 4.Validate that the DOB matches the provided DOB.
// 5.Validate that the EMAIL matches the provided EMAIL.
// 6.Validate that the FIRST_NAME matches the provided FIRST_NAME.
// 7.Validate that the LAST_NAME matches the provided LAST_NAME.
// 8.Validate that the INSTRUCTOR_ID matches the provided INSTRUCTOR_ID.
//  */

//  * 
// TASK-4: Update Newly Created Student with a Different Instructor
// Title: Update the newly created student with a different 
// instructor and validate the response
// Steps:
// 1.Send a PUT request to the endpoint to update the student's INSTRUCTOR_ID.
// 2.Validate that the status code is 200.
// 3.Validate that the response message is 'Successfully updated the student with the STUDENT_ID:  { STUDENT_ID }'.
//  */

//   /**
//    * TASK-5: Delete Newly Created Student
// Title: Delete the newly created student and validate the response
// Steps:
// 1.Send a DELETE request to the endpoint to delete the student using STUDENT_ID.
// 2.Validate that the status code is 204.
//    */


describe("Automation project 01", () => {
  let studentID;

  it("Get all students", () => {
    cy.request({
      method: "GET",
      url: Cypress.env('API_ENDPOINT'),
    }).then((response) => {
      console.log(JSON.stringify(response.body, null, 2));
      expect(response.status).to.eq(200);
      expect(response.body.length).to.be.gte(2);
      response.body.forEach((student) => {
        expect(student).to.have.property('STUDENT_ID');
      });
    });
  });

  it("Create a new student", () => {
    const postRequestBody = {
      DOB: "2011-11-11",
      EMAIL: "AlinaMar@gmail.com",
      FIRST_NAME: "Test",
      LAST_NAME: "User",
      INSTRUCTOR_ID: 2,
    };

    cy.request({
      method: "POST",
      url: Cypress.env('API_ENDPOINT'),
      body: postRequestBody,
    }).then((response) => {
      console.log(JSON.stringify(response.body, null, 2));
      expect(response.status).to.eq(201);
      expect(response.body.STUDENT_ID).to.be.greaterThan(2);
      expect(response.body).to.have.property("DOB", postRequestBody.DOB);
      expect(response.body).to.have.property("EMAIL", postRequestBody.EMAIL);
      expect(response.body).to.have.property("FIRST_NAME", postRequestBody.FIRST_NAME);
      expect(response.body).to.have.property("LAST_NAME", postRequestBody.LAST_NAME);
      expect(response.body).to.have.property("INSTRUCTOR_ID", postRequestBody.INSTRUCTOR_ID);
      studentID = response.body.STUDENT_ID;
    });
  });

  it("Get newly created student", () => {
    cy.request({
      method: "GET",
      url: `${Cypress.env('API_ENDPOINT')}/${studentID}`,
      failOnStatusCode: false,
    }).then((response) => {
      console.log(JSON.stringify(response.body, null, 2));
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('STUDENT_ID', studentID);
    });
  });

  it("Delete newly created student", () => {
    cy.request({
      method: "DELETE",
      url: `${Cypress.env('API_ENDPOINT')}/${studentID}`,
    }).then((response) => {
      expect(response.status).to.eq(204);
    });
  });
});