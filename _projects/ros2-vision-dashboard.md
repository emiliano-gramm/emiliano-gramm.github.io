---
layout: page
title: Real-Time Robotic Vision Dashboard
description: Multi-robot dashboard for low-latency, multi-sensor visualization.
img: assets/img/ros2.png
importance: 2
category: work
---

**Role:** Machine Learning Researcher, CUIP
**Tech Stack:** ROS2, Python, Linux, Robotics

### Project Overview
I am currently architecting a real-time dashboard for a heterogeneous fleet of robots.
The system provides low-latency visualization and monitoring across multiple sensor
modalities.

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
The core challenge is delivering synchronized, low-latency views from multiple
robots without overwhelming the network or operator.

1.  **Multi-robot messaging:**
    I organize ROS2 topics by robot ID and sensor type to keep streams clean and
    easy to subscribe to for downstream tools.

2.  **Latency-aware visualization:**
    The UI prioritizes critical feeds and uses efficient transport to keep the
    dashboard responsive under load.

3.  **Extensible architecture:**
    New robots or sensors can be added by registering a ROS2 node and metadata
    entry, keeping onboarding fast.

### System Architecture
The dashboard connects to the robot fleet via **ROS2 nodes**, subscribing to
camera and telemetry topics and publishing status summaries for operators.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/architecture_diagram.jpg" title="System Architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    High-level overview of the ROS2 nodes and the dashboard data flow.
</div>
