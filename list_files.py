import os

def list_files_and_directories():
    current_path = os.getcwd()  # Mevcut çalışma dizinini al
    print(f"Mevcut konum: {current_path}\n")
    print("Dosyalar ve klasörler:")
    
    for item in os.listdir(current_path):
        if os.path.isfile(item):
            print(f"Dosya: {item}")
        elif os.path.isdir(item):
            print(f"Klasör: {item}")

if __name__ == "__main__":
    list_files_and_directories()
