---
title: vim
description: editor, terminal
---

### Scrolling

- Think of scrolling as moving the window over the text, not the text inside the window.

```vim
CTRL-E       " scroll forward one line
CTRL-D       " scroll forward half a screen
CTRL-F       " scroll forward a full screen

CTRL-Y       " scroll back one line
CTRL-U       " scroll back half a screen
CTRL-B       " scroll back a full screen

zt           " place cursor line at top of window
zz           " place cursor line at middle of window
zb           " place cursor line at bottom of window
```

[Scrolling around - vim.help](https://vim.help/03-moving-around#03.7)

<br />

### Marks

```bash
mx           # Toggle mark 'x' and display it in the leftmost column
dmx          Remove mark 'x' where x is a-zA-Z

m,           Place the next available mark
m.           If no mark on line, place the next available mark. Otherwise, remove (first) existing mark.
m-           Delete all marks from the current line
m<Space>     Delete all marks from the current buffer
]`           Jump to next mark
[`           Jump to prev mark
]'           Jump to start of next line containing a mark
['           Jump to start of prev line containing a mark
`]           Jump by alphabetical order to next mark
`[           Jump by alphabetical order to prev mark
']           Jump by alphabetical order to start of next line having a mark
'[           Jump by alphabetical order to start of prev line having a mark
m/           Open location list and display marks from current buffer

m[0-9]       Toggle the corresponding marker !@#$%^&*()
m<S-[0-9]>   Remove all markers of the same type
]-           Jump to next line having a marker of the same type
[-           Jump to prev line having a marker of the same type
]=           Jump to next line having a marker of any type
[=           Jump to prev line having a marker of any type
m?           Open location list and display markers from current buffer
m<BS>        Remove all markers
```

[vim-signature](https://github.com/kshenoy/vim-signature)<br />
[Using marks - vim wiki](https://vim.fandom.com/wiki/Using_marks)

<br />

### Macros

```vim
qq          " begin recording macro in register q
@q          " run macro in register q
Q           " my alias for @q
```

### Snippets

Use `honza/vim-snippets` since it includes Ultisnip snippets and many more.

```vim
"Plugins
Plug 'honza/vim-snippets'
Plug 'neoclide/coc-snippets' "prefer installing from coc settings

"Search snippets
ccl     "Coc-List and search snippets
```

[Snippets with CoC](https://www.chrisatmachine.com/Neovim/17-snippets/)

<br />

### Substitution

Find and replace in the current buffer:

```bash
:%s/find/replace/g
:%s/find/replace/gc
```

Find and replace in multiple buffers using argdo/bufdo:

```
:args `rg find -l`
:argdo %s/find/replace/g | update
```

Find and replace in multiple buffers using fzf:

```bash
:Rg
<Tab>
:cfdo %s/find/replace/ge | update
```

[Search and Replace in Multiple Files in Vim/Neovim](https://jdhao.github.io/2020/03/14/nvim_search_replace_multiple_file/)<br />
[Substitution](https://vim.help/10-making-big-changes#10.2)

<br />
