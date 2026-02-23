---
layout: page
title: Real-Time Edge Vision Inference
description: Optimized on-device inference with NVIDIA Jetson and TensorRT.
img: /assets/img/edge_device.gif
importance: 1
category: work
---

**Role:** Machine Learning Researcher, CUIP
**Tech Stack:** PyTorch, TensorRT, CUDA, NVIDIA Jetson, Linux

### Project Overview
I built a real-time computer vision pipeline for edge deployment, targeting low
latency inference on NVIDIA Jetson platforms. The system supports video streams
and produces reliable results under tight compute and power constraints.

### Technical Implementation
The primary challenge was keeping inference latency low while maintaining
accuracy and stability on embedded hardware.

1.  **Model optimization:**
    I converted PyTorch models to TensorRT engines to reduce inference time and
    improve throughput.

2.  **CPU bottleneck removal:**
    Profiling showed pre-processing was CPU-bound, so I moved heavy operations to
    parallel workers to keep the GPU saturated.

3.  **Deployment hardening:**
    I tuned batch sizes, input resolution, and memory usage to ensure consistent
    performance over long runs.

### Outcome
The optimized pipeline enabled stable, low-latency inference suitable for
real-time robotics applications.
