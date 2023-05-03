#!/bin/bash
# a bash script that displays the size in bytes of the displayed content
curl -s "$1" | wc -c
