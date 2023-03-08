---
title: 'Loops'
date: 'Sep 13, 2022'
description: 'All the different loops in php'
coverimage: '/Images/Rectangle5.png'
---

## Topics:
- For loops
- Foreach loops
- While loops
- Data structures
* * *



## For Loops
```php
for ($i = 0; $i <= 12; $i++)
{
echo $i . '<br>';
}
```
The first part, $i = 0, represents the intialisation and can contain multiple variables.
The second part, $i <= 12, represents the condition, if it is true, the for loop will keep iterating.
The final part, $i++, represents the the final expresion and is calculated at the end of each iteration.
* * *



## Foreach loops
```php
// Create an associative array $sports by using the function array().
$sports = array('Monday' => 'Swimming', 'Tuesday' => 'Gymnastics', 'Wednesday' => 'Karate', 'Thursday' => 'Archery', 'Friday' => 'Basketball');



// Use foreach to loop through each value in the array $sports.
// Getting both the key and the value.
foreach($sports as $sportDay => $sportName)
{
echo 'On ' . $sportDay . ' we will do: ' . $sportName . '<br>';
}
```
* * *



## While Loops
```php
//while loop
while (condition)
{
code;
}



//DoWhile
do
{
code;
}
while (condition);
```
* * *



## Data structures
### Types needed:
- Indexed Array
- Associative Array
- Records



### Indexed Array
An indexed array is a variable that can contain multiple values. We call the things stored in an array 'elements', 'items', or 'values'.
```php
//an example of an array using the array function
$weekdays = array('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday');



//an example of a manually assigned array
$weekdays[0] = 'Monday';
$weekdays[1] = 'Tuesday';
$weekdays[2] = 'Wednesday';
$weekdays[3] = 'Thursday';
$weekdays[4] = 'Friday';
```
Lengths:
```php
$daysLength = count($weekdays);
```
Debugging:
Arrays can be dugged in two ways:
```php
// dumps the var type, and length, and value of each index.
echo var_dump($names);
// dumps the key value pair of each
echo print_r($names);
```



### Associative Arrays
```php
//using array function
$sports = array('Monday' => 'Swimming', 'Tuesday' => 'Gymnastics', 'Wednesday' => 'Karate', 'Thursday' => 'Archery', 'Friday' => 'Basketball');



//manual ssignment
$sports['Monday'] = 'Swimming';
$sports['Tuesday'] = 'Gymnastics';
$sports['Wednesday'] = 'Karate';
$sports['Thursday'] = 'Archery';
$sports['Friday'] = 'Basketball';
```