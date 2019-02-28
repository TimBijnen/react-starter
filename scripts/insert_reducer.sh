#!/bin/bash

name=$1
path=''

while IFS='/' read -ra args; do
    for i in "${args[@]}"; do
        echo $path
        name=$i
        path="$path\/$i"
    done
done <<< $1


match='\/\/ imported reducers'
insert='\
import { reducers as '"$name"' } from \"pages'"$path"'\/duck\";'

sed -i '' "s/$match/$match$insert/" src/reducers.js

match='\/\/ combined reducers'
insert='\
    '"$name"','

sed -i '' "s/$match/$match$insert/" src/reducers.js