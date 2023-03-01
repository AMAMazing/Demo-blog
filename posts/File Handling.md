---
title: 'File handling'
date: 'Mar 1, 2023'
description: 'How to do file handling in php'
coverimage: '/Images/Rectangle4.png'
---

https://www.w3schools.com/php/php_file.asp

``` php
$fileName = 'file.txt'; //self explanatory
$fileHandle = fopen($fileName, 'a'); //is sort of like a pointer to a file
fwrite($fileHandle, 'text'); //self explanatory
fread($myfile,filesize($filename)); //Gets whole file
fgets($fileHandle); //reads one line at a time from a file
fclose($fileHandle); //self explanatory
//Other Sutff
feof($fileHandle); //checks if the program has reacherd the end of the file
fgetc($fileHandle); //gets a single character from a file
fgetcsv($fileHandle); //file, length, separator, enclosure https://www.w3schools.com/php/func_filesystem_fgetcsv.asp
file($fileHandle); //otuputs each line to an array
//Line by line feof
while(! feof($fileHandle)) {
  $line = fgets($fileHandle);
  echo $line. "<br>";
}
```

|Mode|Description| 
|-|-| 
|r|Read only. Starts at begining of file.|
|r+|Read/Write. Starts at begining of file.|
|w|Write only. Opens and clears the contetns of file or creates a new file if non-existant.|
|w+|Read/Write. Opens and clears content or creates new file if non-existant.|
|a|Appened. Opens and writes to the end of the file or creates a new file by writing it to the end of the file.| 
|a+|Read/Append. Preserves file by writing to the end of the file.|
|x|Write only. Creates new file. Returns FALSE and error if existant.|
|x+|Read/Write. Creates new file. Returns FALSE and error if existant.|
