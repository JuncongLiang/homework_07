const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// This file will generate the final HTML. You don't need to touch this at all!
const render = require("./lib/htmlRenderer");

// This will be an array of all team member objects created
const teamMembers = [];

function createTeam() {

  inquirer
      .prompt([

          {
              type: "list",
              message: "What type of team member are you?",
              name: "role",
              choices: ["Manager", "Engineer", "Intern", "Completed"]
          }

      ]).then (newMember => {
        switch(newMember.role) {
            case "Manager":
                addManager();
                break;
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            case  "Completed":
                render(teamMembers);
                break

        }
    })
  
function addManager() {

      inquirer.prompt([

              {
                  type: "input",
                  message: "What is your name?",
                  name: "Name"
              },

              {
                  type: "input",
                  message: "What is your employee ID?",
                  name: "employeeID"
              },

              {
                  type: "input",
                  message: "What is your email?",
                  name: "Email"
              },

              {
                  type: "input",
                  message: "What is your office number?",
                  name: "officeNumber"
              }

     ]).then(response => {
              console.log(response);

              let newManager = new Manager(response.Name, response.employeeID, response.Emai, response.officeNumber)

              teamMembers.push(newManager)

              createTeam();

          })
 }

function addEngineer() {
  
    inquirer.prompt([

          {
              type: "input",
              message: "What is your name?",
              name: "Name"
          },

          {
              type: "input",
              message: "What is your employee ID?",
              name: "employeeID"
          },

          {
              type: "input",
              message: "What is your email?",
              name: "Email"
          },

          {
              type: "input",
              message: "What is your GitHub username?",
              name: "gitHub"
          }
      ]).then(response => {
          console.log(response);

          let newEngineer = new Engineer(response.Name, response.employeeID, response.Email, response.gitHub)

          teamMembers.push(newEngineer)

          createTeam();
        })
}

function addIntern() {

  inquirer
      .prompt([

          {
              type: "input",
              message: "What is your name?",
              name: "Name"
          },

          {
              type: "input",
              message: "What is your employee ID?",
              name: "employeeID"
          },

          {
              type: "input",
              message: "What is your email?",
              name: "Email"
          },

          {
              type: "input",
              message: "What is your school?",
              name: "School"
          }

      ]).then(response => {
          console.log(response);

          let newIntern = new Intern(response.Name, response.ID, response.Email, response.School)

          teamMembers.push(newIntern)

          createTeam();
      })
}
}

module.exports = teamMembers

createTeam();