from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup

#Chrome Driver Setup
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

# Webpage Open Karo
driver.get("https://www.amazon.in/dp/B0BDK62PDX")  

#Page Source Lo
html_content = driver.page_source  

#HTML Parse Karo
soup = BeautifulSoup(html_content, "html.parser")

#Sabhi script Tags Extract Karo
scripts = soup.find_all("script")  

#JavaScript Code Ko File Me Save Karo
with open("extracted_javascript.js", "w", encoding="utf-8") as file:
    for script in scripts:
        if script.string:  # Agar script ke andar content hai
            file.write(script.string + "\n\n")

print("JavaScript Code Extracted Successfully!")

#Browser Band Karo
driver.quit()
