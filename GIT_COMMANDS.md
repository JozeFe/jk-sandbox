# Git commands

save username and password in local git repository 
```bash
git config credential.helper store
# provide user-name and password and those details will be remembered later
git pull
# username and password can be changed per repo in .git/config
```

autocrlf global configuration option 
```bash
# (Mac & Linux)
git config --global core.autocrlf input
# (Windows)
git config --global core.autocrlf true
```
