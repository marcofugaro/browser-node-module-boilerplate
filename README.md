# browser-node-module-boilerplate

> Boilerplate for creating a library for both the browser and node


This boilerplate is inspired from [sindresorhus/node-module-boilerplate](https://github.com/sindresorhus/node-module-boilerplate).

The scaffolding is similar, it adds support for shipping your code to the browser using Rollup as a bundler.

[Here is a great read about the choice of using rollup for libraries.](https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c)


## Getting started

The easiest way is to use the [Yeoman generator](https://github.com/marcofugaro/generator-browser-node-module), you get to configure more stuff that way.

Alternatively, click the [Use this template](https://github.com/marcofugaro/browser-node-module-boilerplate/generate) button here on github, it will create a repo containing these files.

Otherwise you can just `git clone` or [download](https://github.com/marcofugaro/browser-node-module-boilerplate/archive/master.zip) this repo.


## Install

```
npm install <%= moduleName %>
```
or
```
yarn add <%= moduleName %>
```


## Usage

```js
import <%= camelModuleName %> from '<%= moduleName %>'

// ...
```


## API

### <%= camelModuleName %>(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.
