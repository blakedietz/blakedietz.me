---
slug: /blog/2022/04/03
title: "Solved: ERR_MODULE_NOT_FOUND"
description: Ran into some issues with module resolution when working with typescript.
tags:
  - typescript
draft: false
date: 2022-04-03T12:00:00.000-06:00
---

## Environment

### Operating system

`macOS 11.6.1`

### node.js runtime

`16.13.1`

### package.json

```json
{
  "name": "repro",
  "version": "0.0.0",
  "description": "repro",
  "type": "module",
  "engines": {
    "node": ">= 16.13 <17"
  },
  "devDependencies": {
    "@tsconfig/node16": "^1.0.2",
    "@types/jest": "~27.4",
    "@types/node": "~16.11",
    "@typescript-eslint/eslint-plugin": "~5.14",
    "@typescript-eslint/parser": "~5.14",
    "eslint": "~8.11",
    "eslint-config-prettier": "~8.5",
    "eslint-plugin-jest": "~26.1",
    "jest": "~27.5",
    "prettier": "~2.5",
    "rimraf": "~3.0",
    "ts-jest": "~27.1",
    "tsutils": "~3.21",
    "typescript": "~4.6"
  },
  "scripts": {
    "start": "node build/src/main.js",
    "clean": "rimraf coverage build tmp",
    "prebuild": "npm run lint",
    "build": "tsc -p tsconfig.json",
    "build:watch": "tsc -w -p tsconfig.json",
    "build:release": "npm run clean && tsc -p tsconfig.release.json",
    "lint": "eslint . --ext .ts",
    "lint:fix": "eslint . --ext .ts --fix",
    "test": "jest --coverage",
    "test:watch": "jest --watch"
  },
  "author": "blakedietz",
  "license": "Apache-2.0",
  "dependencies": {
    "puppeteer": "^13.5.2",
    "tslib": "~2.3.1"
  }
}
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ES2020",
    "moduleResolution": "node",
    "rootDir": ".",
    "outDir": "build",
    "allowSyntheticDefaultImports": true,
    "allowJs": true,
    "importHelpers": true,
    "alwaysStrict": true,
    "sourceMap": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitAny": false,
    "noImplicitThis": false,
    "strictNullChecks": false
  },
  "include": ["src/**/*", "__tests__/**/*"]
}
```

### File that was failing

```typescript
import { scrape } from "./example-path/index"

// ...
```

## Reproduction

```bash
node ./build/src/main.js

internal/process/esm_loader.js:74
    internalBinding('errors').triggerUncaughtException(
                              ^

Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/Users/blakedietz/projects/<redacted>/build/src/<redacted>/index' imported from /Users/blakedietz/projects/blakedietz/<redacted>/build/src/main.js
    at finalizeResolution (internal/modules/esm/resolve.js:271:11)
    at moduleResolve (internal/modules/esm/resolve.js:694:10)
    at Loader.defaultResolve [as _resolve] (internal/modules/esm/resolve.js:784:11)
    at Loader.resolve (internal/modules/esm/loader.js:100:40)
    at Loader.getModuleJob (internal/modules/esm/loader.js:246:28)
    at ModuleWrap.<anonymous> (internal/modules/esm/module_job.js:47:40)
    at link (internal/modules/esm/module_job.js:46:36) {
  code: 'ERR_MODULE_NOT_FOUND'
}
```

### Error

## Solutions

Either of the following solutions will fix your problem.

### Add a js file extension (even though the source is .ts)

```typescript
// src/main.ts
import { scrape } from "./example-path/index.js"

// ... rest of file
```

```typescript
// src/example-path/index.ts
export function scrape() {
  //...
}
//...
```

### Pass experimental flags to node

```bash
node --experimental-modules --es-module-specifier-resolution=node ./build/src/main.js
```
