---
title: DeepSeek Harness 插件
summary: 给我每天都在用的 agent 应用写的三个公开插件。
---

## 为什么写插件

DeepSeek Harness 是我用来运行 AI agent 的桌面应用。它有插件系统，所以当日常流程里缺了什么，我会先查宿主本身有没有提供，再查有没有人已经写过，都没有才自己写。

## 三个插件

- **dsh-composer-tweaks。** 给输入框加了文件和文件夹选择器，可以在 Markdown 源码和渲染视图之间切换，并让我自己发出的消息也按 Markdown 渲染。
- **dsh-external-bridge。** 一个本地 HTTP 桥。同一台机器上的其他程序可以通过它开一个真实的会话、发送提示词，并等待回复。
- **dsh-session-auto-rename。** 根据会话内容自动命名，越近的内容权重越高，并给会话列表加了右键菜单。
