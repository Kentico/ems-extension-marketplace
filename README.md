# Kentico EMS Extension Marketplace

This repository is a source of the [Kentico EMS extension marketplace](devnet.kentico.com/marketplace).

## Getting started

* Install dependencies
  
  ```sh
  npm install
  ```

* Run the marketplace

  ```sh
  npm run serve
  ```

### *[Internal]* Develop on local [DevNet.Kentico.com](DevNet.Kentico.com) instance

* Install dependencies
  
  ```sh
  npm install
  ```

* Set `--dest` value to the in [package.json](/package.json#L7) for `build` and `watch` script to the correct location according to your location of development version of kentico.

* Compiles and hot-reloads for development to correct location

  ```sh
  npm run watch
  ```

  * Now it is possible to see the result of your changes on [devnet.localkentico.com/marketplace](devnet.localkentico.com/marketplace).

* When you are done with the development, stop `watch` script and compile and minifies for production.

  ```sh
  npm run build
  ```

* Commit marketplace source code to this repository

* Commit bundled file `extension-marketplace.min.js` located on the `--dest` build script parameter location to the [kentico.com](kentico.com) source code.
