import os

# Path to your folder
folder_path = (
    r"C:\Users\AGFirass\Documents\GitHub\teachwithoussama.github.io\src\assets\reviews"
)

# List all files in the folder
files = os.listdir(folder_path)

# Sort the files (optional: alphabetically)
files.sort()

# Rename each file sequentially
for i, filename in enumerate(files, start=1):
    # Get file extension
    ext = os.path.splitext(filename)[1]  # keeps .jpg or .png
    # New name
    new_name = f"review{i}{ext}"
    # Full paths
    old_path = os.path.join(folder_path, filename)
    new_path = os.path.join(folder_path, new_name)
    # Rename
    os.rename(old_path, new_path)
    print(f"Renamed '{filename}' to '{new_name}'")

print("All files renamed successfully!")
