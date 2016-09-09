#!/bin/bash

set -o errexit -o nounset

# Do nothing if the commit was not pushed to master
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "master" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH and not the master! No deploy!"
  exit 0
fi

#  Set Travis as commiter git user
git config --global user.email "propertybase-ci@propertybase.com"
git config --global user.name "Propertybase CI"

# Rebuild docs with webpack
npm run build:docs

# Initialize an empty repository, fetch upstream and reset it
rev=$(git rev-parse --short HEAD)
cd ./docs/build
git init
git remote add upstream "https://$GH_TOKEN@github.com/propertybase/react-lds.git"
git fetch upstream
git reset upstream/gh-pages

# Add all changes in push them to gh-pages
touch .
git add -A .
git commit -m "rebuild pages at ${rev}"
git push -q upstream HEAD:gh-pages
