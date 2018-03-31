<link rel="stylesheet" href="{{baseUrl}}/css/main.css">

<include src="../common/header.md" />

<div class="website-content">

# Command: include and render

MarkBind provides `include` and `render` commands to allow you include the "included" fragments in a file and render the file into a HTML document.

## Usage
Print the result to terminal.
```
$ markbind include example/test.md
```

Save the result to `test_out.md`. (using UNIX redirect output)
```
$ markbind include example/test.md > test_out.md
```

Save the result to `test_out.md`. (Using `--output` option)
```
$ markbind include example/test.md -o test_out.md
```

Render a file after it is `included`. (rendered to HTML content)
```
$ markbind render example/test_out.md -o test.html
```

## Example
Suppose you have two files, `index.md` and `include.md`, their contents are:

index.md
```
What the fox say?
<include src="include.md"/>
```

include.md
```
Joff-tchoff-tchoffo-tchoffo-tchoff!
Tchoff-tchoff-tchoffo-tchoffo-tchoff!
Joff-tchoff-tchoffo-tchoffo-tchoff!
```

Next, you could run `$ markbind include index.md -o index_out.md` to check contents of `include.md` are included in the generated `index_out.md` file.
```
What the fox say?
<div>

Joff-tchoff-tchoffo-tchoffo-tchoff!
Tchoff-tchoff-tchoffo-tchoffo-tchoff!
Joff-tchoff-tchoffo-tchoffo-tchoff!

</div>
```
(**Notice:** you may notice the included contents are wrapped by `<div>` tag. As we support writing HTML in the markdown, and including HTML in a markdown file, this is to make sure the rendered result are consistent)

Now, you can render it with `$ markbind render index_out.md -o index.html`.

<include src="../common/userGuideSections.md" />

</div>
