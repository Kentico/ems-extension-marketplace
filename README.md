# Kentico EMS Extension Marketplace

[![Build Status](https://api.travis-ci.com/Kentico/ems-extension-marketplace.svg?branch=master)](https://travis-ci.com/Kentico/ems-extension-marketplace)
[![Live](https://img.shields.io/badge/Live-brightgreen.svg)](https://devnet.kentico.com/)
[![Maintainability](https://api.codeclimate.com/v1/badges/54b3d5094d76ef66d0b4/maintainability)](https://codeclimate.com/github/Kentico/ems-extension-marketplace/maintainability)

[![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-ASK%20NOW-FE7A16.svg?logo=stackoverflow&logoColor=white)](https://stackoverflow.com/tags/kentico)

[![Netlify Preview Status](https://api.netlify.com/api/v1/badges/14fdd323-c1b0-40ec-a7a9-c2bf02b192f4/deploy-status)](https://app.netlify.com/sites/ems-extension-marketplace/deploys)
[![Preview](https://img.shields.io/badge/Preview-brightgreen.svg)](https://ems-extension-marketplace.netlify.com/)

This repository is a source of the [Kentico EMS extension marketplace](https://devnet.kentico.com/marketplace). Items displayed on the marketplace are stored in the the [Kentico/devnet.kentico.com](https://github.com/Kentico/devnet.kentico.com) respository.

## Getting started

* Install dependencies
  
  ```sh
  npm install
  ```

* Run the marketplace

  ```sh
  npm run serve
  ```
 * Go to http://appRunningUrl/marketplace

### *[Internal]* Develop on local [devnet.localkentico.com](https://devnet.localkentico.com) instance

* Install dependencies
  
  ```sh
  npm install
  ```

* Set `--dest` value to the in [package.json](/package.json#L7) for `build` and `watch` script to the correct location according to your location of development version of kentico.

* Compiles and hot-reloads for development to correct location

  ```sh
  npm run watch
  ```

  * Now it is possible to see the result of your changes on [devnet.localkentico.com/marketplace](https://devnet.localkentico.com/marketplace).

* When you are done with the development, stop `watch` script and compile and minifies for production.

  ```sh
  npm run build
  ```

  * Commit marketplace source code to this repository.
  * Commit bundled file `extension-marketplace.min.js` located on the `--dest` build script parameter location to the [kentico.com](kentico.com) source code and propagate it to the production environment.

![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/ems-extension-marketplace?pixel)
