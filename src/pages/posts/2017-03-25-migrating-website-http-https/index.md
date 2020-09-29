---
title: Migrating website from http to https
author: Shubham Pandey
type: post
date: 2017-03-25
path: /migrating-website-http-https/
featured_image: /resources/uploads/2017/03/Screenshot-286.png
category: "Cyber Security"
tags:
  - HTTPS over HTTP
  - Internet
  - SSL
  - SSL Certificates

---
I have recently migrated my website from http to https( secure http). All the non-secure HTTP requests are now redirected to HTTPS. On migrating the Site I faced many problems and learnt a lot. So here&#8217;s the list of steps to perform in making the web more secure :

#### <span style="text-decoration: underline;">Selecting SSL Provider :</span>

The first step is deciding your SSL provider. Many SSL Providers are present in the market like [Comodo][1], [Symentac,][2] [Verizon][3], [Namecheap][4] etc. They all charge a lot of money but also provide Extended Validation, means not only secure but also proves your legal identity as &#8220;[operational and physical presence of website owner][5]&#8220;.

For normal use you just need a Domain level Certificate. From [Namecheap][6] you can [buy an SSL certificate][7] in 600₹ for 1 year(Single Domain). For EV Certificate(Extended Validation) it&#8217;s good to buy a Certificate, but for Domain level I suggest you to use [Let&#8217;s Encrypt][8]. Let&#8217;s Encrypt is Free! and it is free because of it&#8217;s [Sponsers][9] like Google, Facebook, Mozilla, Automattic etc. So I am going with [Let&#8217;s Encrypt][8].

#### <span style="text-decoration: underline;">Installing SSL Certificate :</span>

Installing SSL Certificate is an easy task if your Hosting Provider support [Let&#8217;s Encrypt][8]. You can check the name of your [hosting provider on the list][10]. For non-supporting hosting providers we have [certbot][11]. You have to select your software and system. While Installing do redirect all of your traffic to https permanently. It&#8217;s an essential step because now you have two versions of your site.

<figure id="attachment_558" class=" alignnone"><img class="wp-image-558 size-full" src="/resources/uploads/2017/03/featured-ssl.png?resize=640%2C385" alt="Installing SSL Certificate Successfully v2" width="640" height="385"  /><figcaption class="wp-caption-text">Likes and Shares are set to zero!</figcaption></figure>

How to get back all of your likes, you can use plugins like [Warefare Plugin][16](expansive) of do it manually :

  * **Changing .htaccess :** In [Facebook&#8217;s documentation][17] they give a solution, to redirect [Facebook&#8217;s crawler][18] to the old URL. I&#8217;ve found a solution in [Stack Overflow][19]. You have to add FaceBot to the exception list of redirection. You can find your .htaccess file in your document root. CertBot uses the virtual host method instead. Both do the same thing but .htaccess method is less preferred.
  * **Point og:url meta tag to old url :** If you are using any kind of SEO tool or creating meta tags your self you have to [change all the og:url tag][20] to the http version again.
  
    So if you are using Jetpack SEO tool then Jeremy Herve created a [gist for you][21]. I am using Yoast SEO. I&#8217;ve created a [small plugin][22] for changing links in Yoast SEO.
  
    
  * **Scraping :** By doing both steps above you don&#8217;t get back your likes instantly but after 30 days. Facebook crawls each url after every 30 days of sharing the link. So my first step was going to [open graph debug tools][23] and fetch new info for every URL. But the problem was, many sites are too large that fetching each link is not possible.
  
    For overcoming this problem, I researched on &#8220;How to scrap links by script&#8221;. I&#8217;ve found a solution in [Stack Overflow][24] and tweaked it a bit with file operations. You have to make a list of your URLs in a file and [pass through the script][25]. Use your Website Sitemaps for getting all the links of your Web Site.
  
    

##### External Links :

Any external links to your previous http links will take your SEO juice away, So it&#8217;s good to change them all.

If you are using Google Webmaster tools, add new urls with https. Don&#8217;t delete previous urls. Submit sitemaps, and request indexing.

Facebook page and Google Analytics is the another place you want to [change the link to your site.][26]

<div class="success">
  <strong>Update!</strong> <a href="http://samrueby.com/2015/01/26/why-is-https-faster-than-http/">HTTPS is faster protocol then HTTP</a> if you upgrade your apache to HTTP/2. For comparing these two go to <a href="https://www.httpvshttps.com/">httpvshttps</a> .
</div>

&nbsp;

 [1]: https://www.comodo.com
 [2]: https://www.symantec.com/ssl-certificates/
 [3]: http://www.verizonenterprise.com/products/security/
 [4]: https://www.namecheap.com/
 [5]: https://en.wikipedia.org/wiki/Extended_Validation_Certificate#Issuing_criteria
 [6]: https://www.namecheap.com
 [7]: https://www.namecheap.com/security/ssl-certificates.aspx
 [8]: https://letsencrypt.org/
 [9]: https://letsencrypt.org/sponsors/
 [10]: https://community.letsencrypt.org/t/web-hosting-who-support-lets-encrypt/6920
 [11]: https://certbot.eff.org/
 [12]: /resources/uploads/2017/03/featured-ssl.png
 [13]: https://www.ssllabs.com/ssltest/
 [14]: /resources/uploads/2017/03/Screenshot-282.png?ssl=1
 [15]: /resources/uploads/2017/03/share-zero.png?ssl=1
 [16]: https://warfareplugins.com/
 [17]: https://developers.facebook.com/docs/plugins/faqs#faq_239407819772328
 [18]: https://developers.facebook.com/docs/sharing/webmasters/crawler
 [19]: http://stackoverflow.com/questions/19164861/exempt-facebook-crawler-from-htaccess-redirect/19165071#19165071
 [20]: https://developers.facebook.com/docs/plugins/faqs#faq_1149655968420144
 [21]: https://github.com/jeherve/jeherve-custom-ogurls/blob/master/jeherve-custom-ogurls.php
 [22]: https://gist.github.com/shubham9411/1790aa352872eb80efca6bbfe1df3054#file-open-graph-urls-php
 [23]: https://developers.facebook.com/tools/debug/
 [24]: http://stackoverflow.com/questions/12100574/is-there-an-api-to-force-facebook-to-scrape-a-page-again
 [25]: https://gist.github.com/shubham9411/f7908e8c5cbb53b94f2b6636d84410f2#file-scrape-fb-links-sh
 [26]: https://www.quora.com/How-do-I-track-HTTP-and-HTTPS-in-Google-Analytics#