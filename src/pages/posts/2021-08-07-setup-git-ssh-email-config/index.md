---
title: Setup different gitconfig based on Folder with SSH Config
author: Shubham Pandey
type: post
date: 2021-08-07
path: /setup-different-gitconfig-ssh-based-on-folder/
category: Git
tags:
  - git
  - ssh
---

Recently one of my PR got merged in react core. I was so happy to see it merged and I put a screenshot and shared it on social media. I was happy that my name is now going to show up in the contributor's section in the GitHub of [`facebook/react`](https://github.com/facebook/react/pulls?q=author%3Ashubham9411) but here is the twist it wasn't. Normally the name shows up in GitHub if you have even one single PR then why wasn't my name was on that list. I had configured the SSH correctly for work and private GitHub than why it happened. This got me things. So I had to go back and figure out how GitHub shows the contribution chart. 

When you first install the git in your system you have to provide two values to the local git your name and your commit email. And then when you commit anything in any git repository it associates those two values in the commit. So when I set up the git first time in the current system it was my work email 😑. So all of the commits I did from the last 6 months were signed by my work email. And I thought I knew enough git to be dangerous. 

The very next thing I did was to search if we can use multiple two different emails for different projects. One solution was to setup an email for every folder which is not practical if you clone git repos now and then. I needed a global workflow that can distinguish email used on basis of folders. I had already segregated folders for work and private so that would have been an easier solution. 

I found a solution to this problem. [`Conditional Configuration`](https://github.blog/2017-05-10-git-2-13-has-been-released/) was released to git back in 2017. So for future me, I am writing this blog to what all the configurations I need when setting up git in a new machine. 

### Setting up SSH

1. Create a key from terminal

  ```bash
  ssh-keygen -t ed25519 -C "me@shubhampandey.in"
  ```

2. Add `eval "$(ssh-agent -s)"` to `.zshrc`
3. Adding Key to agent `ssh-add -K ~/.ssh/id_ed25519`
4. Create SSH config in `~/.ssh` folder (example)
  ```bash
  Host *
      AddKeysToAgent yes
      UseKeychain yes
      IdentityFile ~/.ssh/personal
  Host bitbucket.org
      AddKeysToAgent yes
      UseKeychain yes
      IdentityFile ~/.ssh/workkey
  ```
5. Now add the keys to their respective git providers GitHub, bitbucket etc.

### Setting up different git config based on Folder

1. In home folder you can add `.gitconfig` for different situations
  ```bash
  user]
      name = Shubham Pandey
      email = shubham.pandey@example.com       # default email if no config provided
      useConfigOnly = true
  [includeIf "gitdir:~/mysites/work/"]       # For Work folder
      path = ~/mysites/work/.gitconfig         # use this config file, you can define them in any folder
  [includeIf "gitdir:~/mysites/experiment/"] # For Personal folder
      path = ~/mysites/experiment/.gitconfig   # use this config file
  ```
2. Now create those two configs in their paths. (example for personal folder)
  ```bash
  [user]
      email = me@shubhampandey.in
      name = Shubham pandey
  ```

That's it. Now you have configured two different emails for two different folders, now I can commit in peace. Hopefully, my next PR to react comes sooner. 