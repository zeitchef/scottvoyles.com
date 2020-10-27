---
title: tmuxinator
description: tmux, terminal, workflow
---

### Install

```bash
gem install tmuxinator

alias mux='tmuxinator'
```

### Usage

```bash
mux ls                      # List all projects
mux new [project]           # Create new project
mux edit [project]          # Edit existing project
mux copy [existing] [new]   # Copy existing project
mux delete [project]        # Delete project

mux implode                 # remove all mux configs, aliases, scripts
mux doctor                  # identify problems with config
mux help
mux debug [project]         # show shell commands for project
mux version
```

<br />

## Reference

[https://github.com/tmuxinator/tmuxinator](https://github.com/tmuxinator/tmuxinator)
