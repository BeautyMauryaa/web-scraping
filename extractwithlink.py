import requests #python lib which is used to send http request
from bs4 import BeautifulSoup #bs4:- its is module(part of beautifulsoup) and beautifulsoup:-python package for html and xml docm
#write the url
url="https://getbootstrap.com/docs/4.0/components/carousel/" #bootstrap link


#for fetch the html content
response=requests.get(url)  #eska kaam hai server se response store karna

if response.status_code==200: #return the status code and 200:- request successful
    soup=BeautifulSoup(response.text,'html.parser') #soup:- variables which store the output #beautifulsoup:-convert the html into structure from so that we can access the html tags


title=soup.title.text
print("website Title: ", title)

links=soup.find_all("a") #a:- hperlink
print("\nAll Links on the page:")
for link in links:
    href=link.get("href")
if href:
    print(href)