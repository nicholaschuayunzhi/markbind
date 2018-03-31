<link rel="stylesheet" href="{{baseUrl}}/css/main.css">

<include src="../common/header.md" />

<div class="website-content">

# Setting up for Development

1. Fork and clone the [repo](https://github.com/MarkBind/markbind).

2. In the folder of your cloned repos, run

    ```
    $ npm install
    ```

    to install the project dependencies.

3. To make sure you are using the cloned CLI program in your own terminal/console, in the cloned repo, run

	```
	$ npm link
	```

    to bind the local markbind CLI program to the cloned development version.

4. Now you can start making changes.

<include src="../common/devGuideSections.md" />

</div>
