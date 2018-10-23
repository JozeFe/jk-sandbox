# Git commands

Local Repository config
```bash
# show local repo config
git config --local -l

# credentials, name, email
git config credential.helper store
git config user.name "name"
git config user.email "email@example.com"

git pull / push # to provoke credential setup
```

autocrlf global configuration option 
```bash
# (Mac & Linux)
git config --global core.autocrlf input
# (Windows)K
git config --global core.autocrlf true
```
