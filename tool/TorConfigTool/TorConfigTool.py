import subprocess
import platform
from . import ShowConfigDetail

class TorConfigTool:
	# TODO
  user = ""
  group = ""
  
  def set_env(self,src_file):
    # Source path set valiable
    src_path = "config/"
    dst_file = "torrc"
    
    # Destinationpath set valiable
    # get platform os
    pf = platform.system()
    print(pf)
    if pf == 'Windows':
        print('on Windows')
        # TODO path要確認
        #windows用path
        #dst_path = "..¥Browser¥TorBrowser¥Data¥Tor¥"
    elif pf == 'Darwin':
        print('on Mac')
        #Mac用path
        dst_path = "/Users/totu/Library/Application Support/TorBrowser-Data/Tor/"
        #dst_path =  "/Applications/Tor Browser.app/Contents/Resources/TorBrowser/Tor/torrc-defaults"
    elif pf == 'Linux':
        print('on Linux')
        #Linux用path
        #dst_path = "/etc/tor/"
        dst_path = "/home/pr0wler/.local/share/torbrowser/tbb/x86_64/tor-browser_en-US/Browser/TorBrowser/Data/Tor/"
    
    input_config = src_path + src_file
    output_config = dst_path + dst_file
    print(output_config)
    return input_config,output_config

  def setting_torrc(self,input_config,output_config):
    del_cmd = "rm -rf " + output_config
    set_cmd = "cp " + input_config + " " + output_config
    print(del_cmd)
    print(set_cmd)
    subprocess.run(del_cmd,shell=True)
    subprocess.run(set_cmd,shell=True)

  def chenge_owner(self,output_config):
    cmd = "chown " + self.user + ":" + self.group + " " + output_config
    subprocess.run(cmd,shell=True)

  def show_conf_now(self,output_config):
    cmd = "cat " + output_config
    subprocess.run(cmd,shell=True)

  def show_conf(self,input_config):
    cmd = "cat " + input_config
    subprocess.run(cmd,shell=True)
  
  def run(self):
    menu_msg = """=============== MENU ===============
Please select a batch file to execute
=======================================
[0]torrc_level0
setting[entry:{jp}only,include:{jp}only,exit:{jp}only]

[1]torrc_level1
setting[entry:{jp}only,include:1hop country,exit:{jp}only]

[2]torrc_level2
setting[entry:{jp}only,include:1hop country,exit:1hop country]

[3]torrc_level3
setting[entry:1hop country,include:1hop country,exit:1hop country]

[4]torrc_level4
setting[entry:tor default,include:tor default,exit:tor default]

[5]torrc_5eyes
setting[exclude:5eyes]

[6]torrc_9eyes
setting[exclude:9eyes]

[7]torrc_14eyes
setting[exclude:14eyes]

[8]torrc_41eyes
setting[exclude:41eyes]

[9]torrc_levelMAX
setting[exclude:41eyes + dangerous country]

[10]torrc_levelCustom
setting[exclude:14eyes + mycountry + EntryGuargs 15]

[s]:Show running config
Check the current settings .

[d]:Return to default config

[h]:View config details.

[q]:Cancel selection
======================================="""
    print(menu_msg)

    while True:
      num = input('Please enter the menu number : ')
      print("Selected menu number : " + num)
      if num == "0":
        src_file = "torrc_level0.txt"
        env_data = self.set_env(src_file)
        input_config = env_data[0]
        output_config = env_data[1]
        self.setting_torrc(input_config,output_config)
        self.chenge_owner(output_config)
        break
      elif num == "1":
        src_file = "torrc_level1.txt"
        self.setting_torrc(src_file)
        self.chenge_owner()
        break
      elif num == "2":
        src_file = "torrc_level2.txt"
        self.setting_torrc(src_file)
        self.chenge_owner()
        break
      elif num == "3":
        src_file = "torrc_level3.txt"
        self.setting_torrc(src_file)
        self.chenge_owner()
        break
      elif num == "4":
        src_file = "torrc_level4.txt"
        self.setting_torrc(src_file)
        self.chenge_owner()
        break
      elif num == "5":
        src_file = "torrc_5eyes.txt"
        self.setting_torrc(src_file)
        self.chenge_owner()
        break
      elif num == "6":
        src_file = "torrc_9eyes.txt"
        self.setting_torrc(src_file)
        self.chenge_owner()
        break
      elif num == "7":
        src_file = "torrc_14eyes.txt"
        self.setting_torrc(src_file)
        self.chenge_owner()
        break
      elif num == "8":
        src_file = "torrc_41eyes.txt"
        self.setting_torrc(src_file)
        self.chenge_owner()
        break
      elif num == "9":
        src_file = "torrc_levelMax.txt"
        self.setting_torrc(src_file)
        self.chenge_owner()
        break
      elif num == "10":
        src_file = "torrc_levelCustom.txt"
        self.setting_torrc(src_file)
        self.chenge_owner()
        break
      elif num == "d":
        src_file = "torrc_.txt"
        self.setting_torrc(src_file)
        self.chenge_owner()
        break
      elif num == "s":
        self.show_conf_now()
        break
      elif num == "h":
        show_config_detail = ShowConfigDetail.ShowConfigDetail()
        show_config_detail.run()
        break
      elif num == "q": 
        print("--- Quit ---")
        break
      else:
        print("--- INPUT ERROR ---")

    print("--- Running configuration ---")
    self.show_conf_now()