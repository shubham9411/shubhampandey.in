---
title: 'My experience on submitting First theme- Kafal to WordPress.org'
author: Shubham Pandey
type: post
date: 2017-09-01
path: /experience-submitting-first-theme-kafal-wordpress-org/
featured_image: /resources/uploads/2017/09/autumn-2183489_1280.jpg
category: "Open Source"
tags:
  - Open-Source
  - wordpress
  - Theme Development

---
In February I wrote a blog on&nbsp;<span style="text-decoration: underline;"><a href="/open-source-and-wordpress-theme/">Open Source and WordPress theme</a></span>&nbsp;and decided that I will submit a theme to&nbsp;<span style="text-decoration: underline;"><a href="http://WordPress.org">WordPress.org</a></span>. And now I am back with another blog on my WordPress theme Kafal. It&#8217;s a pleasure to inform you all the readers that my theme passed the review process and accepted in the WordPress.org repository. Theme &#8216;<span style="text-decoration: underline;"><a href="http://wordpress.org/themes/kafal/">Kafal</a></span>&#8216; is now live and have been downloaded 1500+ times and currently active on 200+ blogs/websites.&nbsp;I am that much happy about it that every day at least 5 times I check the theme details in&nbsp;[WP.org][1].

It was all started in February when I don&#8217;t have much work besides my academics. At that time I was craving for the work. Then after a lot of research, I published the blog on&nbsp;[Open Source and making a theme][2]. At that time I was already a member of WordPress slack. I think&nbsp;<span style="text-decoration: underline;"><a href="https://make.wordpress.org/chat/">slack</a></span>&nbsp;is the best place to start your journey.&nbsp;In this blog, I&#8217;m going to share my experience, what I&#8217;ve learned&nbsp;during this period.

* * *

### Coding Improvements

I started my HTML career&nbsp;with&nbsp;`<!Doctype html>`,&nbsp;which means started with HTML5 but never understand what the<span style="text-decoration: underline;">&nbsp;<a href="https://stackoverflow.com/questions/134727/whats-the-key-difference-between-html-4-and-html-5#answer-577778">difference between the HTML 4 and HTML5</a></span>. In this theme, I&#8217;ve used new semantic&nbsp;elements from HTML5&nbsp;like&nbsp;`header`,&nbsp;`header`,&nbsp;`footer`,&nbsp;`article`,&nbsp;`main`,&nbsp;`aside`&nbsp;etc.

WordPress provides many&nbsp;<span style="text-decoration: underline;"><a href="https://codex.wordpress.org/WordPress_APIs">APIs</a></span>&nbsp;and I&#8217;ve used many of them. This time what was new for me is the&nbsp;<span style="text-decoration: underline;"><a href="https://codex.wordpress.org/Theme_Customization_API">Theme Customization API</a></span>. &nbsp;Added live preview option for custom options like &#8216;Header Color&#8217; and &#8216;Blog Title & Tagline&#8217; etc. That&#8217;s a cool API for designing good UX for theme users.

Previously while developing a theme I&#8217;ve never bothered on using escaping and sanitizing functions. If you check my first theme&nbsp;<span style="text-decoration: underline;"><a href="https://github.com/shubham9411/Makes-me-wonder">&#8216;Makes me Wonder&#8217;</a></span>&nbsp;that I&#8217;ve created in my second year, I&#8217;ve never used any escaping function. Or if I&#8217;ve used it then it must be a code that I&#8217;ve copied from&nbsp;<span style="text-decoration: underline;"><a href="http://stackoverflow.com">SO</a></span>&nbsp;or&nbsp;<span style="text-decoration: underline;"><a href="https://codex.wordpress.org">codex</a></span>. But now whenever a code that involves DB or User inputs, the first thing that comes to my mind is escaping and sanitization of the data. Writing a poor code with less security can lead to an XSS attack to the site.

I have learnt much more things about the coding style, that I can&#8217;t recall at this time but I will surely share them in future.

&nbsp;

### Theme Customization API and Bootswatch themes

Created theme repository named &#8216;<span style="text-decoration: underline;"><a href="https://github.com/shubham9411/solitude">Solitude</a></span>&#8216;&nbsp;and started working on it. I wanted it to be like the best of its type. And started designing the theme. I am a great fan of&nbsp;<span style="text-decoration: underline;"><a href="https://bootswatch.com/">Bootswatch</a></span>, as they provide cool themes for the Bootstrap. I wanted to create a theme that you can change the theme variant with these&nbsp;<span style="text-decoration: underline;"><a href="https://bootswatch.com/">Bootswatch</a></span>&nbsp;themes. So I downloaded different Bootswatch themes and integrated them into the theme with the&nbsp;<span style="text-decoration: underline;"><a href="https://codex.wordpress.org/Theme_Customization_API">Theme Customization API</a></span>. You can change your bootstrap theme with the different variant of Bootstrap. But due to lack of design skills and other works, I stopped working on the theme &#8216;Solitude&#8217;. This theme has more options but it lags in design and has a poor coding style. I will work in this theme maybe in future.

