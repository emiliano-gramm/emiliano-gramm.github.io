---
layout: post
title: "Future Vision: A Real-Time Generative Canvas"
date: 2026-01-28 10:00:00 +0000 # You can adjust the date
description: "Exploring the future of the Live Drawing project: a vision for a real-time, scene-aware generative AI system."
tags:
- Machine Learning
- Generative AI
- System Design
- TensorRT
- WebGPU
inline: true
related_posts: false
---

I'm beginning to explore the next evolution of the Live Drawing project, with a vision to transform it from a simple classifier into a **Real-Time, Scene-Aware Generative Canvas**. The long-term goal is to build a system capable of sub-100ms latency from brushstroke to a fully synthesized, high-fidelity image.

The research is centered around a potential new architecture:

1.  **Client-Side Scene Intelligence**: One key area of research is moving scene understanding into the browser. The plan is to use a lightweight instance segmentation model, running on `WebGPU` via `ONNX`, to analyze the drawing's composition in real-time. This would allow the system to understand complex, overlapping objects—a crucial step beyond recognizing single items.

2.  **High-Performance Generative Backend**: For the server, I'm investigating how to leverage state-of-the-art techniques like `SDXL Lightning` and `StreamDiffusion`. The idea is to compile the entire pipeline with `TensorRT` and `FP8` quantization, which could potentially achieve a sub-50ms inference budget, making real-time generation feasible.

3.  **A Novel Hybrid Data Pipeline**: A significant part of the project will be engineering a synthetic data pipeline to train a model that understands complex sketches. The approach I'm exploring involves fusing two sources: edge maps from the `COCO` dataset to learn realism and occlusion, and a custom "compositor" engine that uses `QuickDraw` vector data to generate infinite-resolution training scenes.

This new direction is still in the early planning and prototyping stages, but it sets a long-term vision for moving the project from a "drawing recognizer" to a true "creative partner."
