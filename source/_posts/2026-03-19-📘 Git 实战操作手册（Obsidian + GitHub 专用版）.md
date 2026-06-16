---
title: 📘 Git 实战操作手册（Obsidian + GitHub 专用版）
date: 2026-03-19 19:26:47
tags:
  - 项目
  - 实战
categories: 技术分享
cover: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&q=80'
---


# Git 实战操作手册

## 一、基础概念

Git 是一个版本控制工具，用来：

- 记录文件历史
    
- 支持回滚
    
- 多设备同步
    

核心三层：

工作区（Working Directory）  
→ 暂存区（Stage）  
→ 仓库（Repository）

---

## 二、初始化项目（只做一次）

```bash
git init
git remote add origin git@github.com:用户名/仓库名.git
```

---

## 三、日常使用（最重要）

### 1. 提交代码

```bash
git add .
git commit -m "修改说明"
git push
```

---

### 2. 拉取最新代码

```bash
git pull
```

---

### 3. 推荐安全流程（每天使用）

```bash
git pull
git add .
git commit -m "update"
git push
```

---

## 四、查看状态

```bash
git status        # 当前状态
git log           # 提交历史
git reflog        # 所有操作记录（重要！）
```

---

## 五、撤销操作（重点）

### 1. 撤销修改（未提交）

```bash
git checkout -- 文件名
```

---

### 2. 撤销暂存

```bash
git reset HEAD 文件名
```

---

### 3. 回到某个版本（危险）

```bash
git reset --hard 版本号
```

⚠️ 会删除当前修改

---

### 4. 安全保存修改

```bash
git stash
git stash pop
```

---

## 六、恢复数据（救命操作）

### 1. 查看历史操作

```bash
git reflog
```

---

### 2. 恢复版本

```bash
git reset --hard HEAD@{1}
```

---

### 3. 查找丢失文件

```bash
git fsck --lost-found
```

---

## 七、远程仓库操作

### 查看远程

```bash
git remote -v
```

---

### 修改远程

```bash
git remote remove origin
git remote add origin 新地址
```

---

### 拉取远程分支

```bash
git fetch origin
```

---

## 八、分支操作（进阶）

```bash
git branch              # 查看分支
git branch dev          # 创建分支
git checkout dev        # 切换分支
git checkout -b dev     # 创建并切换
git merge dev           # 合并分支
```

---

## 九、冲突处理

出现冲突时：

1. 打开冲突文件
    
2. 手动修改
    
3. 执行：
    

```bash
git add .
git commit -m "fix conflict"
```

---

## 十、推荐配置（重要）

```bash
git config --global pull.rebase false
git config --global merge.conflictstyle diff3
```

---

## 十一、.gitignore 配置

```text
.obsidian/workspace
.obsidian/cache
.DS_Store
Thumbs.db
```

---

## 十二、危险命令（谨慎使用）

```bash
git reset --hard
git clean -fd
```

⚠️ 会删除数据

---

## 十三、最佳实践（Obsidian场景）

1. 每天先 pull 再写
    
2. 写完及时 commit + push
    
3. 避免多设备同时编辑同一文件
    
4. 使用每日笔记（减少冲突）
    

---

## 十四、常见问题

### 1. push 失败

→ 先执行 git pull

### 2. 冲突

→ 手动解决再提交

### 3. 文件丢失

→ 用 git reflog 恢复

---

## 十五、一句话总结

Git = 文件时间机器

永远记住：  
能 commit，就能找回  
没 commit，风险很大






标题后的属日期
2026-03-19













