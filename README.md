# prepack-experiments
Random experiments with prepack (https://prepack.io). See the covering [Medium](https://medium.com/@sukantgujar/unpacking-prepack-8c6150e9e6e3) article.

This repo contains a demo of Prepack in a typical webpack setup. 
The code premise is a generic Logger implementation which shadows `console` log APIs and levels.

The code exports this object in `prepack-expriments` namespace.

## Install

`yarn install` or `npm install`

## Build

Without prepack: `npm run build`

With prepack: `npm run build:prepack`

## Test

Use the following command to build and test run the project -

`npm run test`
