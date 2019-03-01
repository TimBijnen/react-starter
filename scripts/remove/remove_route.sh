#!/bin/bash

name=$1
path=''
file=src/router/index.js

while IFS='/' read -ra args; do
    for i in "${args[@]}"; do
        name=$i
        path="$path\/$i"
    done
done <<< $1

name=`echo ${name:0:1} | tr  '[a-z]' '[A-Z]'`${name:1}

match='import '"$name"' from \"src\/pages'"$path"'\";'
sed -i '' "/$match/d" $file

match='<RestrictedRoute.*'"$path"'.*\/>'
echo $match
sed -i '' "/$match/d" $file
