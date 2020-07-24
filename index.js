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
            message: "Provide a description of the project.",
            name: "description",
        },
        {
            type: "input",
            message: "What are the steps required to install your project? ",
            name: "install",
        },
        {
            type: "input",
            message: "Provide instructions and examples for use. ",
            name: "usage",
        },
        {
            type: "list",
            message: "What license will you use?",
            name: "license",
            choices: ["MIT", "Apache", "GPLv3", "BSD"],
        },
    ])
    .then(function (response) {
        let title = `# ${response.title} \n`;
        let desc = `## Description\n${response.description}\n`;
        let table = `## Table of Contents\n* [Installation](#installation)\n`;
        let install = `## Installation\n${response.install}\n`;
        let usage = `## Usage\n${response.usage}\n`;
        let license = "";

        function licenseBadge() {
            switch (response.license) {
                case "MIT":
                    license =
                        "##License\n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                    break;
                case "Apache":
                    license =
                        "##License\n[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
                    break;
                case "GPLv3":
                    license =
                        "##License\n[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
                    break;
                case "BSD":
                    license =
                        "##License\n[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
            }
        }
        licenseBadge();

        let readme = title + desc + table + install + usage + license;
        fs.writeFile("README1.md", readme, function (err) {
            if (err) {
                return console.log(err);
            }

            console.log("success");
        });
    });
