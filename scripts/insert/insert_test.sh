#!/bin/bash
dir=$1

cp ./scripts/templates/tests/component.js $dir/index.test.js

git add $dir/index.test.js
git commit $dir/index.test.js -m "[Generator] Generated test"