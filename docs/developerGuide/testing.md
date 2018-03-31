<link rel="stylesheet" href="{{baseUrl}}/css/main.css">

<include src="../common/header.md" />

<div class="website-content">

# Testing

Our test script does the following:

1. Lints the code for any code and style errors using ESLint
1. Builds a test site found in `test/test_site`
1. Compares the HTML files generated with the HTML files in `test/test_site/expected`

## Running tests

To execute the tests, simply run:

For Unix:
```
$ npm run test
```

For Windows users:
```
$ npm run testwin
```

## Updating Tests

When adding new features, updating existing features or fixing bugs, we will have to update our expected site to reflect the changes.

### Changes to existing features

Simply update the expected HTML files in `test/test_site/expected` to reflect the changes.

### New features

Add new site content into the `test/test_site` folder which accounts for the new feature. Ensure that the new content is included in the test site so that your feature will be tested when `markbind build` is run on the test site.
Additionally, remember to update the expected HTML files in `test/test_site/expected`.

## Using ESLint

Our projects follow a [coding standard](https://github.com/oss-generic/process/blob/master/docs/CodingStandards.adoc). Using a linter will help check and fix some of the code style errors in your code. It will save time for both you and your code reviewer. The linting tool we use is [ESLint](https://eslint.org/). Here is [gist](https://gist.github.com/nicholaschuayunzhi/bfe53dbb5f1a0f02d545d55956f9ab7e) with explanation the eslint rules chosen in markbind-cli.

### Installation

Install developer dependencies (ESLint, related plugins) in your cloned markbind and markbind-cli repositories.
```
$ npm install --only=dev
```
### Lint your code

Before making a commit/pull request, we highly recommend to lint your code.

To lint all files, run
```
$ npm run lint
```

You can add the `--fix` flag to correct any fixable style errors.
```
$ npm run lint --fix
```

To lint a specific file, go to the root directory of the cloned repo and run
```
$ ./node_modules/.bin/eslint path/to/specificfile.js
```

### Integration with Editors
ESLint has [integrations with popular editors](https://eslint.org/docs/user-guide/integrations). They offer features such as fix errors on save which will make developement more convenient.

<include src="../common/devGuideSections.md" />

</div>
