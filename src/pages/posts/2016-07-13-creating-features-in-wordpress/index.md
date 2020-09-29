---
title: Creating Features in WordPress
author: Shubham Pandey
type: post
date: 2016-07-13
path: /creating-features-in-wordpress/
featured_image: /resources/uploads/2016/07/Google-SSO.png
category: WordPress
tags:
  - Basics
  - Software Development

---
[WordPress][1] powers more than 24% of the web  a figure that rises every day. Everything from simple websites, to blogs, to complex portals and enterprise websites, and even applications, are built with WordPress. WordPress is an easy to use framework have simplicity for the users.

I am still exploring the features that WordPress can do. In WordPress there is a feature to add plugins that can increase the features of the WordPress.
  
In my project at [ColoredCow][2] I was asked to create some functionality that can Authenticate users via [Google][3] so that we can get access to the Admin Panel by our google ids of that company. Are you thinking that why a firm/company needs the google login system and not using the WordPress&#8217;s inbuilt login system.<span style="font-weight: 400;"> </span>

<span style="font-weight: 400;">What if we use a SSO(Single Sign on) system for the users. It is convenient to the users and employees to log in to the website admin panel.  The idea behind this is to create an automation system for creating new users. A new Employee joined the Company he have the Google Id of that firm so he can get access to the Admin Panel. And there is no need create a new user manually. Like in WordPress Login System we have to go to the users and add a new user. Unlike in our system if you have Companies google id you can access the admin panel.  </span>

<span style="line-height: 1.7;">In the above discussion a new plugin comes up that is Role Defining plugin. If a new user is login and can access the Admin Panel what features he can access and what type of role is given to him. As the inbuilt roles in </span>WordPress <span style="line-height: 1.7;">are not good enough for a company so we have to create a new plugin for just to define the roles.In these Plugins the main thing is that to provide the </span><span style="line-height: 1.7;">convenience</span><span style="line-height: 1.7;"> to the user. So that they can get access to Admin Panel via their google IDs.</span>

<figure id="attachment_391" class=" aligncenter"><img class="size-full wp-image-391" src="/resources/uploads/2016/07/Google-SSO.png?resize=451%2C647" alt="Work On The Authentication Plugin" width="451" height="647"  /><figcaption class="wp-caption-text">Work On The Authentication Plugin</figcaption></figure>

Above is a screenshot of my work on the Authentication Plugin. By this we can Sign in with Google.

 [1]: http://wordpress.com
 [2]: http://coloredcow.in
 [3]: http://google.com
 [4]: /resources/uploads/2016/07/Google-SSO.png