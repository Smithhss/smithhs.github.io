---
title: 批量下载markdown中超链接图片，并修改markdown文件的python脚本
date: 2022-02-03 11:21:00
tags: Markdown
categories: 技术分享
cover: 'https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/markdownpic.png'
---




有时候，[markdown](https://so.csdn.net/so/search?q=markdown&spm=1001.2101.3001.7020)文件里，总会有超链接，而超链接总是不稳定的。比如使用mathpix对文档进行ocr时，会有如此。我们想将超链接中的图片保存到本地，就可以用如下脚本，同时替换markdown文件中的超链图片为本地图片。非常方便好用。

```python
import re
import requests
import os


def download_images(md_file_path, local_dir):
    with open(md_file_path, 'r', encoding='utf-8') as f:
        md_content = f.read()

    image_urls = re.findall(r'!\[.*?\]\((.*?)\)', md_content)
    local_urls = []

    if not os.path.exists(local_dir):
        os.makedirs(local_dir)

    for url in image_urls:
        img_data = requests.get(url).content
        clean_filename = re.sub(r'\W+', '', os.path.basename(url)) + '.jpg'
        local_file = os.path.join(local_dir, clean_filename)
        with open(local_file, 'wb') as handler:
            handler.write(img_data)
        local_urls.append(local_file)

    for original_url, local_url in zip(image_urls, local_urls):
        md_content = md_content.replace('(' + original_url + ')', '(' + local_url + ')')

    with open(md_file_path, 'w', encoding='utf-8') as f:
        f.write(md_content)

    # 使用方法：download_images('path/to/your/markdown.md', 'path/to/local/directory')


if __name__ == "__main__":
    # 将myFile.md中的超链接批量下载到images文件夹中
    # 并修改myFile.md中超链接图片，使其指向本地文件
    download_images('myFile.md', 'images')
```

> 要使用您提供的 download_images 函数，您需要确保几个条件已经满足：

1. Python 环境：确保您的计算机上安装了 Python。这个函数使用了 Python 的标准库 re, requests, os 和 urllib.parse，这些都是 Python 自带的，但 requests 库可能需要您通过 pip 安装。

2. 安装 requests 库：如果尚未安装 requests 库，请在命令行中运行 pip install requests 来安装它。

3. Markdown 文件：确保您有一个名为 myFile.md 的 Markdown 文件，该文件包含您想要下载的图片链接。这些链接应该遵循 Markdown 语法，即 ![alt text](image_url)。

4. 工作目录：确保您的 Python 脚本（假设保存为 download_images.py）与 myFile.md 位于相同的目录下，或者提供正确的相对路径或绝对路径到 myFile.md。

5. 执行脚本：在命令行中，导航到包含 download_images.py 文件的目录，并运行该脚本。

> 以下是如何在命令行中执行脚本的步骤（假设您已经安装了 Python 和 requests 库，并且您的脚本与 Markdown 文件在同一目录下）：

1. 打开命令行工具（在 Windows 上是 CMD 或 PowerShell，在 macOS 或 Linux 上是 Terminal）。
2. 使用 cd 命令导航到包含 download_images.py 和 myFile.md 的目录。
```bash
cd /path/to/your/directory
```
3. 运行 Python 脚本。
```bash
python download_images.py
```
如果您使用的是 Python 3（并且 python 命令默认指向 Python 2），则可能需要使用 python3 代替 python。

```bash
python3 download_images.py
```

> 执行脚本后，它会自动从 myFile.md 中提取所有图片链接，将它们下载到 images 文件夹中（如果该文件夹不存在，则会自动创建），并更新 myFile.md 文件中的图片链接，使其指向新下载的本地文件。

> 请注意，如果 Markdown 文件中的图片链接包含查询参数或锚点（例如 # 后面的部分），则这些部分将在生成的文件名中被忽略。此外，如果两个图片链接指向相同的 URL（但可能具有不同的查询参数或锚点），则它们将被下载为相同的本地文件名，这可能导致其中一个文件被覆盖。为了避免这种情况，您可能需要修改脚本以考虑这些因素或生成唯一的文件名。

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/markdownpic.png)