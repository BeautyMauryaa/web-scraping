import requests
from bs4 import BeautifulSoup
import os

url = "https://www.amazon.in/"
headers = {
    "User-Agent": "Mozilla/5.0"
}

# Fetch the webpage
response = requests.get(url, headers=headers)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, "html.parser")
    
    # Find all image tags
    images = soup.find_all("img")

    #folders 
    if not os.path.exists("downloading_images"):
        os.makedirs("downloading_images")
        print("\nDownloading images")

    for i, img in enumerate(images[:5]):  # Download first 5 images
        img_url = img.get("src")

        if img_url:
            # Handle relative URLs
            if img_url.startswith("//"):
                img_url = "https:" + img_url
            elif img_url.startswith("/"):
                img_url = url + img_url

            # Download image
            img_data = requests.get(img_url).content
            with open(f"image_{i+1}.jpg", "wb") as f:
                f.write(img_data)
            print(f"Downloaded image_{i+1}.jpg")

else:
    print("Failed to retrieve the webpage")
