#!/bin/bash

dir=src/components/$1

if [ -d "$dir" ]; then
  echo "Component already exists"
  return
fi


mkdir -p "src/components/$1"
cp ./scripts/templates/component/* $dir

match='__COMPONENT__'
insert=`echo ${name:0:1} | tr  '[a-z]' '[A-Z]'`${name:1}

sed -i '' "s/$match/$insert/" $dir/index.js