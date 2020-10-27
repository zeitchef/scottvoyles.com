---
title: vim
description: editor, terminal
---

### Marks

```vim
" setting marks
ma                " set/reset mark called `a` at current cursor position

" using marks
`a                " jump to positon
'a                " jump to line
d|c|y'a           " delete/change/yank from current line to mark a
d|c|y`a           " delete/change/yank from current cursor to mark a

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
