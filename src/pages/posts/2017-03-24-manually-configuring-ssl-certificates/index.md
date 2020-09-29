---
title: Manually configuring SSL Certificates
author: Shubham Pandey
type: post
date: 2017-03-24
path: /manually-configuring-ssl-certificates/
tags:
  - "Cyber Security"
category: "Cyber Security"

---
&nbsp;

#### <span style="text-decoration: underline;">Getting the Certificates :</span>

  1. Go to [SSLforFree][1].
  2. Enter your website link to create SSL certificate.
  3. Verify your ownership of website.
  4. Download Certificates.zip.
  5. Upload ZIP to your hosting instance.

#### <span style="text-decoration: underline;">Configuring SSL :</span>

  1. Extract ZIP.
  2. Move certificate.crt file to `/etc/pki/tls/certs/`
  3. Move private.key to `/etc/pki/tls/private/`
  4. Now change configuration in ssl.conf `$ sudo /etc/httpd/conf.d/ssl.conf`
  5. Find These lines and change accordingly : 
      1. `SSLCertificateFile /etc/pki/tls/certs/certificate.crt`
      2. `SSLCertificateKeyFile /etc/pki/tls/private/private.key`
      3. `SSLCertificateChainFile /etc/pki/tls/ca-crt.pem`

Now Restart apache server and try opening your website with https enabled.

This method has some issues for mobile Certification and show insecure origin for mobile users. So I prefer to not go this way for adding SSL to your website. This was just my trial and error approach for installing the certificate.

Next Post [Migrating from http to https][2]

 [1]: https://www.sslforfree.com
 [2]: /migrating-website-http-https/