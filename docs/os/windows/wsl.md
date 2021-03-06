# WSL

## Enable Windows Subsystem for Linux system feature

## Installation via Microsoft Store
Enable Windows Subsystem for Linux system feature

Open PowerShell as Administrator and run the following command to enable WSL feature:
```shell
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```

Download the latest package: https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi and install
```shell
wsl --set-default-version 2
```
Install Ubuntu from Microsoft Store and setup
Check Ubuntu verion
```shell
wsl -l -v
wsl
lsb_release -a
```

## Install Ubuntu on a Non-System Drive
https://kontext.tech/article/308/how-to-install-windows-subsystem-for-linux-on-a-non-c-drive

Download a Linux distro

```shell
mkdir -p D:\Programs\WSL
cd D:\Programs\WSL

Invoke-WebRequest -Uri https://aka.ms/wslubuntu -OutFile Ubuntu.appx -UseBasicParsing

# Rename the downloaded file
move .\Ubuntu.appx .\Ubuntu.zip

# Extract the zip to Ubuntu folder
Expand-Archive .\Ubuntu.zip
```

The following distros are available:
- [Ubuntu](https://aka.ms/wslubuntu)
- [Ubuntu 20.04](https://aka.ms/wslubuntu2004)
- [Ubuntu 20.04 ARM](https://aka.ms/wslubuntu2004arm)
- [Ubuntu 18.04](https://aka.ms/wsl-ubuntu-1804)
- [Ubuntu 18.04 ARM](https://aka.ms/wsl-ubuntu-1804-arm)
- [Ubuntu 16.04](https://aka.ms/wsl-ubuntu-1604)
- [Debian GNU/Linux](https://aka.ms/wsl-debian-gnulinux)
- [Kali Linux](https://aka.ms/wsl-kali-linux-new)
- [SUSE Linux Enterprise Server 12](https://aka.ms/wsl-kali-linux-new)
- [SUSE Linux Enterprise Server 15 SP2](https://aka.ms/wsl-SUSELinuxEnterpriseServer15SP2)
- [SUSE Linux Enterprise Server 15 SP3](https://aka.ms/wsl-SUSELinuxEnterpriseServer15SP3)
- [openSUSE Tumbleweed](https://aka.ms/wsl-opensuse-tumbleweed)
- [openSUSE Leap 15.3](https://aka.ms/wsl-opensuseleap15-3)
- [openSUSE Leap 15.2](https://aka.ms/wsl-opensuseleap15-2)
- [Oracle Linux 8.5](https://aka.ms/wsl-oraclelinux-8-5)
- [Oracle Linux 7.9](https://aka.ms/wsl-oraclelinux-7-9)
- [Fedora Remix for WSL](https://github.com/WhitewaterFoundry/WSLFedoraRemix/releases/)

Or download via IDM: https://aka.ms/wslubuntu

```shell

# Go to Ubuntu folder
cd Ubuntu
.\Ubuntu2004.exe
```

## Move WSL 2 Safely to another Drive
1. Open a **PowerShell** with Admin access
2. Stop the particular WSL distribution
```shell
wsl -l -v
wsl -t Ubuntu
```
3. Export to some folder. (Here exporting Ubuntu as ubuntu-ex.tar to Z:wsl2)
```shell
mkdir -p D:\export
wsl --export Ubuntu "D:\export\ubuntu-ex.tar"
```
4. Unregister previous WSL installation
```shell
wsl --unregister Ubuntu
```
5. Create a new folder and import your WSL installation to that folder.
```shell
mkdir -p D:\Programs\WSL\Ubuntu
wsl --import Ubuntu "D:\Programs\WSL\Ubuntu" "D:\export\ubuntu-ex.tar"
```
6. Check after import is complete
```shell
wsl -l -v
```
7. Mark one of your WSL distribution as (default).
```shell
wsl -s Ubuntu
```
8. After exporting your default user will be set as root , to change it to your desired username, run following command
```shell
cd $env:USERPROFILE\AppData\Local\Microsoft\WindowsApps
ubuntu config --default-user ubuntu
```
9. Finally run wsl and you have successfully moved your WSL 2 installation to another drive.

## Cheatsheet

```shell
# To list installed distributions
wsl -l
wsl --list

# To list installed distributions along with its running status and wsl config being 1 or 2
wsl -l --verbose
wsl -l -v

# To run a specific distro
wsl -d distro_name
wsl --distribution distro_name

# To terminate/shutdown a specific distro
wsl -t distro_name_to_shutdown
wsl --terminate distro_name_to_shutdown

# To shutdown all disstros
wsl --shutdown

# Set specific distro as default
wsl -s my_default_distro
wsl --set-default my_default_distro

# To EXPORT a running distro as image
wsl --export distro_name_to_export windows_path\tar_file_name.tar

# To IMPORT an image as distro
wsl --import new_distro_name install_location_windows_path tar_file_name.tar --version wsl-version-1-or-2
wsl --import Ubuntu-20 D:\VMs\WSL\Ubuntu-20\ Ubuntu-20.04.tar --version 2 # Setting my secondary HDD as storate loc for new distro

# To UNREGISTER (also removes the its file storage) a distro
wsl --unregister distro_name_that_delete

# To run a WSL distro as the specified user.
wsl -u username -d distroname
wsl -u root -d Ubuntu-20.04

# To change the default user for a distribution
distributionName config --default-user Username
ubuntu config --default-user my_default_username
ubuntu2004.exe config --default-user johndoe # When you have Ubuntu 20.04 version installed from the Microsoft Store
```