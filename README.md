# Jupyter to Markdown

This is a vscode extension that converts Jupyter Notebook files (*.ipynb) to Markdown.
> 这是一个vscode扩展，可以将Jupyter Notebook文件（*.ipynb）转换为Markdown。

## Usage 使用方法

Right-click the *.ipynb file and click "Convert To Markdown" to generate the *.md file in the current directory.
> 右键 *.ipynb 文件，然后点击 "转换成Markdown" 即可在当前目录生成 *.md 文件。

## Requirements 依赖环境

This extension works by executing the command: `python -m jupyter nbconvert --to markdown "xx.ipynb"`. Therefore, `jupyter` needs to be installed.
> 这个插件通过执行以下命令工作：`python -m jupyter nbconvert --to markdown "xx.ipynb"`,因此需要安装`jupyter`。

If the `nbconvert` dependency is missing, you also need to run the installation command:`pip install nbconvert`.
> 若缺少`nbconvert`依赖也需要执行安装命令：`pip install nbconvert`

**Enjoy! 😀**
> **感谢使用! 😀**