from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service

# Automatically install the latest compatible ChromeDriver
service = Service(ChromeDriverManager().install())

# Open Chrome
driver = webdriver.Chrome(service=service)
driver.get("https://www.google.com")

# Keep browser open for 5 seconds then close
import time
time.sleep(5)
driver.quit()

