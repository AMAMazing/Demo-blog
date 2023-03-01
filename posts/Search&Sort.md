---
title: 'Searching algorithms'
date: 'Feb 27, 2023'
description: 'Searching algorithms and big O notation in PHP'
coverimage: '/Images/Rectangle5.png'
---

## Search & Sort
### Linear search:
Linear search is as the name implies, linear, scaling up in a liner form with every item in the array.
Pseudocode:
``` ps
FOR (start TO end OF array)
IF (current_element IS EQUAL TO x)
PRINT(current_index);
END IF
END FOR
```
PHP:
```php
//using for
for ($i = 0; $i < count($array); $i++)
{​​
if ($array[$i] == $x)
{​​
echo $i;
}​​
}​​//using foreach
foreach ($array as $index => $value)
{​​
if ($value == $x)
{​​
echo($index);
}​​
}​​
```
Has the Big O notation on N.
[Further reading:](https://www.tutorialspoint.com/data_structures_algorithms/linear_search_algorithm.htm)
### Binary search:
Binary searh works by dividing the total set of what it needs to seach through and relies on the data to already be sorted.
Structured English:
``` ps
FUNCTION binarySearch(array, lower_bound, upper_bound, x)
BEGIN
WHILE the lower bound is less than or equal to the upper bound
SET the median to halfway between lower and upper
// (lower + upper) / 2IF the value stored at the median position is less than x
change the lower bound to one greater than the median
// only search the values above the median
ELSEIF the value stored at the median position is greater than x
change the upper bound to one less than the median
// only search the values below the median
ELSE
RETURN median
// return the median value if it is the same as x
// (not greater or less than x)
END IF
END WHILERETURN FALSE // if x is not found, return FALSE
END FUNCTION
```
Pseudocode:
```ps
FUNCTION binarySearch(array, lower, upper, x)
BEGIN
WHILE (lower <= upper)
median = ((lower + upper) / 2)IF (array[median] < x)
lower = median + 1
ELSEIF (array[median] > x)
upper = median - 1
ELSE
RETURN median;
END IF
END WHILERETURN FALSE // x not found
END FUNCTION
```
PHP:
```php
function binarySearch($array, $lower, $upper, $x)
{​​
while ($lower <= $upper)
{​​
$median = ($lower + $upper) / 2;
$median = (int) $median;if ($array[$median] < $x)
{​​
$lower = $median + 1;
}​​
elseif ($array[$median] > $x)
{​​
$upper = $median - 1;
}​​
else
{​​
return $median;
}​​
}​​
return FALSE; // x not found
}​​$sortedArray = array(11, 12, 22, 25, 64);
$x = 12;
$index = binarySearch($sortedArray, 0, $length, $x);echo 'Using a binary search, the index for ' . $x . ' is ' . $index . '<br>';
```
Has the Big O notation of log<sub>2</sub>(N)
[Further reading](https://www.tutorialspoint.com/data_structures_algorithms/binary_search_algorithm.htm)### Selection sort:
Structured English:
```ps
PROCEDURE selection_sort (array)
BEGIN
// reduces the effective size of the array by one in each iteration
FOR (each value in the array)
// assuming the current element is the minimum of the unsorted array
minimum = current_positionFOR (each value in the unsorted part of the array)
IF (this element is smaller than the current element)
// set the minimum to the position of this element instead
minimum = this_position
END IF
END FOR// put the minimum element in the current position
// and move the current element to the position
// that the minimum element was in
swap (minimum, current_position)
END FOR
END PROCEDURE
```
Psuedocode:
```ps
PROCEDURE selection sort
array // array of items
length // size of listFOR (i = 0 TO (length - 1))
// set current element as minimum
minimum = i// check if any other elements are less than the current minimum
FOR (j = (i + 1) TO (length - 1))
IF array[j] < array[minimum] THEN
minimum = j
END IF
END FOR// swap the minimum element with the current element
IF minimum != i THEN
swap list[minimum] and list[i]
END IF
END FOR
END PROCEDURE
```
PHP:
```php
function selection_sort($array, $length)
{​​
for ($i = 0; $i < $length; $i++)
{​​
$minimum = $i;for($j = ($i + 1); $j < $length ; $j++)
{​​
if ($array[$j] < $array[$minimum])
{​​
$minimum = $j;
}​​
}​​// swap the minimum value to current position - which has index $i
if ($array[$i] > $array[$minimum])
{​​
$minimumValue = $array[$i];
$array[$i] = $array[$minimum];
$array[$minimum] = $minimumValue;
}​​
}​​return $array;
}​​$array = array(64, 25, 12, 22, 11);
$length = count($array);
$sortedArray = selection_sort($array, $length);
var_dump($sortedArray);
echo '<br>';
```
https://youtu.be/xWBP4lzkoyM
[Further reading](https://www.tutorialspoint.com/data_structures_algorithms/selection_sort_algorithm.htm)

### Quicksort:
PHP:
```php
// Traditional version
function partition(&$array, $low, $high)
{​​
// select the last element as pivot
$pivot = $array[$high];
$i = ($low - 1);for ($j = $low; $j <= ($high - 1); $j++)
{​​
// if the current element is smaller than or equal to pivot
if ($array[$j] <= $pivot)
{​​
// increment index of lower element
$i++;// swap values
[$array[$j], $array[$i]] = [$array[$i], $array[$j]];
}​​
}​​// swap values
[$array[$i + 1], $array[$high]] = [$array[$high], $array[$i + 1]];// return pivot
return $i + 1;
}​​function quicksort(&$array, $first, $size)
{​​
$last = $size - 1;if ($first < $last)
{​​
$partitionIndex = partition($array, $first, $last);// run on the left side (from first to partitionIndex)
quicksort($array, $first, $partitionIndex);// run on the right side (from element after partitionIndex to last)
quicksort($array, $partitionIndex + 1, $last + 1);
}​​
}​​for ($i = 0; $i < 250000; $i++)
{​​
$array[$i] = mt_rand();
}​​$array = [480, 453, 221, 964, 885, 2, 645, 46, 975, 374, 702, 153, 677, 357, 332, 138, 535, 216, 285, 246, 287, 517, 971, 819, 364, 124, 177, 333, 539];$size = count($array);
var_dump($array);quickSort($array, 0, $size);
var_dump($array);// Simple Version
function partition(&$array, $low, $high)
{​​
// select the last element as pivot
$pivot = $array[$high];
$j = $low;for ($i = $low; $i <= ($high); $i++)
{​​
if ($array[$i] <= $pivot)
{​​
[$array[$j], $array[$i]] = [$array[$i], $array[$j]];
$j++;
}​​
}​​$j--;
return $j;
}​​function quicksort(&$array, $first, $size)
{​​
$last = $size - 1;if ($first < $last)
{​​
$partitionIndex = partition($array, $first, $last);// run on the left side (from first to partitionIndex)
quicksort($array, $first, $partitionIndex);// run on the right side (from element after partitionIndex to last)
quicksort($array, ($partitionIndex + 1), ($last + 1));
}​​
}​​$array = [480, 453, 221, 964, 885, 2, 645, 46, 975, 374, 702, 153, 677, 357, 332, 138, 535, 216, 285, 246, 287, 517, 971, 819, 364, 124, 177, 333, 539];$size = count($array);
var_dump($array);quickSort($array, 0, $size);
var_dump($array);
```


```
https://youtu.be/XE4VP_8Y0BU
[Further reading](https://www.tutorialspoint.com/data_structures_algorithms/quick_sort_algorithm.htm)
### Sort & Search timing
|Name|Average Case|Worst Case|
|---|---|---|
|Selecetion sort|O(n<sup>2</sup>)|O(n<sup>2</sup>)|
|Quick sort|O(n\*log<sub>2</sub>n)|O(n<sup>2</sup>)|
|Linear Seach|O(n/2)|O(n/2)|
|Binary Search|O(log<sub>2</sub>n|O(log<sub>2</sub>n)|
```
