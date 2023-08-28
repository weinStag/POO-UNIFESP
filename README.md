# About
My repository for all the projects developed on my object oriented programming  course at UNIFESP

# Commands to run TS:

## If you didn't have typescript make sure to install it globally by running the following code:
```node
npm install -g typescript
```
## Install Typescript on the target folder to use it locally:
```node
npm install typescript --save-dev
```
## Init Typescript by using:
```node
./node_modules/typescript/bin/tsc --init
```
## Create an output folder and compile:
```node
./node_modules/typescript/bin/tsc --outDir <your-output-folder>
```
## Run the index JS file that tsc created on the output folder:
```node
node out/index.js
```
