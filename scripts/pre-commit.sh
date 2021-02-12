#!/bin/bash

# Run executables from the closest node_modules
function npm-do { (PATH=$(npm bin):$PATH; eval $@;) }

npm-do lerna exec -- npm run check-types
npm-do lint-staged