---
title: httpie
description: command-line HTTP client
---

### Install

```bash
brew install httpie
```

### Examples

```bash
http google.com
https scottvoyles.com
http :3000                  # http localhost:3000

# Submit form
```

### Forms

```bash
http -f POST httpbin.org/post name="Scott Voyles"
```

## Reference

[https://httpie.org/docs](https://httpie.org/docs)
