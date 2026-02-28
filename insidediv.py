from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup

# Chrome Driver Setup
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

#  Webpage Open Karo
driver.get("https://www.example.com")  

#  Page Source Lo
html_content = driver.page_source  

#  HTML Parse Karo
soup = BeautifulSoup(html_content, "html.parser")

#  Extract JavaScript Inside a Specific `<div>`
div = soup.find("div", {"class": "product-details"})  # Class ya ID ke basis pe filter karo

if div:
    script = div.find("script")
    if script:
        print("Extracted JavaScript:\n", script.string)

#  Browser Band Karo
driver.quit()
