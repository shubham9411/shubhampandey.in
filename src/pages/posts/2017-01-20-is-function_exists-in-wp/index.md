---
title: Is function_exists in WP
author: Shubham Pandey
type: post
date: 2017-01-20
path: /is-function_exists-in-wp/
featured_image: /resources/uploads/2017/01/fatal-errorw.png
category: WordPress
tags:
  - PHP

---
In my Summer Internship with <a href="http://coloredcow.in" target="_blank">ColoredCow </a>I started my journey with WordPress. From my <a href="https://github.com/shubham9411/Makes-me-wonder" target="_blank">first theme</a>(my first ever WP theme for submission as a task for ColoredCow Interview) to a client based theme I&#8217;ve learned a lot and still exploring the WordPress as well.

In our first(or may be 2nd) <a href="https://everydayteachesalesson.wordpress.com/2016/06/18/first-code-review/" target="_blank">code review</a> &#8220;<a href="http://nishanthkd.com" target="_blank">KD</a>&#8221; added a comment to add &#8220;function\_exist()&#8221; check before adding any of the function. I was like okay yeah we have to add a function\_exist check before any of the function because if may be there is any function exist before this theme or plugin in the core or maybe it is derived in any of the plugin. If it exists in any other plugin or in core we may be come across a &#8220;Fatal Error&#8221; more specific &#8220;previously declared function in bla-bla file&#8221;.

But as all are known of the fact that their may occur any function before so we just add a not so common prefix before every function in that way the function normally not exist. This make me think about the other scenarios where we can use the function_exists for extending the WordPress functionalities . So i figured out many ways where we can add this function check to make our WP theme robust.

Below are the most Common Scenarios, why we have to add Function Check before writing a function:

**Plugin dependent:** If the theme you are working on, is dependent on any plugin and the plugin is accidentally Deactivated by the client then there will be an error in Front end of the site. If we did not use any function_exist check, before the plugin specific functions, than there may also occur a &#8220;Fatal Error&#8221; of &#8220;function not exists&#8221;. So if we add up a check before going to use plugin specific function we will safe if the plugin gets deactivated.

**Child Theme Supported:** I also found that for making our theme &#8220;Child Theme&#8221; Supported we have to add the function_exist check. It enables the Themes Developers to create their child theme so that they can change any specific functionality. This works because the child theme files are loaded first than the Parent theme.

Example: Let say we have to add Child theme for a specific Website just because it has different Styling with same functionalities. So, If in our Parent theme the styling functions are pluggable(checking for their previous existence) then we can add the same function in our Child Themes functions.php file to enqueue our specific styling.

For Example of Child Themes you can check standard WordPress theme for Mozilla network blogs. They uses a Common Theme **&#8220;One Mozilla&#8221;. **The difference is just the Color Scheme.

  * <a href="https://github.com/mozilla/One-Mozilla-blog" target="_blank">One Mozilla</a>
  * <a href="https://blog.mozilla.org/press/" target="_blank">Mozilla Press Center</a>
  * <a href="https://blog.mozilla.org/theden/" target="_blank">The Den &#8211; Mozilla</a>
  * <a href="https://blog.mozilla.org/webdev/" target="_blank">WebDev Mozilla</a>
  * <a href="http://air.mozilla.org/" target="_blank">Air Mozilla</a>

For making our theme Robust we have to add the function_exists check for checking if the function exists before to get rid of the &#8220;Fatal Errors&#8221;.