---
title: Using Custom Fields
author: Shubham Pandey
type: post
date: 2017-01-18
path: /using-custom-fields/
featured_image: /resources/uploads/2017/01/custom-field.jpg
category: WordPress
tags:
  - Advance Custom Field
  - Custom Fields

---
WordPress is an amazing tool. It already provides a lot of tools for blogging. It is not only for blogging it can be anything that you want to mold it into, in any structure. And for extending its powers we have many plugins as well as the themes of our tastes and a developer’s back who is happy to help us in making our own custom themes and plugins. WordPress has a good and reliable documentation as well.

Within last month I came through lots of plugins for extending the functionalities of the website, i.e. Contact Form-7, CF7-DB, Advance Custom Fields etc. All of them are pretty damn good at the functionalities they provide. But the one I liked the most is the Advance Custom Fields. This Plugin is damn good at extending the WP functionalities. <a href="http://nishanthkd.com/" target="_blank">Nishanth &#8220;KD&#8221;</a> told me to experiment with that plugin for a project to make a website highly dynamic in nature. As the plugin name says a lot, this plugin can create custom fields in an advanced way.

First talking about an inbuilt functionality of the WordPress that is &#8220;Custom Fields&#8221; you can create extra custom fields for any post/page that will be stored in the database in that post meta. But it will not be shown in the frontend of the website. You have to make your theme to support it. So for adding it to the front end i&#8217;ve created a shortcode in the theme. There can be many other ways to use it, but I&#8217;ve used that way, if you have figured any other ways also please do share ;). My code below is how I did it.

<script src="https://gist.github.com/shubham9411/d2db11c680a64f04696cb4ecde28c2d6.js"></script>

This code will create a shortcode for custom fields. So that you can get the values for the particular field. Custom fields Metabox is hidden by default, you can toggle its visibility from the &#8220;Screen Options&#8221; in the top of &#8220;New Post&#8221; interface.

&nbsp;

<figure id="attachment_237" class=" alignnone"><img class="wp-image-237 size-full" src="/resources/uploads/2017/01/custom-field.jpg?resize=640%2C323" alt="Custom Fields" width="640" height="323"  /><figcaption class="wp-caption-text">How to use Custom Field</figcaption></figure>

&nbsp;

For using the New Field&#8217;s i have to add the shortcode `[<strong>new_field</strong> <em>name="my_gist"</em>]` as the name of the field you can see is &#8220;my_gist&#8221; (its case sensitive). But as you can think, we can add the value at the place of shortcode instead. That&#8217;s why I did not find it useful, it can be useful if you want to add any data and you don&#8217;t want it to be mixed with the content so that you can manage it in the custom fields like any iframe code or maybe the gist like I have added in this post. But yeah, this functionality is limited to simple content. But if you want to make your website more dynamic than you have to try &#8220;<a href="/advanced-custom-fields-plugin/" target="_blank">Advance Custom Fields</a>&#8221; Plugin.