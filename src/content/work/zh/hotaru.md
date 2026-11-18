---
title: hotaru 与 hotaru_mqtt
summary: 向一个 Rust Web 框架及其 MQTT 库合并了 38 个 pull request，2026 年 8 月起拥有写入权限。
---

## 项目

hotaru 是 Field of Dream Studio 开发的 Rust Web 框架，hotaru_mqtt 是它对 MQTT 消息协议的实现。我在 2026 年 7 月受维护者邀请加入。截至 2026 年 11 月，我有 37 个 pull request 合并进 hotaru_mqtt，1 个合并进 hotaru 本体。

## 我做了什么

- **MQTT v5。** 报文格式，以及客户端与 broker 之间的版本协商。
- **不依赖特定运行时的核心。** 把协议和 Tokio 运行时解耦，让这个库不再依赖它。
- **`no_std` 移植。** 我把一个 `Send` 约束从 `dyn` 的使用处挪进了 supertrait，让运行时能在单线程的 `no_std` 目标上编译。`spawn_local` 相关的报错从 83 个降到 0，327 个测试通过，`std` 下没有回归。
- **结构。** packet 和 codec 两个模块之间有循环依赖，我砍掉了 packet 指向 codec 的那条边：数据定义不该依赖编解码逻辑。
- **broker 加固。** 有一个防拒绝服务的补丁提案，我反对了，因为它在验证客户端之前就分配了内存。分配必须在验证之后。

## 推倒重来

这个项目要求贡献者在现场评审里逐行为自己的代码辩护。我最早的一批补丁能跑，但写的时候太依赖 AI 的帮助，我自己还做不到这一点。

所以 8 月我重新开始：从 0.8.2 的基线把代码重新审了一遍，把所有要做的事先发成 issue，再对着这些 issue 把整叠 pull request 重写。为了跟踪进度，我做了一个[审计 issue 树的仪表盘](/zh/work/dashboard-fleet-kit/)。维护者在当月给了我写入权限。
