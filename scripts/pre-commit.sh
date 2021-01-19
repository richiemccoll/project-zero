#!/bin/bash

npx lerna exec -- npm run check-types
npx lint-staged