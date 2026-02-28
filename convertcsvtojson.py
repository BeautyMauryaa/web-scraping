import pandas as pd
import json

csv_file="bbc_headlines.csv"
json_file="bbc_headlines.json"

df=pd.read_csv(csv_file)

df.to_json(json_file,orient="records",indent=4)
print(f"json file '{json_file}'successfuly created!")