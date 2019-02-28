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

match='import { sagas as '"$name"' } from \"pages'"$path"'\/duck\";'
sed -i '' "/$match/d" src/sagas.js

match='    '"$name"\(\)','
sed -i '' "/$match/d" src/sagas.js