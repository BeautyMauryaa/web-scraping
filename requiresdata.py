import requests
from bs4 import BeautifulSoup
url="https://www.webtoons.com/en/"

response=requests.get(url)
if response.status_code==200:
    soup=BeautifulSoup(response.text,'html.parser')
    title=soup.find("title").text.strip()

    latest_version=soup.find_all("span",class_="release-number")
print("title is:",title)