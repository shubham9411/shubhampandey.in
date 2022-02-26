---
title: Flutter Kumaoni app story
author: Shubham Pandey
type: post
date: 2022-02-26
path: /flutter-kumaoni-app-story/
category: flutter
tags:
  - flutter
  - nocode
---

Last year I decided i'll start learning flutter and create some apps. I was planning to make an app about kumaoni languaage where you can learn words meaning of kumaoni language and learn it through sentances etc. So on one weekend last year in april I started coding the app without any design or anything on my mind just wanted to ship it on that weekend. 

I was preparing a google sheet of all the words meaning I know and translated a lot of words myself or some with the help of my family. First I was thinking of making a hardcoded data inside the app from that google sheet. But the voice from inside me told that no what if there are too many words to be added are you willing to release new versions every now and then just for this update, no right? But I also don;t want to spin off a server just so I can get the words from an API. So I decided I am going to use a "Nocode" solution for this. 

I used nocodeapi.com for the backend which is just a proxy for google sheet and I can get 300requests a day for same api which was too good of a number because I don;t know if there are real people who are going to download it. For making an MVP I just went with this backend. 

Now that the backend was sorted out I needed to make the app. I followed a tutorial and it was easier than I thought. I complicated the app by adding the sqlite db client side for caching the words if already fetched. But other than that everything worked fine. 

I released the app and in first week it got downloaded by 10-20 users, yeas real users. 

### Full architecture of the app

![Backend of kumaoni app](/inefficient-but-working-backend-architecture/flutter-backend.drawio.png) 


---


I have forgot a lot of details this is just me writing this story after one year. I'll update other details etc in some time(मन नहीं कर रहा अभी लिखने का). Just me writing this so i dont forget it when i have already forget it. If you are curious email me. 
