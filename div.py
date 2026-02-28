from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup

# Chrome Driver Setup
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

#  Webpage Open Karo
driver.get("https://www.amazon.in/dp/B0BDK62PDX")  

#  Page Source Lo
html_content = driver.page_source  

#  HTML Parse Karo
soup = BeautifulSoup(html_content, "html.parser")

# Specific `<div>` Extract Karo (Example: Product Description Div)
product_desc_div = soup.find("div", {"id": "feature-bullets"})

if product_desc_div:
    print(" Extracted <div> HTML:\n", product_desc_div.prettify())

# Browser Band Karo
driver.quit()
