#!/bin/bash

set -o errexit -o nounset

if [ -n "$TRAVIS_TAG" ]
then
  #  Set Travis as commiter git user
  git config --global user.email "propertybase-ci@propertybase.com"
  git config --global user.name "Propertybase CI"

  # Build docs
  yarn build:storybook

  # Initialize an empty repository, fetch upstream and reset it
  rev=$(git rev-parse --short HEAD)
  cd ./react-lds
  git init

  # Add all changes in push them to gh-pages
  touch .
  git add -A .
  git commit --quiet --message "rebuild pages at ${rev}"
  git push --force --quiet "https://${GITHUB_TOKEN}@github.com/${GITHUB_REPO}.git" master:gh-pages > /dev/null 2>&1
else
  echo "Not a tagged commit, skipping deploy..."
  exit 0
fi
