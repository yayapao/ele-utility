#!/bin/bash

# app version
version="0.0.1"
app="npm-template-pure"

echo ">>> Thanks for using npm template pure"

function build() {
  echo ">> The current version of $app is $version"
  # handle lib directory
  # 判断文件是否存在
  if [ -d "npm/lib" ]; then
    echo ">>> Rename the dist directory"
    mv npm/lib/multi-entry.js npm/lib/index.js
    else
    echo ">>> No such dir"
  fi
  # handle typed file
  cp src/index.d.ts npm/lib/index.d.ts
}


if [ "$1" == "" ]; then
  help
elif [ "$1" == "build" ]; then
  build
else
  help
fi