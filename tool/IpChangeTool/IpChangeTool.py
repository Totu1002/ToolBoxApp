import LinuxIpChangeTool
import MacIpChangeTool
import platform

class IpChangeTool:
  def get_os(self):
    pf = platform.system()
    print(pf)
    if pf == 'Windows':
        print('on Windows')
    elif pf == 'Darwin':
        print('on Mac')
    elif pf == 'Linux':
        print('on Linux')
    return pf

  def run(self):
    platform = self.get_os()
    if platform == 'Windows':
      print('Processing for windows is not implemented.')
    elif platform == 'Darwin':
      mac_ip_change_tool = MacIpChangeTool.MacIpChangeTool()
      mac_ip_change_tool.run()
    elif platform == 'Linux':
      linux_ip_change_tool = LinuxIpChangeTool.LinuxIpChangeTool()
      linux_ip_change_tool.run()