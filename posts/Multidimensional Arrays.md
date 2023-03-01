---
title: 'Multidimensional Arrays'
date: 'Feb 9, 2023'
description: 'Tutorial on how to use multidimensional arrays in php'
coverimage: '/Images/Rectangle5.png'
---

## Multidimesional Array
``` php
$contacts = array
(
array('Sasha','Smith','sasha.s@email.com'),
array('Kim','Kumar','kim.k@email.com'),
array('Luka','Lee','luka.l@email.com'),
array('Ren','Ramos','ren.r@email.com')
);
//echoes Kim's email as its index 1, field 2
echo $contacts[1][2];
```

Looping over each value in an Multidimestional Array:
``` php
for ($row = 0; $row < 4; $row++)
{
echo '<p>Row ' . $row . '<br>';

for ($col = 0; $col < 3; $col++)
{
echo $contacts[$row][$col];
echo '<br>';
}
echo '</p>';
}
```