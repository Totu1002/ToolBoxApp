import os
import glob
import shutil
import string
import random
import pprint #use...?
from PIL import Image

class  RandomRenameTool:
  def set_env(self):
    # target path
    target_path = input('Please enter the target path : ')

    # target files
    target_files = glob.glob(os.path.join(target_path + '/*'))
    target_files.sort()
    pprint.pprint(target_files)
    return target_path,target_files

  #random rename proc
  def random_rename(self,target_files,tarfet_path,length):
    for f in target_files:
      new_name = ''.join(random.choices(string.ascii_letters + string.digits, k=length))
      root, ext = os.path.splitext(f)
      #print(ext)
      re_name = new_name + ext
      #print(re_name)
      #print(os.path.isdir(f))
      if not os.path.isdir(f):
        print(f + ' => ' + tarfet_path + '/' + re_name)
        os.rename(f,tarfet_path + '/' + re_name)

  def run(self):
    env_data = self.set_env()
    target_path = env_data[0]
    target_files = env_data[1]
    self.random_rename(target_files,target_path,8)

if __name__ == "__main__":
  random_rename_tool = RandomRenameTool()
  random_rename_tool.run()