#!/bin/bash

DATE=$(date '+%Y-%m-%d')
BLOG=$1
TITLE=$2
CATEGORY=$3

FOLDER="src/pages/posts/$DATE-$BLOG"
if [ -d "$FOLDER" ]; then
  echo "####################"
  echo "Folder already exist"
  echo "####################"
  exit 1
fi
mkdir $FOLDER
cd $FOLDER
touch index.md
cat << EOF >> index.md
---
title: $TITLE
author: Shubham Pandey
type: post
date: $DATE
path: /$BLOG/
category: $CATEGORY
tags:
  - $CATEGORY
---
EOF

echo "####################"
echo "Everything is ready"
echo "####################"
