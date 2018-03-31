<link rel="stylesheet" href="{{baseUrl}}/css/main.css">

<include src="../common/header.md" />

<div class="website-content">

# Content authoring
### General writing guide
*MarkBind* allows you to mix HTML with Markdown code. Be sure to use new line to separate Markdown from HTML elements.
e.g.

Instead of

```
<Panel>
**Markdown** Content
</Panel>
```

use:

```
<Panel>

**Markdown** Content

</Panel>
```

Use `{{baseUrl}}` for absolute path reference of images and resource files so that the path could be handled correctly when deployed. The `{{baseUrl}}` is parsed from the project root (where `site.json` located).

### Supported Markdown Syntax

	MarkBind support the standard Markdown syntax. Read the [guide](https://guides.github.com/features/mastering-markdown/).

In addition, it supports:

* [Tables](https://help.github.com/articles/organizing-information-with-tables/)(GFM)
* [Strikethrough](https://help.github.com/articles/basic-writing-and-formatting-syntax/#styling-text)(GFM)
* [Emoji](https://www.webpagefx.com/tools/emoji-cheat-sheet/) shortcut is supported.

  `:EMOJICODE:`. For example, `:smile:` will be rendered as :smile:.

* [Task List](https://help.github.com/articles/basic-writing-and-formatting-syntax/#task-lists)
* Text Hightlight using `<mark>`

  `==Highlight Text==` => `<mark>Highlight Text</mark>`

* Text Underline using `<ins>`

  `++Underline Text++` => `<ins>Underline Text</ins>`

* Dimmed Text (Text with grey background)

  `%%Dimmed Text%%`

* Radio Button List

  ```
  - ( ) Option 1
  - (X) Option 2 (selected)
  ```

* Media block ([docs](https://github.com/rotorz/markdown-it-block-embed))

  ```
  @[youtube](lJIrF4YjHfQ)
  @[powerpoint](https://onedrive.live.com/embed?cid=A5AF047C4CAD67AB&resid=A5AF047C4CAD67AB%212070&authkey=&em=2) // the embed url from powerpoint online
  ```


### Use Components

To use an component, just type the correspond markup in your file. For example, to create a Panel, you just need to write:

```
<panel header="Click to expand" type="seamless">
	Panel Content.
</panel>
```

For a list of supported components, refer to the component [doc](https://markbind.github.io/vue-strap/).

### Include Contents

Being able to include different markdown file into the current context is another feauture of *MarkBind*. You can create a complex document from different content fragments by including them.

For detailed guide on using `<include>` tag for including contents, read the doc [here](includingContents.html).

<include src="../common/userGuideSections.md" />

</div>
