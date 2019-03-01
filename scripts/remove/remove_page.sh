rm -rf src/pages/$1
. ./scripts/remove/remove_reducer.sh $1
. ./scripts/remove/remove_saga.sh $1
. ./scripts/remove/remove_route.sh $1