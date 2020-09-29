---
title: 'Advanced Custom Fields : Plugin'
author: Shubham Pandey
type: post
date: 2017-01-26
path: /advanced-custom-fields-plugin/
featured_image: /resources/uploads/2017/01/Screenshot-246.png
category: WordPress
tags:
  - Advanced Custom Fields
  - Plugin

---
Hi there, This post is about a plugin I&#8217;ve used for extending the functionalities of the <a href="http://wordpress.com" target="_blank">WordPress</a>. The Plugin name is <a href="https://www.advancedcustomfields.com/resources/what-is-acf/" target="_blank">Advanced Custom Fields</a>. This plugin provides many features to extend the power of WordPress. There is also an inbuilt functionality in WordPress for adding [custom fields][1] for any post but it offer a little power to customize the WordPress.

This Plugin can make content of a website fully dynamic. From Basic field types i.e. Text, Email, Number etc to a jQuery Color/Date Picker it can be useful for many things. There is a lot of Documentation available for the plugin in their Official Website.

It&#8217;s admin panel is same as a Post type with a heading Field Groups from where we can create groups of Fields and set up rules for the specific Field Group. You can add many field type eg. Basic, Content, Choice, Relational etc.

The most interesting field types I like is the category jQuery. You can add a Date Picker, Color Picker and a Google Map without any extra coding. In a project I have to add an icon and a color to the categories for the Blog Posts. There are many plugins out there who can add icon functionality to the Categories, but for adding colors for a category there is no plugin. So by the help of this plugin i have added a custom icon and custom color feature to the Categories Section.

Another Feature I like is Relationships. If you use this field you will have a nice post picker. You can set if you want to return the Post ID, Post Obj or for images it can be Post Link.

You can set rules for the location you want to add the Custom Field. In Image you can view the set of rules for a particular set of field types. We can set rules in Logical Way (Add/Or).

<figure id="attachment_292" class=" alignnone"><a href="/resources/uploads/2017/01/location.png" target="_blank"><img class="wp-image-292 size-full" src="/resources/uploads/2017/01/location.png?resize=640%2C201" alt="Location Feature in ACF" width="640" height="201"  /></a><figcaption class="wp-caption-text">Custom Post Options</figcaption></figure>

**Exporting:** This feature is the best feature i liked in this plugin. You can either export it in XML or in PHP. First I didn&#8217;t understand why Export to PHP option is there but when I used it I liked it.

Let say in a project for a client we are using lots of Advanced Custom Fields. And we don&#8217;t want that user may have the power to change or add the extra custom fields. In that case we can include Advanced Custom Fields to the theme itself and hide its UI from the Client. By this the Custom Fields UI will not appear in the Admin Panel, so that the clients can&#8217;t alter the Fields we have created for them. We just have to go to the Export to PHP option page and we will have all the instructions to how can we include Advanced Custom Fields and the Field Groups in theme itself.

I have used Advanced Custom Fields in this theme also. For adding Upcoming Articles and Related Posts with any post. You can Find them in the Sidebar.

 [1]: /using-custom-fields/