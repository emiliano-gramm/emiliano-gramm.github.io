---
layout: page
title: Real-Time Robotic Vision Dashboard
description: Edge AI implementation on NVIDIA Jetson using ROS2 and CUDA.
img: assets/img/ros2_placeholder.jpg
importance: 2
category: work
---

**Role:** Machine Learning Researcher, CUIP
**Tech Stack:** ROS2, NVIDIA Jetson, CUDA, PyTorch, TensorRT

### Project Overview
I am currently architecting a real-time computer vision dashboard for a heterogeneous fleet of robots. The system is designed to perform low-latency inference on edge devices, enabling autonomous navigation and teleoperation.

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
The core challenge was processing high-bandwidth video streams (RTSP) without inducing latency that would break real-time control.

1.  **CUDA & TensorRT Optimization:**
    I deployed Federated-trained models on **NVIDIA Jetson** hardware. By converting PyTorch models to **TensorRT** engines, I significantly reduced inference time.

2.  **Resolving Bottlenecks:**
    Initial profiling revealed a CPU bottleneck during image pre-processing. I implemented a **multi-processing** architecture to offload data handling, ensuring continuous GPU saturation and reliable real-time performance.

3.  **Federated Learning Integration:**
    To improve trajectory prediction, I helped design a strategy combining **FedProx** and **FedAdam**. This approach improved ADE and FDE metrics by ~8% compared to baseline results.

### System Architecture
The dashboard connects to the robot fleet via **ROS2 nodes**, subscribing to camera topics and publishing inference results for the navigation stack.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/architecture_diagram.jpg" title="System Architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    High-level overview of the ROS2 nodes and the Federated Learning pipeline.
</div>
