from selenium import webdriver  
from selenium.webdriver.chrome.service import Service  
from webdriver_manager.chrome import ChromeDriverManager  
from selenium.webdriver.common.by import By  
from selenium.webdriver.common.keys import Keys  
import time  

# Chrome Driver Setup  
service = Service(ChromeDriverManager().install())  
driver = webdriver.Chrome(service=service)  

#Amazon Open Karo  
driver.get("https://www.amazon.in/")  
time.sleep(2)  # Page load hone ka wait

# Search Box Find Karo Aur 'Laptop' Search Karo  
search_box = driver.find_element(By.ID, "twotabsearchtextbox")  
search_box.send_keys("Laptop")  
search_box.send_keys(Keys.RETURN)  
time.sleep(3)  # Results load hone do

#Saare Products Ke Elements Dhundo  
products = driver.find_elements(By.XPATH, "//div[@data-component-type='s-search-result']")  

#Pehle 5 Products Ka Data Nikalo  
for product in products[:5]:  
    try:  
        title = product.find_element(By.XPATH, ".//span[@class='a-size-medium a-color-base a-text-normal']").text  
    except:  
        title = "No Title Found"  

    try:  
        price = product.find_element(By.XPATH, ".//span[@class='a-price-whole']").text  
    except:  
        price = "No Price Found"  

    try:  
        rating = product.find_element(By.XPATH, ".//span[@class='a-icon-alt']").text  
    except:  
        rating = "No Rating Found"  

    print(f"Product: {title}")  
    print(f"Price: ₹{price}")  
    print(f"Rating: {rating}")  
    print("-" * 50)  

#Browser Band Karo  
driver.quit()  
