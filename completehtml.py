from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

# Chrome Driver Setup
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

#Webpage Open Karo
driver.get("https://www.amazon.in/dp/B0BDK62PDX")  

#Page Source Lo (Pura HTML)
html_content = driver.page_source  

# HTML Ko File Me Save Karo
with open("extracted_html.html", "w", encoding="utf-8") as file:
    file.write(html_content)

print("Complete HTML Extracted!")

# Browser Band Karo
driver.quit()
