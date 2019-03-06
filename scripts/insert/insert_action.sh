#!/bin/bash

# echo $PWD
name=`echo $1 | tr  '[a-z]' '[A-Z]'`;
dir=$2

line=`sed -n "/$name:/p" $dir/duck/types.js`
if [ "$line" ]; then
  echo "Action already exists"
  return
fi

path=
while IFS='/' read -ra args; do
    for i in "${args[@]}"; do
        path="$path\/$i"
    done
done <<< $dir
echo $dir $path


echo "Create action types? [y/n]"
read createActionTypes

if [ $createActionTypes ]; then
  echo "Does the action need to be async? [Y/N]:"
  read async

  ## CREATE TYPES
  match='types = {'

  if [ $async == 'y' ]; then
    insert='\
      '"$name"': \"'"$path\/duck\/types__$name"'\",\
      '"$name"__SUCCESS': \"'"$path\/duck\/types__$name"____SUCCESS'\",\
      '"$name"__ERROR': \"'"$path\/duck\/types__$name"__ERROR'\",\
  '
  elif [ $async == 'n' ]; then
    insert='\
      '"$name"': \"'"$path\/duck\/types__$name"'\",\
  '
  fi

  sed -i '' "s/$match/$match$insert/" "$dir/duck/types.js"
fi

echo "Create action? [y/n]"
read createActions

if [ $createActions ]; then
  ## CREATE ACTIONS
  match='export default {'

  insert='\
      '"$1"','

  sed -i '' "s/$match/$match$insert/" "$dir/duck/actions.js"

  insert='const '"$1"' = payload => ( { type: types.'"$name"', payload } );\
  \
  '

  sed -i '' "s/$match/$insert$match/" "$dir/duck/actions.js"
fi

echo "Create reducer? [y/n]"
read createReducer

if [ $createReducer ]; then
  ## CREATE REDUCER
  match='export default combineReducers( {'

  insert='\
      '"$1"','

  sed -i '' "s/$match/$match$insert/" "$dir/duck/reducers.js"

  insert='const '"$name"' = \"'"$1"'\";\
  const '"$1"' = ( state = '"$name"', { type, payload } ) => {\
      if ( type === types.'"$name"' ) {\
          return payload;\
      }\
      return state;\
  };\
  \
  '
  sed -i '' "s/$match/$insert$match/" "$dir/duck/reducers.js"
fi

echo "Add action to component? [y/n]"
read addToComponent

if [ $addToComponent ]; then
  ## do sometgin
fi
