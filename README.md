# Week 1 Single Page Website Project
Follow link to the website >> https://facn4.github.io/BSN_week1-group-project/

## Why

The site is to be a portfolio of services provided by our team for clients interested in hiring a team of developers. It will be accessible on all devices and user friendly to all, including the visual impaired and blind and those without javascript in their browser.

## What

- Nav Bar

- About
  - Team Name
  - Main body of text introducing the team
  - Team photo on the side of the screen (Other options to be considered). < options to make it interactive
- Team
  - Three sections (Ben, Bubbles, Sol) each with a photo and paragraph about them.
- Contact
  - Name - Only letters. Can't be left blank
  - email - email verification. Can't be left blank
  - mobile - numbers only (and + sign). Length between 7 to 15. Can be left blank (optional)
  - message - 1-500 characters. If less than 20 characters it prompts 'Is your message finished > yes/no'
- Footer

  - Designed by G-Force

## How
The site was made with just HTML and CSS. HTML5 enables a fairly interactive form without any javascript.

There are two send options.
1. This is the primary send button which uses an external website called formspree.io.
2. This option is a backup and uses the 'mailto:myemailaddress' function.
  - _Name - Only letters. Can't be left blank_ This was achieved in HTML by giving the pattern attribute a RegEx which only accepted letters.
  - _email - email verification. Can't be left blank_ This was achieved using HTML by stating the input type as 'email'.
  - _mobile - numbers only (and + sign). Length between 7 to 15. Can be left blank (optional)_ This was achieved in HTML by giving the pattern attribute a RegEx which only accepted numbers.
  - _message - 1-500 characters. If less than 20 characters it prompts 'Is your message finished > yes/no'_ This was not achieved.
