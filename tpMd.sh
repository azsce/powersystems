#!/bin/zsh

# Check if directory path is provided
if [[ $# -eq 0 ]]; then
    echo "Please provide a directory path"
    exit 1
fi

directory="$1"

# Check if directory exists
if [[ ! -d "$directory" ]]; then
    echo "Directory does not exist: $directory"
    exit 1
fi

# Find and rename files without extension
find "$directory" -type f ! -name "*.*" -exec sh -c '
    for file do
        mv "$file" "$file.md"
        echo "Renamed: $file -> $file.md"
    done
' sh {} +