---
title: 'Data Validation'
date: 'Jan 28, 2022'
description: 'Php data validation, sanitisation, verification and checking'
coverimage: '/Images/Rectangle5.png'
---

## Data Validation
### Existance checking:
Existance checking is the process of ensuring some data has been entered into a field and that it is not empty.
### Type checking:
Type checking is the process of ensuring that the data entered is of the correct type such as an integer for age or string for a name.
### Range checking:
A range check is a type of check that ensures that data is withing an acceptable limit or has an acceptable range of values. An example is age where a person cannot be -8 or 9999 years old.
### Format checking:
Checks that something is within a desired format such as dd/mm/yyyy or and email address.
### Reasonableness:
(e.g. over 50 hours of work in a week is both illegal and unreasonable)
### Consistancy checking:
(e.g. double enetering email or password for confirmation)
* * *
### Client side validation:
Client side validation is the process of ensuring that incorrect data cannot be entered by restricting options. (e.g. dropdown for state selection)
### Server side validation:
Server side validation is the process of of examining data before it is used and stored.
### Verification:
Checking that two of the same data is actually the same (e.g. double entry for passwords)
### Data Sanitisation:
```php
trim(); // Removes white spaces at end a begining
stripslashes(); // Removes backslashes
htmlspecialchars(); // Removes special HTML Characters
```
https://www.w3schools.com/php/func_string_htmlspecialchars.asp