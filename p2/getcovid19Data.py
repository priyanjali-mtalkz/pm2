import requests
import datetime
from bs4 import BeautifulSoup
from flask import Flask

app = Flask(__name__)

@app.route('/get/data')
def coviddata():
    try:
        url = "https://www.worldometers.info/coronavirus/"
        req = requests.get(url)
        bsObj = BeautifulSoup(req.text,"html.parser")
        data = bsObj.find_all("div",class_ = "maincounter-number")
        numTotalCase = data[0].text.strip().replace(',','')
        numDeaths = data[1].text.strip().replace(',','')
        numRecovered = data[2].text.strip().replace(',','')
        timeNow = datetime.datetime.now()
        with open('world_corona_case.csv','a') as fd:
            fd.write(f"{timeNow},{numTotalCase},{numDeaths},{numRecovered};")
        print(f"Successfully store COVID-19 data at {timeNow}")
    except Exception as e:
        print("---ERROR----",e)
    return "Data being saved"

if __name__ == '__main__':
    app.run(debug = True)