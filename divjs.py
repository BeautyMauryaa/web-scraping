from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup

#  Chrome Driver Setup
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

#  Webpage Open Karo
driver.get("https://www.amazon.in/dp/B0BDK62PDX")  

# Page Source Lo
html_content = driver.page_source  

# HTML Parse Karo
soup = BeautifulSoup(html_content, "html.parser")

# Extract `<div>` and its JavaScript Attributes
div = soup.find("div", {"id": "feature-bullets"})

if div:
    # JavaScript Attributes extract karo (Example: data-* attributes, onclick)
    js_attributes = {attr: div[attr] for attr in div.attrs if attr.startswith("data-") or attr == "onclick"}
    print(" JavaScript Attributes:\n", js_attributes)

# Browser Band Karo
driver.quit()
