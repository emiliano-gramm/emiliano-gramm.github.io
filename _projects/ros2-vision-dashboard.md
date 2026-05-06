---
layout: page
title: "Swarm Sense: A Web-Based Robotics Fleet Command Center"
description: A high-performance, web-based dashboard for multi-robot command and control, built on Foxglove Studio and a custom data export extension.
img: assets/img/ros2.png
importance: 1
category: work
---

**Role:** Full-Stack Engineer, UTC
**Tech Stack:** ROS2, Foxglove, WebSockets, React, TypeScript, Python, Linux

### Project Overview
**Swarm-Sense** is a completed high-performance, web-based fleet command interface designed to interact directly with ROS 2 robotics systems. The system uses **Foxglove Studio** to provide low-latency visualization and monitoring for fleets of 5+ robots simultaneously. The final deliverable focused on reliability, maintainability, and operational robustness for real-time multi-robot monitoring and post-mission analysis.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/jackal.jpg" title="Clearpath Jackal" class="img-fluid rounded z-depth-1" %}
        <div class="caption">Clearpath Jackal</div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/jetauto.jpg" title="Hiwonder JetAuto" class="img-fluid rounded z-depth-1" %}
        <div class="caption">Hiwonder JetAuto</div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/myagv.jpg" title="Elephant Robotics myAGV" class="img-fluid rounded z-depth-1" %}
        <div class="caption">Elephant Robotics myAGV</div>
    </div>
</div>

### Technical Implementation
The architecture was designed for high-performance, web-native robotics interaction, addressing network reliability, latency, and data-management constraints.

1.  **WebSocket-Based Communication**: The architecture moved away from raw DDS/UDP, which is often unreliable on managed WiFi networks. It uses `foxglove_bridge` to serve ROS 2 data over robust **WebSocket (TCP)** links for stable communication.

2.  **High-Performance Web Visualization**: To achieve sub-100ms video latency, the system uses a hardware-accelerated H.264 streaming pipeline via `foxglove_compressed_video_transport`. The frontend, **Foxglove Studio**, runs entirely in the browser, eliminating the need for a custom desktop application.

3.  **Custom Data Export Extension**: A key component is a custom **Foxglove Panel** built with React and TypeScript. This extension buffers telemetry data in real time and supports exporting mission data directly to `.mat` format for MATLAB analysis.

### Key contributions and outcomes

- Architected a high-performance ROS 2 Humble fleet interface to monitor 5+ robots simultaneously via Foxglove Bridge and server-client WebSockets.
- Reduced video latency to sub-100ms by implementing hardware-accelerated H.264 transport and 500kbps bitrate caps for bandwidth-constrained environments.
- Created a Docker-based environment to improve team collaboration, reproducibility, and build reliability for the multi-robot telemetry dashboard.
- Significantly improved project documentation with reproducible run steps to support maintainability and smoother onboarding.
- Implemented comprehensive error handling and unit testing throughout development to improve robustness and overall system quality.

### System architecture
The system uses a server-client architecture where the "backend" is **Foxglove Bridge** running on each robot and the "frontend" is **Foxglove Studio** running in the operator browser. This decouples visualization from robot-side core processes while keeping the interface extensible through a custom React panel for telemetry and export workflows.
