---
title: 'HTTP Methods/Forms'
date: 'Feb 9, 2023'
description: 'HTTP methods/forms in php like GET and Post'
coverimage: '/Images/Rectangle4.png'
---

## Topics:
- Forms
* * *
## Forms
``` php
<form action="process-form.php" method="post">
<p>
<label for="inputName">Name:<sup>*</sup></label>
<input type="text" name="name" id="inputName">
</p>
<p>
<label for="inputEmail">Email:<sup>*</sup></label>
<input type="text" name="email" id="inputEmail">
</p>
<p>
<label for="inputSubject">Subject:</label>
<input type="text" name="subject" id="inputSubject">
</p>
<p>
<label for="inputComment">Message:<sup>*</sup></label>
<textarea name="message" id="inputComment" rows="5" cols="30"></textarea>
</p>
<input type="submit" value="Submit">
<input type="reset" value="Reset">
</form>
```
HTML forms can have the following elements:
``` html
<input> /* self explanatory */
<select> /* A drop down list */
<fieldset> /* Used to group data */
<textarea> /* A multi-line text input */
<option> /* defines an option is a select list */
<label> /* provides a label to assit users */
<button> /* A button */
<optgroup> /* groups options in a <select> */
<output> /* Preforms a calcution (I have no clue how buit okay) */)
```
Others [here](https://www.w3schools.com/html/html_form_input_types.asp).
Santising inputs:
``` php
$data = $_POST['data'];
$data = trim($data);
$data = stripslashes($data);
$data = htmlspecialchars($data);
```
Type casting:
``` html
// HTML
<input type="number" name="age">
<input type="text" name="lastName">
```
``` php
// PHP
(int)$age
```



Php Server:
``` php
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{ }
$_POST[' '];
```