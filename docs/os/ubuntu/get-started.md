# Get Started

- https://github.com/JREAM/ubuntu-cheatsheet
- https://github.com/sudheerj/Linux-cheat-sheet
- https://gist.github.com/miranda-zhang/c580cc45bed3317501a6071726d929c0
- https://www.linuxtrainingacademy.com/linux-commands-cheat-sheet/

## Install basic packages

```shell
# Basic
sudo apt install net-tools telnet micro

# ohmyzsh
sudo apt install zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
sed -i 's~plugins=(~plugins=(zsh-autosuggestions ~g' ~/.zshrc

# zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
sed -i 's~plugins=(~plugins=(zsh-syntax-highlighting ~g' ~/.zshrc
```


```shell
# Add lines to files
echo "vsftpd test file" | sudo tee /home/sammy/ftp/files/test.txt
```

## NodeJS
### Installation
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# Add following lines to ~/.zshrc and ~/.bashrc. Restart WSL to apply
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm


# Get a list of all available NodeJs versions
nvm ls available # windows
nvm ls-remote  # MacOs/Linux

# Install latest NodeJs version
nvm install node
# Install latest LTS Release
nvm install --lts
# Install particular NodeJs version
nvm install 12.13.1
# Change default NodeJS version
nvm alias default 16
# UnInstall the multiple NodeJs version
nvm uninstall 8.11.1
```

### Switching the NodeJs version
```shell
nvm ls
nvm use 12.13.1

# Run to specific NodeJs version, without switching
nvm run 8.11.1 app.js
nvm exec 8.11.1 node app.js
```

## Disk Space
```shell
df -h
df -h ~/VNTT
```

## Check IP
```shell
curl ifconfig.me
```

## GUI
- https://docs.microsoft.com/en-us/windows/wsl/tutorials/gui-apps
- 
## User
Adding a User
```shell
# Adding a New User to the System
sudo adduser newuser

# Adding the User to the sudo Group
sudo usermod -aG sudo newuser

# Testing sudo Access
sudo su - newuser
```

Deleting a User
```shell
sudo deluser newuser

sudo deluser --remove-home newuser
```

Assign a login password for the new user
```shell
sudo passwd newuser
```

Checking User

```shell
sudo grep newuser /etc/passwd
```
