rm -rf src/pages/$1
. ./scripts/remove_reducer.sh $1
. ./scripts/remove_saga.sh $1