# SwellCX QA Engineer Skills Test
Hello, congrats on being identified as a potential employee of Swell. You were sent this skills assessment as a way to identify your current strengths and weaknesses as a potential hire for Swell as a QA Engineer. Doing well on this assessment is absolutely critical to receiving a job offer.

## Required Skills
- Git version control system
- Manual QA Testing
- Some node.js skills
- Automated acceptance testing (i.e. cypress.js, puppeteer, playwright, selenium, etc.)

## Rules
1. It should only take about 1-2 hours to complete the assessment. If you need more time, that is allowed, however the amount of time from your first commit to last will be used to assess you as a candidate for the position. Only start the assessment when you are ready to give it your full attention.
2. You may use any code or text editor to complete the assessment you choose. We recommend [Visual Studio Code](https://code.visualstudio.com/) as a free choice.
3. You may use any programming language, library or framework to complete the assessment.
4. You may consult anybody and anything to help you with your assessment, including google, developer documentation, stackoverflow, etc. However, it will be apparent if you use copy-pasta code, and your unique code style will be part of your assessment.
5. If you use others' code (i.e. Stack overflow answers), make sure you credit the author/answer in comments inline with your work

## Assessment Scenario
Congrats, it's your first day at Swell. You get your badge, find a desk, and are ready to get started. Your manager comes up, introduces themself, and assigns you your first task. He tells you that, recently a junior developer started at the company. The manager asked the junior developer to build a simple authentication service for a new project. A week after starting, the junior developer told your boss that the project was complete and then left for vacation. Your boss says that he thinks the junior developer may not be very good, and that he's pretty sure the authentication service does not match the specifications he gave the developer, but he doesn't have time to do a full QA sweep or add any test cases.

He wants you to do two things:
1. Review the design files and product specifications in the `design/` folder, then do a manual QA sweep of the application. Ensure that the application passes the design spec. Any design inconsistencies and bugs should be listed in the `BUGS.md` file. Feel free to put any screenshots in a `screenshots` directory and reference them.
2. Create automated acceptance tests using any technology you like and put the code for those acceptance tests in the `tests/` directory. If there are design inconsistencies or bugs in the application, THE TESTS SHOULD FAIL. You can use any programming language or library/framework. A few technologies the organization has used before are cypress.js, puppeteer, playwright and selenium. Ensure the tests will run when the command `npm test` is run.

## Instructions
1. Fork this repository to your personal github page. You will need to create a github account if you don't have one by [visiting this link](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home).
2. Clone the repository to your machine.
3. If you do not have node.js installed on your computer, you will need to install it. You can use the [official binary](https://nodejs.org/en/) or a tool like [node version manager](https://github.com/nvm-sh/nvm).
4. Navigate to your projects directory on your machine and run the command `npm start`.
5. You should be able to visit the webserver built by the junior developer by typing into your browser `http://localhost:9876`.
6. Update the `BUGS.md` file with any bugs you find in a numbered list format. You can add screenshots by creating a `screenshots/` directory and adding files to it.
7. Start writing some tests by creating a `tests/` directory and using whatever language and testing framework. Be sure to add instructions on installing dependencies (for example, installing JDK or other programming languages or installing dependencies).
8. Respond back to the hiring manager who contacted you and asked you to complete the assessment with the link to the repository.

## Test Setup Instructions
Add any instructions here for running automated tests after creating it.
