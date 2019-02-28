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

match='\/\/ imported sagas'
insert='\
import { sagas as '"$name"' } from \"pages'"$path"'\/duck\";'

sed -i '' "s/$match/$match$insert/" src/sagas.js

match='\/\/ combined sagas'
insert='\
    '"$name"\(\)','

sed -i '' "s/$match/$match$insert/" src/sagas.js