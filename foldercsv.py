import requests
from bs4 import BeautifulSoup
import csv

# BBC News URL
url = "https://www.bbc.com/news"

# Headers to avoid blocking
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
}

# Request the page
response = requests.get(url, headers=headers)

# Check if request is successful
if response.status_code == 200:
    print("✅ Successfully fetched the webpage!")
    
    # Parse the HTML
    soup = BeautifulSoup(response.text, "html.parser")

    # Extract headlines (Check correct HTML structure)
    headlines = soup.find_all("h3")  # BBC mostly uses <h3> for headlines

    # Check if headlines are found
    if headlines:
        print(f"🔹 Found {len(headlines)} headlines!")

        # Save to CSV file
        with open("bbc_headlines.csv", "w", newline="", encoding="utf-8") as file:
            writer = csv.writer(file)
            writer.writerow(["Headline"])  # CSV Header
            for headline in headlines[:10]:  # Save only top 10
                writer.writerow([headline.get_text(strip=True)])

        print("✅ BBC News Headlines successfully saved in 'bbc_headlines.csv'!")
    else:
        print("⚠ No headlines found! BBC may have changed their website structure.")
else:
    print(f"❌ Failed to fetch webpage. Status Code: {response.status_code}")
