---
layout: page
title: "Swarm Sense: A Web-Based Robotics Fleet Command Center"
description: A high-performance, web-based dashboard for multi-robot command and control, built on Foxglove Studio and a custom data export extension.
img: assets/img/ros2.png
importance: 1
category: work
github: https://github.com/emiliano-gramm/Swarm-Sense-Multi-Robot-Dashboard
---

**Role:** Machine Learning Researcher, CUIP
**Tech Stack:** ROS2, Foxglove, WebSockets, React, TypeScript, Python, Linux

<div class="alert alert-success" role="alert">
  Status: Completed. The multi-robot telemetry dashboard has finished development and reached production-ready project goals.
</div>

### Project Overview
**Swarm-Sense** is a completed high-performance, web-based fleet command interface designed to interact directly with ROS 2 robotics systems. The system leverages **Foxglove Studio** to provide near-zero latency visualization and monitoring for a fleet of up to 5 robots simultaneously. The project objective was to deliver a reliable, scalable, and extensible platform for real-time operations and post-mission data analysis.

{% include figure.liquid loading="eager" path="/assets/video/swarm-sense-small-demo.gif" title="Swarm-Sense dashboard demo" class="img-fluid rounded z-depth-1" %}

### Technical Implementation
The architecture was designed for high-performance, web-native robotics interaction, addressing challenges of network reliability and data management.

1.  **WebSocket-Based Communication**: The architecture moved away from raw DDS/UDP, which is often unreliable on managed WiFi networks. Instead, it uses `foxglove_bridge` to serve all ROS 2 data over a robust **WebSocket (TCP)** connection, ensuring stable communication.

2.  **High-Performance Web Visualization**: To achieve sub-100ms video latency, the system uses a hardware-accelerated H.264 streaming pipeline via `foxglove_compressed_video_transport`. The frontend, **Foxglove Studio**, runs entirely in the browser, eliminating the need for a custom desktop application.

3.  **Custom Data Export Extension**: A key component is a custom **Foxglove Panel** built with React and TypeScript. This extension buffers telemetry data in real time and allows operators to export mission data directly to a `.mat` file for analysis in MATLAB.

### Key contributions and outcomes

1. Architected a high-performance ROS 2 Humble fleet interface to monitor 5+ robots simultaneously via Foxglove Bridge and server-client WebSockets.
2. Reduced video latency to sub-100ms by implementing hardware-accelerated H.264 transport and 500kbps bitrate caps for bandwidth-constrained environments.
3. Created a Docker environment to facilitate team collaboration, ensuring high reliability and ease of build-upon for the multi-robot telemetry dashboard.
4. Significantly improved documentation with reproducible run steps to ensure maintainability and ease of use for others working on the dashboard.
5. Implemented comprehensive error handling and unit testing throughout development to improve robustness and overall quality.

### System Architecture
The system uses a modern server-client architecture where the "backend" is the **Foxglove Bridge** running on each robot, and the "frontend" is **Foxglove Studio** running in the operator's web browser. This decouples the visualization from the robot's core processes and leverages a powerful, industry-standard tool for the user interface. A custom React-based extension runs within Studio to provide specialized functionality like the MATLAB data export.
