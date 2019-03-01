react() {
  action=$1
  type=$2
  name=$3

  if [ ! $action ]; then
    echo 'no action given'
    return;
  fi

  if [ ! $type ]; then
    echo 'no type given'
    return;
  fi

  if [ ! $name ]; then
    echo 'no name given'
    return;
  fi

  ## Generate [page, component]
  if [ $action == 'g' ]; then
    if [ $type == 'page' ]; then
      # if [ -d "src/pages/$name" ]; then
      #   echo 'page already exists'
      #   return
      # fi;
      echo 'Generate' $type $name;
      . ./scripts/insert/insert_page.sh $name
      return
    fi

    if [ $type == 'component' ]; then
      # if [ -d "src/pages/$name" ]; then
      #   echo 'component already exists'
      #   return
      # fi;
      echo 'Generate' $type $name;
      . ./scripts/insert/insert_component.sh $name
      return
    fi
  fi

  ## Delete [page, component]
  if [ $action == 'd' ]; then
    if [ $type == 'page' ]; then
      # if [ ! -d "src/pages/$name" ]; then
      #   echo 'page does not exist'
      #   return
      # fi;
      echo 'Delete' $type $name;
      . ./scripts/remove/remove_page.sh $name
      return
    fi

    if [ $type == 'component' ]; then
      # if [ -d "src/pages/$name" ]; then
      #   echo 'component does not exists'
      #   return
      # fi;
      echo 'Delete' $type $name;
      . ./scripts/remove/remove_component.sh $name
      return
    fi
  fi

  echo 'Unknown command -' $1 $2 $3;
}