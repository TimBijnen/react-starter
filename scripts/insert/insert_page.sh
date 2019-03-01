#!/bin/bash
dir=src/pages/$1

mkdir -p $dir
cp ./scripts/templates/page/* $dir

name=$1

while IFS='/' read -ra args; do
    for i in "${args[@]}"; do
        echo $path
        name=$i
        path="$path\/$i"
    done
done <<< $1
match='__PAGE__'
insert=`echo ${name:0:1} | tr  '[a-z]' '[A-Z]'`${name:1}
sed -i '' "s/$match/$insert/" $dir/index.js

cp -r ./scripts/templates/duck/ src/pages/$1/duck

. ./scripts/insert/insert_reducer.sh $1
. ./scripts/insert/insert_saga.sh $1
. ./scripts/insert/insert_route.sh $1
