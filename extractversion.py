import requests
from bs4 import BeautifulSoup

# Step 1: Website se Data Fetch Karo
url = "https://www.python.org/doc/versions/"
response = requests.get(url)

# Step 2: Agar Website Accessible Hai To Data Parse Karo
if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Step 3: Latest Version Extract Karo
    latest_version = soup.find("span", class_="release-number")  # ✅ Sirf Version Extract Kar Raha Hai
    
    # Step 4: Agar Data Mila To Print Karo
    if latest_version:
        print("Latest Python Version:", latest_version.text.strip())  # ✅ Clean Output
    else:
        print("Data not found.")
else:
    print("Failed to retrieve the webpage")
