#!/bin/bash

echo $1
mkdir -p "src/pages/$1"
cp ./scripts/templates/page/* src/pages/$1
cp -r ./scripts/templates/duck/ src/pages/$1/duck

. ./scripts/insert_reducer.sh $1
. ./scripts/insert_saga.sh $1
