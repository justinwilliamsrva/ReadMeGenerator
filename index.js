var inquirer = require("inquirer");
var fs = require("fs");

inquirer
    .prompt([
        {
            type: "input",
            message: "What the title of your project?",
            name: "title",
        },
        {
            type: "input",
            message: "Please give a description of the project",
            name: "description",
        },
        {
            type: "input",
            message: "Please give a description of the project",
            name: "description",
        },
    ])
    .then(function (response) {
        let readme = `# ${response.title} \n ## Description \n ${response.description} \n `;
        // let description = `# Description \n ${response.password}`;

        fs.writeFile("README1.md", readme, function (err) {
            if (err) {
                return console.log(err);
            }

            console.log("success");
        });
    });
