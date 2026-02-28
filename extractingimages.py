import requests
from bs4 import BeautifulSoup

url = "https://www.amazon.in/"
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
}
response = requests.get(url, headers=headers)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')

    images = soup.find_all("img",src=True)
    
    if not images:
        print("No images found on the webpage!")
    else:
        image_links = [
            img["src"] if img["src"].startswith("http") else "https://www.amazon.in" + img["src"]
            for img in images
        ]
        
        print("\nExtracted image links:")
        for img_link in image_links[:5]:  # Printing only first 5 links
            print(img_link)
else:
    print("Failed to retrieve the webpage")
