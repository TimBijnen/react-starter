#!/bin/bash

name=$1
path=''
file=src/router/index.js

while IFS='/' read -ra args; do
    for i in "${args[@]}"; do
        echo $path
        name=$i
        path="$path\/$i"
    done
done <<< $1

name=`echo ${name:0:1} | tr  '[a-z]' '[A-Z]'`${name:1}

if grep -q 'import '"$name"' from \"src\/pages'"$path"'\";' $file; then
  echo Page already exists
  return
fi

match='\/\/ imported routes'
insert='\
import '"$name"' from \"src\/pages'"$path"'\";'

sed -i '' "s/$match/$match$insert/" $file

match='<Switch>'
insert='\
                <RestrictedRoute exact path=\"'"$path"'\" { ...rest } component={ () => <'"$name"' { ...rest } \/> } \/>'

sed -i '' "s/$match/$match$insert/" $file


## insert to navigation
file=src/components/navigation/index.js

match='<\/nav>'
insert='    <StyledLink to=\"'"$path"'\">'"$name"'<\/StyledLink>\
    ';
sed -i '' "s/$match/$insert$match/" $file