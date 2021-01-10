//  Creating a function that returns a license badge based on which license is passed in
// If there is no license, the function will an empty string
function renderLicenseBadge(license) {
  const licenseMarkdown = "![GitHub license]";
  switch (license) {
    case "MIT":
      return `${licenseMarkdown}(https://img.shields.io/badge/License-MIT-yellow.svg)]`;
    case "APACHE 2.0":
      return `${licenseMarkdown}(https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`;
    case "GPL 3.0":
      return `${licenseMarkdown}(https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
    case "BSD 3":
      return `${licenseMarkdown}(https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]`;
    case "NONE":
      return "";

  }

}

//  Creating a function that returns the license link
// If there is no license, the function will an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return `(https://opensource.org/licenses/MIT)`;
    case "APACHE 2.0":
      return `(https://opensource.org/licenses/Apache-2.0)`;
    case "GPL 3.0":
      return `(https://www.gnu.org/licenses/gpl-3.0)`;
    case "BSD 3":
      return `(https://opensource.org/licenses/BSD-3-Clause)`;
    case "NONE":
      return "";

  }
}

// Creating a function that returns the license section of README
// If there is no license, the function will an empty string
function renderLicenseSection(license) { }

//  Creating a function that will generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

## Description

${data.description}

## Table of Content

*[Installation](#installation)\n\n
*[Usage](#usage)\n\n
*[License](#license)\n\n
*[Contributing](#contributing)\n\n
*[Tests](#tests)\n\n
*[Questions](#questions)

## Instalation

To install dependencies, the run the following command:
...

${data.dependency}

...

## Usage

${data.usage}

## Lincense

This application has the license ${data.license}

## Contributing 

${data.contribution}

## Tests 

To run the following tests, run the following commads

...

${data.tests}

...

## Questions

If you have any questions about the repository, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.userName}](http://www.github.com/${data.userName}/).
`;
}

module.exports = generateMarkdown;
