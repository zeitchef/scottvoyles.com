---
title: timetrap
description: cli, productivity, ruby
---
Timetrap is a simple command-line time tracker written in Ruby. It provides an easy to use command line interface for tracking what you spend your time on.

<br />

### General

```bash
tt                  # Aliased to timetrap
tt --help           # Get help
```

### Display

```bash
tt list             # List all sheets
tt display          # Show current sheet
tt now              # Show what you're currently working on
```

### Checking In/Out

```bash
tt sheet schoerke   # Check-in to sheet called 'schoerke'
tt in overture      # Create "overture" entry while checked into sheet
tt out              # Check out of current sheet

# Check in at 12:00 with a note
tt in --at "12:00" doing something

# Check out 1 hour ago
tt out --at "1 hour ago"
```

### Edit/Append

```bash
tt edit <entry>
  --append
```

<br />

## Reference
https://github.com/samg/timetrap
