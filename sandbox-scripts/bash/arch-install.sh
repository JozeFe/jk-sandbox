#!/usr/bin/env bash

# verify boot mode
ls /sys/firmware/efi/efivars

# update system clock
timedatectl set-ntp true

# disk
lsblk
fdisk -l # ef - EFI, 83 - linux, 82 - Linux swap

mkfs.fat -F32 # efi
mkfs.ext4 /dev/sdax # root, home

# swap
mkswap /dev/sdax
swapon /dev/sdax

# mount
mount /dev/sdax # /mnt/boot, /mnt, /mnt/home

# wifi - iw
iw dev # get name
iw dev interface link # status

ip link set interface up # activate interface
ip link show interface # check <...,UP> value

iw dev interface scan | grep -A 30 your_network # discover access point
iw dev interface set type ibss # Set operating mode

# Connect to an access point
iw dev interface connect "your_essid" key 0:your_key
iw dev interface connect "your_essid" key d:2:your_key

# wpa - connect
wpa_supplicant -B -i interface -c <(wpa_passphrase ssid key)
dhcpcd

# installation
pacstrap /mnt base base-devel
