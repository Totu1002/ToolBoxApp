# -*- coding: utf-8 -*-

# import するファイル名を記述(拡張子はいらない)
# import output
# output_text_class = output.output_class() # ファイル名.クラス名→インスタンス生成

from tool.WebScrapingTool.WebScrapingTool import WebScrapingTool
from tool.WgetTool.WgetTool import WgetTool
from tool.FirewallTool.FirewallTool import FirewallTool
from tool.IpChangeTool.IpChangeTool import IpChangeTool
from tool.MacChangeTool.MacChangeTool import MacChangeTool
#import tool.TorConfigTool.TorConfigTool
from tool.WiFiAnalayzerTool.WiFiAnalayzerTool import WiFiAnalayzerTool
from tool.FileEditTool.FileEditTool import FileEditTool

# TODO
"""
FileEditerToolに統一する
・ImgTool
  ・rename
  ・random_rename(auto path)
  ・random_rename(select path) <-RandomRenameTool
  ・resize
・RandomRenameTool
・CharacterConversionTool
"""

class MainControl:
    menu_msg = """
=== ToolBoxApp Select menu ===

[Download tools]
[1] : WebScrapingTool
[2] : WgetTool

[Configuration tools]
[3] : FireWallTool
[4] : IpChengerTool
[5] : MacChengerTool
[6] : TorConfigTool

[Convenient tools]
[7] : WiFiAnalyzerTool
[8] : FileEditTool

[*** Future release tools ***]
[] : TorScrapingTool
[] : NmapScanTool

[Others]
[h] : help
[q] : quit
 
==============================
"""
    help_msg = """
=== ToolBoxApp Select menu ===
[Download tools]
[1] : WebScrapingTool
対象URLを指定し画像ファイルをすべて取得する

[2] : WgetTool
対象URLを指定しサイト全体または、1階層のみを取得する

[Configuration tools]
[3] : FireWallTool
ファイアーウォールのON/OFF,設定投入を行う
(対応OS : Linux,Mac)

[4] : IpChengerTool
対象インターフェースを指定しIPアドレスを変更する
固定/自動による設定が可能

[5] : MacChengerTool
対象インターフェースを指定しMACアドレスを変更する

[6] : TorConfigTool
作成済み設定ファイルを読み込み、Tor Browserの接続ノード設定を変更する

[Convenient tools]
[7] : WiFiAnalyzerTool
周辺のWiFiをスキャンしリアルタイムに詳細を表示する

[8] : FileEditTool
・rename tool
・rename_random_auto tool
・rename_random_select tool
・resize tool
・file conversion tool
対象ファイルの文字コードを変更する

==============================
"""
    def run(self):
        print(self.menu_msg)
        select_num = input('Please enter the menu number : ')
        # [q]を選択して終了するまでループさせる(breakを入れない)
        while True:
            if select_num == '1':
                # [1] : WebScrapingTool
                # インスタンス = モジュール名.クラス名
                web_scraping_tool = WebScrapingTool.WebScrapingTool()
                print('Selected tool : ' + web_scraping_tool.__class__.__name__)
                web_scraping_tool.run()
                #break
            elif select_num == '2':
                # [2] : WgetTool
                wget_tool = WgetTool.WgetTool()
                print('Selected tool : ' + wget_tool.__class__.__name__)
                wget_tool.run()
                #break
            elif select_num == '3':
                # [3] : FireWallTool
                firewall_tool = FirewallTool.FirewallTool()
                print('Selected tool : ' + firewall_tool.__class__.__name__)
                firewall_tool.rin()
                #break
            elif select_num == '4':
                # [4] : IpChengerTool
                ip_chenger_tool = IpChangeTool.IpChangeTool()
                print('Selected tool : ' + ip_chenger_tool.__class__.__name__)
                ip_chenger_tool.run()
                #break
            elif select_num == '5':
                # [5] : MacChengerTool
                mac_chenger_tool = MacChangeTool.MacChangeTool()
                print('Selected tool : ' + mac_chenger_tool.__class__.__name__)
                mac_chenger_tool.run()
                #break
            elif select_num == '6':
            	# TODO [6] : TorConfigTool
                print('Selected tool : ')
                #break
            elif select_num == '7':
                wifi_analyzer_tool = WiFiAnalayzerTool.WiFiAnalayzerTool()
                print('Selected tool : ' + wifi_analyzer_tool.__class__.__name__)
                wifi_analyzer_tool.run()
                #break
            elif select_num == '8':
                # [8] : FileEditTool
                file_edit_tool = FileEditTool.FileEditTool()
                print('Selected tool : ' + file_edit_tool.__class__.__name__)
                file_edit_tool.run()
                #break
            elif select_num == 'h':
                print(self.help_msg)
                #break
            elif select_num == 'q':
                print('Exited from processing.')
                break
        print('All processing is completed.')


if __name__ == "__main__":
    main_control = MainControl()
    main_control.run()
