---
title: Integrating Travis CI with WordPress Theme
author: Shubham Pandey
type: post
date: 2017-02-16
path: /integrating-travis-ci-wordpress-theme/
category: WordPress
tags:
  - Best Practices in WordPress
  - GitHub
  - Travis CI

---
### Travis CI

A tool for automating tests for your Open Source projects. Travis CI is used to build and test the software projects at GitHub. Its written on Ruby and freely available under <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">MIT Licence</a>. Which means we can use the Software without the Restrictions.

So, Here the question is _&#8220;What we can do with this?_. Is it really can be helpful in developing any kind of Software/Application?&#8221;.

Yesterday, In a discussion about Open Source with <a href="http://yaj22.wordpress.com" target="_blank" rel="noopener noreferrer">Yathartha</a>, he told about his <a href="https://yaj22.wordpress.com/2017/02/12/contributing-to-open-source/" target="_blank" rel="noopener noreferrer">Open Source Contribution</a> to a Python Module. When he contributed his first code in the repository he got an error of _&#8220;Failure: Travis CI build Failed&#8221;. _ So then he read about the &#8220;Travis CI&#8221; that is a kind of Bot that can help you making cool thing faster and better with testing.

The owner of the Repository can set the rules for pushing the code or can create a set of rules. In every commit/push the code is tested with that particular data set.

In the discussion i was thinking of adding the Travis CI to the WordPress Theme Creation. There is a lot of rules for writing the good code in WordPress. There is a GitHub Repository dedicated for <a href="https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards" target="_blank" rel="noopener noreferrer">WordPress Coding Standards</a> :P. So, Now the Integration part comes.

### Integration with WordPress

There is a lot of documentation and tutorial/examples are available in their website on integrating with each language. Lots of languages are supported by Travis CI. Tutorials are available for each of the supported languages eg. <a href="https://docs.travis-ci.com/user/languages/php/" target="_blank" rel="noopener noreferrer">PHP integration</a>.

Creating a rule set that check the code with all the coding standards is not an easy task. So I looked over the themes that were created by the WordPress.org itself. So I have looked over the theme <a href="https://github.com/WordPress/twentysixteen/" target="_blank" rel="noopener noreferrer"><em>&#8220;Twenty Seventeen&#8221;</em></a>. I have also looked over the WordPress starter theme _<a href="http://underscores.me" target="_blank" rel="noopener noreferrer">&#8220;_S&#8221;</a>._ The YAML file is just like a bouncer. I have no idea what is written in the file. But after a lot of struggle I deciphered all the content 😉 .

The YAML file is more like a script. You have to add the details of your tests. Here are some values we have to add in the YAML file:

  * **language :**  Declaring the Project Language
  * **php : **Declaring the php version to use (if language is PHP)
  * **before_script : **All the dependencies or requirements for the tests are listed in this section, It is more like the _&#8220;Making a Web Development_ Environment&#8221; .
  * **script : **This section is for the tests commands. If any test return with code 0(zero) then it is passed the test otherwise the Build will show Failure.

<script src="https://gist.github.com/shubham9411/3658c3dcc8423220db35a9bca4dd6edd.js"></script>

It take me total of 9 commits to get my build successful pass after adding the `.travis.yml` file to my project. Means I have not following many rules from the WordPress Coding Standards. BTW the all checks failed were all about adding the function definition comment and the spaces before and after the parentheses 😉 .

<figure id="attachment_458" class=" alignnone"><img class="wp-image-458 size-full" src="/resources/uploads/2017/02/Screenshot-259.png?resize=640%2C360&#038;ssl=1" alt="Travis Build History" width="640" height="360"  /><figcaption class="wp-caption-text">Build Passing Badge</figcaption></figure>

So, Now I can add a badge to my github repository Readme for the last commit. It made me happy today the Badge 🙂 .

&nbsp;

> “Stop stressing. Press publish.”

 [1]: /resources/uploads/2017/02/Screenshot-259.png?ssl=1
 [2]: /resources/uploads/2017/02/build-passing.png?ssl=1