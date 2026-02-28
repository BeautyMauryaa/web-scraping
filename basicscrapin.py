import requests
from bs4 import BeautifulSoup

url = "https://www.python.org/downloads/windows/"  # Correct URL
response = requests.get(url)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')  # Fixed parser syntax
    print(soup.prettify())  # Output formatted HTML
else:
    print("Failed to retrieve the webpage")
