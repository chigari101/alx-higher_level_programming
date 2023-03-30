#!/bin/bash
# Make POST request, display response
curl -s "$1" -X POST -d "email=hr@gmail.com&subject=I will always be here for PLD"
