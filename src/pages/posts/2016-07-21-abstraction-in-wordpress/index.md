---
title: Abstraction in WordPress
author: Shubham Pandey
type: post
date: 2016-07-20
path: /abstraction-in-wordpress/
category: WordPress
tags:
  - Basics
  - Software Development

---
I listened about the [ADTs][1] in my college last semester in subject JAVA. What I know about it is like _&#8220;An abstract data type is a collection of data and operations that work on that data.&#8221;_ just this Definition. I don&#8217;t think any of the student thought about this topic and researched about it. Because it is not a major topic for exams. I also do not know what it is, while reading the _&#8220;[Code Complete 2][2]&#8221; _in the chapter 6 it is all about the ADTs. It is about how programmers create classes with loosely related functions in it, loosely connected data. This type of classes are just easy to create but hard to keep up in future.

In the book there is an example of changing a particular font size from point to pixel and changing it to bold  by creating a particular ADT for that having all the class that can manipulate all the data and can interact like the real world. As I am working on the WordPress so in my example there is a [WordPress][3] feature  that have the manipulating function so I can relate with them.

Last time when I am working on the custom posts type creation for a particular post type I came across with the _&#8220;[loop][4]&#8220;_ of WordPress that have many functions you can use. You just have to think what you want in the code if you need the Title of the post here is the function &#8220;[get\_the\_title][5]()&#8221;, If you want permalink to add with the an anchor tag just type &#8220;[get_permalink][6]()&#8221;.

The loop is an ADT but if the classes have functions like this then I am sure everyone love to use that module and love to work with and what I read about the Abstraction data types is the same about the abstraction that I am not taking the links or title from the database directly I&#8217;m just going through a function and retrieving the data.

If we look at the function get_title() what it explains that it will return the title of the current post and yeah it does it. In WordPress if you are a newbie like me and you are thinking that how you gonna remember the names of the classes/functions so I bet you it is easier to remember the name of functions.

 [1]: https://en.wikipedia.org/wiki/Abstract_data_type
 [2]: http://www.amazon.in/Complete-Microsoft-Press-Steve-Mcconnell/dp/9350041243
 [3]: http://wordpress.com
 [4]: https://codex.wordpress.org/The_Loop
 [5]: https://developer.wordpress.org/reference/functions/get_the_title/
 [6]: https://developer.wordpress.org/reference/functions/get_permalink/