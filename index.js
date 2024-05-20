#!/usr/bin/env node

import inquirer from 'inquirer';

const questions = [
    {
        type: 'input',
        name: 'firstname',
        message: 'What is your first name?',
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'What is your last name?',
    },
    {
        type: 'input',
        name: 'country',
        message: 'What is your country name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email name?',
    },
];

inquirer.prompt(questions).then(answers => {
    console.log('First Name:', answers.firstname);
    console.log('Last Name:', answers.lastname);
    console.log('Country:', answers.country);
    console.log('Email:', answers.email);
});
