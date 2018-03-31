<link rel="stylesheet" href="{{baseUrl}}/css/main.css">

<include src="../common/header.md" />

<div class="website-content">

# Publishing a new version

When you are ready to release a new version, run

```
$ npm version [<newversion>]
```

to create a new version, where the `newversion` argument should be a valid semver string (one of patch, minor, major, prepatch, preminor, premajor, prerelease).

After that, run

```
$ npm publish
```

to publish it to the NPM repository.

**NOTICE**: when you made changes to markbind core library and wish to use them in the next release of CLI program, don't forget to update the new version of the core library in the `package.json` of the CLI project.

<include src="../common/devGuideSections.md" />

</div>
