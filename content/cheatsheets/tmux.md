---
title: tmux
description: terminal, workflow
---

### Aliases

```bash
# used outside tmux
tnew              # tmux new-session -s
ta                # tmux attach -t
td                # tmux detach -t
```

### General

```bash
Ctrl+Space        # prefix

prefix ?          # list shortcuts
prefix t          # big clock
:                 # prompt

# Reload Config
tmux source-file ~/.tmux.conf
```

### Sessions

```bash
tmux              # new indexed session
tmux new          # new indexed session
tmux new -s foo   # new session named foo
tmux ls           # list current tmux sessions
prefix s          # list current tmux sessions
prefix $          # rename session
prefix d          # detach session
prefix (          # move to previous session
prefix )          # move to next session
tkill             # kill session
```

### Windows

```bash
prefix w          # list windows
prefix c          # create window
prefix n          # next window
prefix p          # previous window
prefix ,          # rename window
prefix f          # find window
prefix .          # move window
:movew<CR>        # move window to next unused number
prefix &          # kill window
```

### Panes

```bash
prefix |          # vertical split
prefix -          # horizontal split

# Vim-like key bindings for pane navigation (default uses cursor keys)
prefix h          # move left to pane
prefix j          # move down to pane
prefix k          # move up to pane
prefix l          # move right to pane

# Resizing panes (mouse also works)
prefix Left       # resize pane to the left
prefix Right      # resize pane to the right
prefix Down       # resize pane to the bottom
prefix Up         # resize pane to the top
```

<br />

## Reference

[https://github.com/tmux/tmux/wiki](https://github.com/tmux/tmux/wiki)
