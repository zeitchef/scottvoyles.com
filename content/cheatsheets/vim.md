---
title: vim
description: editor, terminal
---

### Scrolling

- Think of scrolling as moving the window over the text, not the text inside the window.

```vim
CTRL-E            " scroll forward one line
CTRL-D            " scroll forward half a screen
CTRL-F            " scroll forward a full screen

CTRL-Y            " scroll back one line
CTRL-U            " scroll back half a screen
CTRL-B            " scroll back a full screen

zt                " place cursor line at top of window
zz                " place cursor line at middle of window
zb                " place cursor line at bottom of window
```

[Scrolling around - vim.help](https://vim.help/03-moving-around#03.7)

<br />

### Marks

```vim
nnoremap , `      " remap go to mark

" setting marks
m1                " set/reset mark called `1` at current cursor position

" using marks
,1                " jump to positon
'1                " jump to line
d|c|y'1           " delete/change/yank from current line to mark a
d|c|y`1           " delete/change/yank from current cursor to mark a

" viewing marks
:marks
:marks a,B

" deleting marks
:delm[arks]
```

[Using marks](https://vim.fandom.com/wiki/Using_marks)

<br />

### Macros

```vim
qq                " begin recording macro in register q
@q                " run macro in register q
Q                 " my alias for @q
```
