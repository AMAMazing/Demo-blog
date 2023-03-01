---
title: 'Conventions'
date: 'Jan 23, 2023'
description: 'Php conventions, comments, file handling'
coverimage: '/Images/Rectangle4.png'
---

## Content:
- Conventions and Comments
- File handling
* * *
## Conventions and Comments:
PHPDoc Comment is at the top of the document:
```php
/**
 * State purpose of file
 * 
 * Description
 * 
 * @author Name <email>
 * @copyright copyright year
 * 
*/
```
Function comment at the top of each function:
```php
/**
 * State function purpose
 * 
 * Description
 * 
 * @param type $var
 * 
 * @return type $var description
 */
```
Variable comments:
```php
/** @var type description */
```
When naming classes user PascalCase, otherwise known as UpperCamelCase.
camelCase is used on variables and functions.
Declare variable scope for the narrowest possible scope.
* * *
## File handling:
```php
fopen(); //opens a file
fwrite(); //writes to a file
fclose(); //closes a file

//example
$content = 'Once upon a time, in a land not too far from here...';
$fileName = 'story.txt';
$fileHandle = fopen($fileName, 'a');
fwrite($fileHandle, $content);
fclose($fileHandle);
```
### Modes
|Mode|Description|
|---|---|
|r|Read only. Starts at begining of file.|
|r+|Read/Write. Starts at begining of file.|
|w|Write only. Opens and clears the contetns of file or creates a new file if non-existant.|
|w+|Read/Write. Opens and clears content or creates new file if non-existant.|
|a|Appened. Opens and writes to the end of the file or creates a new file by writing it to the end of the file.|
|a+|Read/Append. Preserves file by writing to the end of the file.|
|x|Write only. Creates new file. Returns FALSE and error if existant.|
|x+|Read/Write. Creates new file. Returns FALSE and error if existant.|

### Alternatives:
``` php
$content = 'Once upon a time, in a land not too far from here';
$fileName = 'story.txt';
file_put_contents($fileName, $content);
// If you provide a third parameter FILE_APPEND, to file_put_contents(), then it is equivalent to using fwrite() in append mode.

$fileName = 'story.txt';
$fileContents = file_get_contents($fileName);
echo '<br>';
echo $fileContents;
//You can also provide parameters for where to start reading from, and what length of data to rea

$fileName = 'story.txt';
$fileContents = file($fileName);
// FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES are params

explode(); //converts string to array, first param is delinator

fgets(); //gets one line of a file
fgetc(); //gets one chaaracter of a file

opendir(); //opens a directory
readdir(); //returns name of next item in directory
pathinfo(); //returns ifo about a path
```

