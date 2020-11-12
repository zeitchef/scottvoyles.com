---
title: vim
description: editor, terminal
---

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