&nbsp;

### Using _s (underscores)

After&nbsp;&#8216;Solitude&#8217; it was a leap of 2 months when I started again working on the theme. This time with more enthusiasm, more energy. But when it comes to writing the same code again just for scaffolding it&#8217;s kind of a heavy task for me. So now this time what I did was, I forked &#8216;[_s<span style="text-decoration: underline;">(underscores)</span>][3]&#8216;&nbsp;the starter theme created by Automattic for hacking. Created my own branch and started hacking the theme.

By the way, I&#8217;ll not prefer using _s if you are just starting out in WordPress and don&#8217;t know the basics.

&nbsp;

### Using basic testing methods & build tools

I wrote a blog on&nbsp;<span style="text-decoration: underline;"><a href="//integrating-travis-ci-wordpress-theme/">Integrating Travis CI with WordPress Theme</a></span>. Using build tools and CI(continuous Integration) is must for the projects because a single human error can be a huge problem. So we teach machines to check our code and warn us about our mistakes. I&#8217;ve used Travis CI to test my theme, if it is passing the WordPress coding standards or not. There are also some plugins that can test your themes with the WordPress coding standards like &#8216;<span style="text-decoration: underline;"><a href="https://wordpress.org/plugins/theme-check/">Theme Check</a></span>&#8216;. &nbsp;These tools will help is making a good theme with Coding Standards.

&nbsp;

### Various Open Source Licenses

When I first submitted my theme on 19th June(<span style="text-decoration: underline;"><a href="https://themes.trac.wordpress.org/ticket/44006">Trac ticket</a></span>), the ticket closed 2 days after that on 21st June. That was a quick review by one of the&nbsp;<span style="text-decoration: underline;"><a href="https://make.wordpress.org/themes/handbook/about/members/">theme reviewer team</a></span>&nbsp;lead&nbsp;<span style="text-decoration: underline;"><a href="https://profiles.wordpress.org/poena">@poena</a></span>. The theme got rejected because of having more than 5 different errors. The first and most important error was declaring the license of the theme.

I was aware that for uploading to WordPress.org the theme should&nbsp;have an open source license GPLv3 or compatible. But I haven&#8217;t declared it. By saying theme I also mean the assets used in the theme like images, libraries etc. You can check the conversation over the&nbsp;<span style="text-decoration: underline;"><a href="https://themes.trac.wordpress.org/ticket/44006">ticket</a></span>&nbsp;and check all the links she provided about theme development.

For learning about the licenses&nbsp;<span style="text-decoration: underline;"><a href="https://choosealicense.com/">choosealicense.com</a></span>&nbsp;is a good source.


### Setting Realistic Deadlines

Without a deadline, a side project may become garbage because it will never be completed. What I learned is that setting a realistic deadline increases the productivity. Be it our assignments, project reports etc. Even we start studying just before the exams. Moving out from the comfort zone, doing the projects that you love & stop procrastination. I have also set a deadline for the theme and yes because of that I have a commit in git with &#8216;Hackathon&#8217; (check the dates) 😛

<figure id="attachment_743" class=" aligncenter"><img class="size-full wp-image-743" src="/resources/uploads/2017/09/Screenshot-from-2017-09-01-03-08-06.png?resize=328%2C158" alt="Hackathon for Kafal" width="328" height="158"  /><figcaption class="wp-caption-text">Profile Shubham Pandey WordPress</figcaption></figure>

&nbsp;

Have any views about this, please let me know in the comment section.

Thanks!

 [1]: http://wordpress.org
 [2]: /open-source-and-wordpress-theme/
 [3]: https://github.com/automattic/_s
 [4]: /resources/uploads/2017/09/Screenshot-from-2017-09-01-03-08-06.png
 [5]: /resources/uploads/2017/09/Screenshot-from-2017-09-01-03-24-12.png
 [6]: https://www.goodreads.com/author/show/81466.A_A_Milne
 [7]: https://www.goodreads.com/work/quotes/1225592
 [8]: /resources/uploads/2017/09/Screenshot-from-2017-09-01-03-37-58.png