#!/bin/bash

name=$1
path=''
file=src/reducers.js

while IFS='/' read -ra args; do
    for i in "${args[@]}"; do
        echo $path
        name=$i
        path="$path\/$i"
    done
done <<< $1

if grep -q 'import { reducers as '"$name"' } from \"src\/pages'"$path"'\/duck\";' $file; then
  echo Reducer already exists
  return
fi

match='\/\/ imported reducers'
insert='\
import { reducers as '"$name"' } from \"src\/pages'"$path"'\/duck\";'

sed -i '' "s/$match/$match$insert/" $file

match='\/\/ combined reducers'
insert='\
    '"$name"','

sed -i '' "s/$match/$match$insert/" $file