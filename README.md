# Syntax error on jest with @hookform/resolvers

Repository created for reproducing an issue testing RHF with validation resolvers. [Follow the discussion on Spectrum](https://spectrum.chat/react-hook-form/help/syntax-error-on-jest-with-hookform-resolvers~06bcdf90-feab-4576-bdbe-c36a5bcbbe54). Code hosted at [GitHub](https://github.com/fmoliveira/rhf-resolver-test-issue) and [CodeSandbox](https://codesandbox.io/s/rhf-resolver-test-issue-27u9g), but the issue is not reproduced reliably on CodeSandbox.

> TL;DR just run `yarn` and `yarn test` to reproduce my issue, make sure you have node v12 or later

The problem happens when I add the package `@hookform/resolvers` along with `joi` and setup a `joiResolver` (I've tried with `yup` too) on my `useForm` hook, the whole test suite falls apart and none of the tests will run anymore. I have the following error message on my test console:

```
Jest encountered an unexpected token

.../rhf-resolver-test-issue/node_modules/@hookform/resolvers/dist/joi.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){import { appendErrors, transformToNestObject, } from 'react-hook-form';
                                                                                             ^^^^^^
SyntaxError: Cannot use import statement outside a module
```

Apparently, the `import` statement from the package `@hookform/resolvers` is not being interpreted properly on Jest's environment. To me, it doesn't seem to be a problem with RHF, but rather something that's missing on my environment and preventing the @hookform/resolvers package to be interpreted properly in Jest's environment, but I've been unable to figure out what's behind that.

Any directions on helping me figure out what's happening is appreciated. Thanks a lot!

## System requirements

Node.js v12 or later

## How to run the tests and reproduce the issue

Install dependencies with `yarn` or `npm install`.

Run project with `yarn test` or `npm test`.

## How to run this project on the browser

Install dependencies with `yarn` or `npm install`.

Run project with `yarn start` or `npm start`.
