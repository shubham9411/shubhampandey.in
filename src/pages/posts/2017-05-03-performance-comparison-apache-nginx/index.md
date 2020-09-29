---
title: 'Performance Comparison : Apache and Nginx'
author: Shubham Pandey
type: post
date: 2017-05-03
path: /performance-comparison-apache-nginx/
dsq_thread_id:
  - 5971678405
category: DevOps
tags:
  - Web Server

---
### Apache and Nginx

[Apache](https://www.apache.org/) and [Nginx](https://www.nginx.com/) are the two most popular Web Servers powering the Internet. The most popular in between them is Apache. While 49% of the total web still uses Apache for powering their websites, and Nginx shares 33.7% traffic.

But on researching more about them I found that Nginx surpasses Apache in many factors. Internet is using Nginx more on the top sites. Stats says that Nginx shares 51.6% traffic on top 100,000 sites while Apache shares 30.7%.

And the Top 1,000 sites of the world or you can say Busiest sites uses the nginx server (53.8%) where Apache lacks behind to only 19.2% of its share on traffic.

[All the Stats are from w3techs.com.](https://w3techs.com/technologies/cross/web_server/ranking)

Because of too many reasons I’ve moved my server from Apache to Nginx. One of the reason was the traffic hike during the [Scintilla Selfie Contest](/scintilla-selfie-contest-finalists/). When because of some unexpected traffic my server crashed. And was down for around 1 hour.

Internet is full of all the info about the differences and features of these two web servers but I haven’t find a website that ensures about the performance  of the Nginx server. So I decided to do some load test on both of the Servers.

#### Setup :

System Specification –

1.  Operating System – [Amazon Linux AMI](https://aws.amazon.com/amazon-linux-ami/)
2.  RAM – 1GB
3.  PHP 5.6
4.  MySQL 5.5
5.  [WordPress 4.7.4](https://codex.wordpress.org/Version_4.7.4) with [Comet Cache plugin](https://wordpress.org/plugins/comet-cache/)
6.  GZip enabled in both servers

Apache Stack Specification –

1.  Httpd 2.4
2.  mod24\_ssl
3.  supports http1.1

Nginx Stack Specification –

1.  Nginx 1.10
2.  supports http2.0

#### Tests Configuration :

For load tests I’ve used [Loader.io](https://loader.io/). They provide 3 types of load tests for websites. For single domain the services are free, but if you want to test too many websites then they have some [premium charges](https://loader.io/billing_subscription).

#### Tests Types:

1.  Maintain client load
2.  Clients per second
3.  Clients per test

#### Testing :

#### Test 1 – Maintain client load

Configuration :-

| Clients | Duration | Error Threshold | Timeout |
| ------ | ------ | ------ | ------ | 
| 0-250 | 1 min | 100% | 10 sec |

[![Apache : Maintain client load](/resources/uploads/2017/05/Apache-test-1-Maintain-client-load.png)](/resources/uploads/2017/05/Apache-test-1-Maintain-client-load.png)

Apache : Maintain client load

[![Nginx : Maintain client load](/resources/uploads/2017/05/Nginx-test-1-Maintain-client-load.png)](/resources/uploads/2017/05/Nginx-test-1-Maintain-client-load.png)

Nginx : Maintain client load

In this test loader performs a increasing clients test from 0-250 clients over a span of 1 min. you can clearly see that in Apache Configuration the error rate is 23.8% where in the Nginx setup it is about 2.3 %. also the apache fails in between of the tests with timeouts. where the Nginx is started failing at 50th sec to 60th sec.

**Point Table – _Nginx : 1 :: Apache : 0_**

#### Test 2 – Clients per test

Configuration :-

| Clients | Duration | Error Threshold | Timeout |
| ------ | ------ | ------ | ------ | 
| 0-250 | 1 min | 100% | 10 sec |

[![Apache : Clients per test](/resources/uploads/2017/05/Apache-test-2-Clients-per-test.png)](/resources/uploads/2017/05/Apache-test-2-Clients-per-test.png)

Apache : Clients per test

[![Nginx : Clients per test](/resources/uploads/2017/05/Nginx-test-2-Clients-per-test.png)](/resources/uploads/2017/05/Nginx-test-2-Clients-per-test.png)

Nginx : Clients per test

This test is for determining that how many clients the server can handle at a time. Apache fails after 10 sec for even for serving 3 clients per sec. where on an average we can say Nginx is handling 4 clients per sec. with a peek of 7 clients per second.

**Point Table – _Nginx : 2 :: Apache : 0_**

#### Test 3 – Clients per second

Configuration :-

| Clients | Duration | Error Threshold | Timeout |
| ------ | ------ | ------ | ------ | 
| 250/sec | 1 min | 100% | 10 sec |


[![Apache : Clients per second](/resources/uploads/2017/05/Apache-test-3-Clients-per-second.png)](/resources/uploads/2017/05/Apache-test-3-Clients-per-second.png)

Apache : Clients per second

[![Nginx : Clients per second](/resources/uploads/2017/05/Nginx-test-5-Clients-per-second.png)](/resources/uploads/2017/05/Nginx-test-5-Clients-per-second.png)

Nginx : Clients per second

This test is for determining that how many request per second a server can handle. You can see that on requesting 250 request in a second the server doesn’t respond for 10 sec. and then fails with 100% error threshold. Where Nginx work as a shock absorber in this test, and respond to some of the requests that it can handle. It is like making a queue for the requests and sending them to the current free worker process. And hold them till the working process free some memory.

The reason why Apache failed when getting too many requests is because Apache uses a prefork method for serving. Means it creates processes for each request. Because of getting too many requests at a single time and with a lack of memory(only 1GB RAM) it asked for too much memory and crashed. This is what happened on that day, because of occupying too much memory by Apache and MySQL I was not able to access my server via SSH at that time.

Whereas the Nginx server work as a [Shock Absorber](https://www.nginx.com/blog/facing-hordes-black-friday-cyber-monday/) and create a queue for all the requests and serve them with their token number. Some of the requests from them got higher then 10sec of Timeout threshold so they are represented in the graph with orange color.

Apache error threshold 100% where Nginx 47.1%.

**Point Table – _Nginx : 3 :: Apache : 0_**

##### Results :

You can clearly see that Nginx gave better performance then the Apache Web Server. But still it can be optimized for more performance. By adding Cache tools because Nginx serves Static files much better than any other server.

We can also optimize the Nginx server performance :

1.  [Pagespeed module for Nginx by Google](https://developers.google.com/speed/pagespeed/module/)
2.  Minifying CSS/JS
3.  Using a better Cache Plugin for generating static files because Nginx surpasses almost every server in serving static files.

##### Next Challenge :

For the next challenge I am thinking for using Nginx as a proxy server for Apache. Because I have read somewhere that The most powerful combination is that using Nginx in front of the Apache with cache enabled.

Also there is another combination of [Varnish](https://varnish-cache.org/) and Apache. Where Varnish is not a Web Server but it can be used as reverse proxy and caching static pages. It is used by lot of websites like [GitHub.com](https://github.com) etc.

Also because I’ve analysed that [PHP-FPM](https://php-fpm.org/) is using too much memory. Where Apache is good option for using with PHP and Nginx is better at serving Static Files it will be a better option to use them together.

###### Links to all the test with full report :

**Apache:**

1.  [Maintain client load](https://goo.gl/WX1eqb)
2.  [Clients per test](https://goo.gl/eP1U2W)
3.  [Clients per second](https://goo.gl/gw3U36)

**Nginx :**

1.  [Maintain Client Load](https://goo.gl/oJhoO0)
2.  [Clients per test](https://goo.gl/WDWI4S)
3.  [Clients per second](https://ldr.io/2pGKQnS)

* * *

##### Other :

When I added [SSL into my website](https://shubhampandey.in/migrating-website-http-https/) last time, It was not as much secure as it should be. It was some of the Obsolete Ciphers that can make some vulnerabilities. And so I got a **“B” ** Certificate.

[![SSl Rating B for shubhampandey.in](/resources/uploads/2017/05/B-certificate.png)](/resources/uploads/2017/05/B-certificate.png)

SSl Rating B for shubhampandey.in

Now with a proper configuration and Enabling **“[HTTP2](https://en.wikipedia.org/wiki/HTTP/2)” **in my site I have got new Rating for website and that’s an **“A+”**.

![SSl Rating A+ for shubhampandey.in with HSTS enabled](/resources/uploads/2017/05/A-certificate-1.png)

SSl Rating A+ for shubhampandey.in with HSTS enabled

You can also generate a good configuration from the [Mozilla’s SSL Configuration generator website](https://mozilla.github.io/server-side-tls/ssl-config-generator/) where they provide many options for creating a configuration that can get you an A+ rating 🙂.