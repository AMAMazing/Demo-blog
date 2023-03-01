---
title: 'Object Oriented Programming'
date: 'Aug 10, 2020'
description: 'Guide through Object Oriented Programming (OOP) in PHP with examples on classes, objects and more'
coverimage: '/Images/Rectangle4.png'
---

## Object Oriented Programming:
### Classes:
A class is a general blueprint where in which an object can be created. Imagine the class 'bicycle', this is the general concept of a bicycle, which has the attributes of speed and gears. This does not represnt any individual bicycle, but represents the convepts of bicycles.
[Classes](https://docs.oracle.com/javase/tutorial/java/concepts/class.html)
```php
class Fruit {
// Properties
public $name;
public $color;



// Methods
function set_name($name) {
$this->name = $name;
}
function get_name() {
return $this->name;
}
}
```



### Objects:
Objects are extentions of classes which have indivividual states (fields) and behaviour (methods).
An objects states has to be accessed through its methods such as with a bicycle, the gear can be changed through the method 'change gear'. This is called encapsulation.
```php
$apple = new Fruit();
$banana = new Fruit();
$apple->set_name('Apple');
$banana->set_name('Banana');



echo $apple->get_name();
echo "<br>";
echo $banana->get_name();
```
### Inheritience:
Inheritence is taking a class and creating an object.
* * *
Constructor:
The constructor is called upon the creation of an object and allows code to be run on creation.
```php
function __construct($name)
{
$this->name = $name;
}
```
Destructor:
The destructor is called upon the end of the script.
```php
function __destruct()
{
echo "The fruit is {$this->name}.";
}
```
Access Modifiers:
```php
public //Can be accessesed from anywhere
protected //Can be accessed within class and classes derived from thqat class
private //Can only be accessed within the class



class Fruit
{
public $name;
protected $color;
private $weight;
}
$mango = new Fruit();
$mango->name = 'Mango'; // OK
$mango->color = 'Yellow'; // ERROR
$mango->weight = '300'; // ERROR
```