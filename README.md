# Jupyter to Markdown

This is a vscode extension that converts Jupyter Notebook files (*.ipynb) to Markdown.

这是一个vscode扩展，可以将Jupyter Notebook文件（*.ipynb）转换为Markdown。

## Usage

Right-click the *.ipynb file and click "Convert To Markdown" to generate the *.md file in the current directory.

使用方法：右键 *.ipynb 文件，然后点击 "转换成Markdown" 即可在当前目录生成 *.md 文件。

## Requirements

This extension works by executing the following command: 

这个插件通过执行以下命令工作：

> `python -m jupyter nbconvert --to markdown "xx.ipynb"`

Therefore, Jupyter needs to be installed.

因此需要安装jupyter。

**Enjoy! 😀**

感谢使用^_^