const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const generate = require('./generateMarkdown/generatingmarkdown');

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your Git project?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your github username?"

    },
    {
        type: "input",
        name: "repo",
        message: "Please provide repo link"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a brief description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the usage of the project"
    },
    {
        type: "input",
        name: "license",
        message: "Provide your project license"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide all contributors to this project"
    },
];

inquirer
.prompt(questions)
.then(function(data){
    const queryURL = `https://api.github.com/users/${data.username}`;

    axios.get(queryURL).then(function(res){

        const githubInfo = {
            name: res.data.name,
            profile: res.data.html_url,
            githubImage: res.data.avatar_url,
            email: res.data.email,
        };

        fs.writeFile("README.md", generate(data,githubInfo), function(err){
            if (err){
                throw err;
            };

            console.log("The Readme file is now ready!")
        });
    });
});

function init(){

}

init();