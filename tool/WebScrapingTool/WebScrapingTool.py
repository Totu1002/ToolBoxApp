# -*- coding: utf-8 -*-
# url
from email.quoprimime import header_decode
import requests 
# html perse
from bs4 import BeautifulSoup 
#folder name→day_time
import datetime 
#make dir
import os
#time.sleep
import time
#path error
from urllib.parse import urljoin

class WebScrapingTool:
	def set_env():
		#Test URL
		#target_url = "https://news.yahoo.co.jp/'"
		target_url = input("INPUT URL : ")
		
		#UserAgent:FireFox
		header = {"User-Agent" : "Mozilla/5.0"}

		#img list
		#images = []
		return target_url,header
	
	def download_images(self,target_url,header):
		images = []
		#URL perser
		soup = BeautifulSoup(requests.get(self.target_url,headers=self.header).content,'lxml')

		for link in soup.find_all("img"):
			src = urljoin(self.target_url,link.get("src")) #←←←fix error code
			if "jpg" in src:
				images.append(src)
			elif "png" in src:
				images.append(src)
			elif "gif" in src:
				images.append(src)
			
			return images
    
	def save_images(self,images):
		#リストに値がないときメッセージ出力
		if len(images) == 0:
			print("Warning !! Error code !!","[images] has no data")
		else:
			#make folder
			path = "../../scraping_result/"
			now = datetime.datetime.now()
			dirname = "img_" + now.strftime("%Y%m%d_%H%M%S")
			#DEBUG
			print(dirname)
			os.makedirs(os.path.join(path,dirname),exist_ok=True)
			
			for link in images:
				re = requests.get(link)
				print("Download:",link)
				with open(os.path.join(path,dirname,link.split("/")[-1]),"wb") as f: 
					f.write(re.content)
					time.sleep(1)

if __name__ == "__main__":
	web_scraping_tool = WebScrapingTool()
	env_data = web_scraping_tool.set_env()
	images = web_scraping_tool.download_images(env_data[0],env_data[1])
	web_scraping_tool.save_images(images)