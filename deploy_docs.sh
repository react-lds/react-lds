#!/bin/bash

set -o errexit -o nounset

# Do nothing if the commit was not pushed to master
# if [ "$TRAVIS_PULL_REQUEST" != "false" ] || [ "$TRAVIS_BRANCH" != "master" ]
# then
#  echo "This commit was either a pull request or made against the $TRAVIS_BRANCH and not the master! No deploy!"
#  exit 0
#fi

# Deploy with storybook-deployer, user is Travis (specified in package.json)
yarn deploy-storybook
