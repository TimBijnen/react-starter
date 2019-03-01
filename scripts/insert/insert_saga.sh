#!/bin/bash

name=$1
path=''
file=src/sagas.js

while IFS='/' read -ra args; do
    for i in "${args[@]}"; do
        echo $path
        name=$i
        path="$path\/$i"
    done
done <<< $1

if grep -q 'import { sagas as '"$name"' } from \"src\/pages'"$path"'\/duck\";' $file; then
  echo Saga already exists
  return
fi

match='\/\/ imported sagas'
insert='\
import { sagas as '"$name"' } from \"src\/pages'"$path"'\/duck\";'

sed -i '' "s/$match/$match$insert/" $file

match='\/\/ combined sagas'
insert='\
    '"$name"\(\)','

sed -i '' "s/$match/$match$insert/" $file