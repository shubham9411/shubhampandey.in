---
title: Why SSL Certificate is Important for your Website
author: Shubham Pandey
type: post
date: 2017-03-21
path: /ssl-certificate-importance/
dsq_thread_id:
  - 5971678434
category: "Cyber Security"
tags:
  - HTTPS over HTTP
  - Internet
  - Privacy
  - SEO Ranking
  - SSL
  - SSL Certificates

---
In today&#8217;s world everyone uses Internet. Everyone wants to be Secure. But only a few understand the importance of having a Secure version of your website. Adding SSL encryption is one of the ways to protect your website from serious Threats.  So the question is &#8220;What is SSL? Why do you need [SSL][1]? What are the benefits of having an SSL certificate?&#8221; I am going to explain why you need an SSL certificate and its advantages. So first of all:

### <span style="text-decoration: underline;">What is SSL?</span>

Secure Socket Layer is a security technology used for making the Internet a safer place by providing an end to end encryption to your website. So that the data passed through the network will remain Private.

SSL secures our websites but it&#8217;s not [SSL][1] actually :p  SSL is an obsolete technology and has some vulnerability that can be exploited by several tools. When SSLv2 was released it had some potential threats that made it useless and hack-able. For more on this you can see this [answer on Stack Overflow][2] and [Drown Attack][3].

After having known such [vulnerabilities][2] the web moved with new technology TLS (Transport Layer Security) but we still refer [TLS][4] as SSL or [SSL/TLS][4]. So we will also refer TLS as SSL and TLS certificates as SSL certificates in this article.

### <span style="text-decoration: underline;">Importance of a SSL Certificate</span>

#### 1. Security :

<p style="padding-left: 30px;">
  The main purpose of <a href="https://www.digicert.com/ssl.htm">SSL </a>is to encrypt information so that only browser and the hosting server would know what information is being transferred. Basically any information submitted over internet are transferred through several computers before reaching the destination. A simple <a href="https://en.wikipedia.org/wiki/Man-in-the-middle_attack">Man-In-the-Middle attack</a> can fetch all the information transferred, be it Basic Bio info or Credit Card Info. Default http transfers the data in a plain text format so that anyone in the coffee shop using the same ISP can have all your info.
</p>

<p style="padding-left: 30px;">
  SSL encrypts all the data in the Transport layer before sending to the Network. So if someone is sniffing your information in between he will rather get a useless encrypted data. 😛
</p>

<p style="padding-left: 30px;">
  Example: A simple string encrypted in <a href="http://www.sha1-online.com/">SHA-512</a> &#8211;
</p>

<p style="border: 1px solid #dddddd; padding: 10px; border-radius: 5px; margin: 10px;">
  Original : Shubham Pandey WordPress Developer<br /> SHA512: <code>f6c0302f9a3f440abae2a96909e56c9cd565d24d915b6d78b1fc21ffbca9e365fbed707a953c81614394055c261da552be869bd22f12f7864081eb063f121f8e</code>
</p>

#### 2. Trust :

<p style="padding-left: 30px;">
  Most of the People who use internet each day and visit E-Commerce websites, know that a green padlock in the Address bar is Good. They don&#8217;t know what is the reason for having a padlock and <code>https</code> in the address bar, but they know that It&#8217;s safe to surf your website.
</p>

<p style="padding-left: 30px;">
  A website with a green-ish lock icon in the address bar is the sign of trust so that the user is more likely to buy something or register with your website. Trust is directly linked with the revenues a website makes, so that it can bring more users to your website. More users: more revenue.
</p>

#### 3. SEO Rankings :

<p style="padding-left: 30px;">
  Yes you read it right <a href="https://en.wikipedia.org/wiki/Search_engine_optimization">SEO </a>rankings. I do not know if you know this or not But google says this in its official Blog, <a href="https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html">HTTPS as a ranking signal</a>. They say &#8220;Security is a top priority for Google&#8221;. So for sure it boosts up your SEO ranking. But do redirect your non-secure Website to secure one otherwise your ranking will fall (because of the same content on 2 different protocols).
</p>

### <span style="text-decoration: underline;">Disadvantages of having an SSL Certificate</span>

With all these advantages does it have any disadvantages? Yes for sure it has some disadvantages, not any critical one and can be compromised with some software or hardware.

#### 1. Performance :

<p style="padding-left: 30px;">
  If you are going to encrypt everything before served to the user, that will take more resources and memory on the server. It will only affect you when you are going to scale up everything and have a large number of visiting users. Then you can add extra servers or some <a href="http://www.thegeekstuff.com/2016/01/load-balancer-intro/">load balancing software/hardware </a>to reduce the load.
</p>

#### 2. Cost :

<p style="padding-left: 30px;">
  If you are a normal blogger (like me) means just serving content but want to secure your users from security threats this won&#8217;t bother you. Because you can get a <a href="https://letsencrypt.org/">FREE</a>! certificate from <a href="https://letsencrypt.org/">Let&#8217;s Encrypt</a> and install it for free(I will write another blog on &#8220;How to install and configure SSL Certificate in Apache Server&#8221;).
</p>

<p style="padding-left: 30px;">
  But if you have a Business Website the E-Commerce stuff and want to be more authentic to your Users, you have to get a Certificate from a <a href="https://en.wikipedia.org/wiki/Certificate_authority">CA (Certificate Authority)</a>. And then you have to pay some money to the Certifying Authority. But if you are in Business you can afford!!!
</p>

<figure id="attachment_534" class=" aligncenter"><img class="wp-image-534 " src="/resources/uploads/2017/03/secure-gd.png?resize=343%2C51&#038;ssl=1" alt="Secure HTTPS Signed by CA" width="343" height="51" data-recalc-dims="1" /><figcaption class="wp-caption-text">Secure HTTPS Signed by CA</figcaption></figure>

&nbsp;

<figure id="attachment_535" class=" aligncenter"><img class="wp-image-535 " src="/resources/uploads/2017/03/secure-sp.in_.png?resize=355%2C53&#038;ssl=1" alt="Secure over https" width="355" height="53" data-recalc-dims="1" /><figcaption class="wp-caption-text">Secure over https</figcaption></figure>

<div class="clearfix">
</div>

##### TL;DR

SSL is awesome. Change your Website from `http` to `https`. Cheers!

> [Trust begins with understanding. Understanding requires transparency.][7]

##### **Edit : 25 / March / 2017 **

I&#8217;ve posted another blog on [Migration to HTTPS from HTTP][8].

 [1]: https://www.digicert.com/ssl.htm
 [2]: https://security.stackexchange.com/questions/57087/why-is-the-deprecated-ssl-2-0-protocol-considered-insecure-and-how-can-it-be-exp#answer-57088
 [3]: https://drownattack.com
 [4]: https://en.wikipedia.org/wiki/Transport_Layer_Security
 [5]: /resources/uploads/2017/03/secure-gd.png?ssl=1
 [6]: /resources/uploads/2017/03/secure-sp.in_.png?ssl=1
 [7]: https://gsuite.google.co.in/intl/en_in/learn-more/how_google_protects_your_data.html
 [8]: //migrating-website-http-https/