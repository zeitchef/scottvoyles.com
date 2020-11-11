---
title: ssh
description: terminal
---

### Configuring multiple hosts

```bash[~/.ssh/config]
# Add keys to ssh-agent
AddKeysToAgent yes

# Azure
Host ssh.dev.azure.com
  IdentityFile ~/.ssh/browserwerk
  IdentitiesOnly yes
  UseKeychain yes

# Github
Host github.com
  User zeitchef
  IdentityFile ~/.ssh/id_rsa
  IdentitiesOnly yes
  UseKeychain yes
```
