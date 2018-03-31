<link rel="stylesheet" href="{{baseUrl}}/css/main.css">

<include src="../common/header.md" />

<div class="website-content">

# Developer Guide

## Requirement
We expect contributors for *MarkBind* have the following knowledges:

- [x] JavaScript (ES6)
- [x] Node.js (LTS or higher)
- [x] HTML & CSS
- [x] Markdown
- [x] Command-line interface application

## Environment

The *MarkBind* project should be developed with Node.js v8 or higher.

We recommend you to use WebStorm for better development experience.

Use JS ES6 features if possible for better performance. e.g. Promise instead of callback.

## Project Structure
*MarkBind* project consists of three repos:

* [MarkBind](https://github.com/MarkBind/markbind):  the CLI application that accepts commands from users and uses the core library, that resolves the content include path, and the rendering of markdown contents, to parse and generate web pages.

  Stack used: *Node.js*

* [VueStrap library (forked version modified for MarkBind)](https://github.com/MarkBind/vue-strap): the UI components library used in *MarkBind* project. Users could use it in their contents to create complex and interactive structure.

  Stack used: *Vue.js*

### MarkBind
The main repository is split into two parts:
- Core Library
- CLI

#### MarkBind Core Library
The core library parses the given markdown file, process all the content include, and render all markdown code into HTML so that it can be displayed in browser.

All the core logic resides inside the `lib/parser.js` file. It exposed two important APIs: **include** and **render**.

*Include* and *render* will first parse the given file as a DOM tree, then recursively visit every node to check if it needs special handling.

In the include stage, it will check if the nodes will include new contents (for example, if it is an "include" tag (`<include>`), then load the file/content to be included into the current working context. For the new content included, the include step will be run through recursively until all the content to be included are resolved and loaded.

Render is similar to the include process, but it will render the content recursively to ensure all markdown are converted to HTML.

MarkBind uses [Markdown-It](https://github.com/markdown-it/markdown-it) to do the markdown parsing and rendering. There are also several customized Markdown-it plugins used in MarkBind, which is located inside the `lib/markdown-it/` directory.

#### MarkBind CLI
The CLI application handles the site generation logic. It contains the command handling logic, as well as the site and page models.

The site generation logic is as followed:

1. Read the project's `site.json` file to collect all pages that will be generated.
2. Create a site model, where the site's root path is where `site.json` is located. The site model knows all the pages it contains, as well as the static resources. Static resources, such as stylesheets and JavaScript libraries, will be scanned and filtered, and then copy to the generated site folder (`_site/`).
3. The site model will create different page models, and each page model will generate a HTML page file to designated file location by calling MarkBind core library's include and render API.

The generated page is rendered using [EJS](https://github.com/mde/ejs) and [nunjucks](https://mozilla.github.io/nunjucks/), and the page template could be found at `lib/template/page.ejs`.

Static assets of MarkBind, such as libraries and stylesheets, are located at `asset/` folder. They will be copied to the generated site  and used in the generated pages. For each version update of VueStrap, copied the built library file to overwrite the `asset/js/vue-strap.min.js`.

The CLI program is built using [commander.js](https://github.com/tj/commander.js/).

The auto deployment library used is [gh-pages](https://github.com/tschaub/gh-pages).

### VueStrap

The VueStrap library is [Bootstrap](getbootstrap.com/components/) components rewriting in [Vue.js](vuejs.org). We forked it from the original repo, and changed it based on our needs for educational websites.

You can find more information at the [VueStrap repo](https://github.com/MarkBind/vue-strap).

<include src="../common/devGuideSections.md" />

</div>
