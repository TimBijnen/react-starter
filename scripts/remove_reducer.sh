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

match='import { reducers as '"$name"' } from \"pages'"$path"'\/duck\";'
sed -i '' "/$match/d" src/reducers.js

match='    '"$name"','
sed -i '' "/$match/d" src/reducers.js