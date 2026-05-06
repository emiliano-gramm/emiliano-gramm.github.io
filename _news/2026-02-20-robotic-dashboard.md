---
layout: post
date: 2026-01-03 19:00:00-0400
inline: true
related_posts: false
---

**Currently Engineering:** Swarm-Sense, a web-based robotics fleet command center at **CUIP**.

I am architecting a high-performance fleet command interface that uses **Foxglove Studio** for visualization. The system streams data from ROS 2 robots over **WebSockets**, replacing raw DDS/UDP for improved reliability on managed networks.

**Current Sprint Focus:**

- Deploying `foxglove_bridge` on the robot fleet to serve data over WebSockets.
- Implementing a hardware-accelerated H.264 video pipeline (`foxglove_compressed_video_transport`) to achieve <100ms latency.
- Developing a custom **Foxglove Panel** in React to buffer telemetry and export it to MATLAB `.mat` format.
