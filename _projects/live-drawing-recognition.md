---
layout: page
title: "Real-Time Generative Canvas"
description: "An end-to-end system for real-time, scene-aware generative art, featuring a client-side segmentation model and a TensorRT-optimized diffusion backend."
img: /assets/img/LiveDrawingRecognitionThumbnail.png
importance: 1
category: work
---

This project is an end-to-end system for real-time, scene-aware generative art. The goal is to create a browser-based creative tool with a **motion-to-photon latency of under 100ms**, transforming user sketches into high-fidelity images instantly.

This moves beyond simple object recognition to true scene synthesis, capable of understanding composition, occlusion, and spatial relationships in a drawing.

<!-- You can add a GIF or video of the project in action here! -->
<!-- ![Generative Canvas Demo](/assets/images/generative-canvas-demo.gif) -->

## System Architecture

The system is built on a sophisticated, low-latency architecture that distributes the workload between the client and a high-performance server.

### 1. Client-Side Scene Intelligence
The initial scene understanding happens directly in the browser. A lightweight `YOLO26s-Seg` instance segmentation model, compiled to `ONNX` and running on the GPU via `WebGPU`, analyzes the drawing in real-time. This allows the system to identify multiple, overlapping objects and their precise masks without heavy post-processing, a critical step for understanding complex scenes.

### 2. High-Performance Generative Backend
The server is engineered for maximum throughput. It uses a `StreamDiffusion` pipeline with `SDXL Lightning` weights, compiled into a `TensorRT` engine. By leveraging `FP8` quantization for the UNet, the backend achieves a **sub-50ms inference budget**, making real-time streaming generation possible. Communication is handled via WebSockets with a Protobuf schema to minimize serialization overhead.

### 3. Novel Hybrid Data Pipeline
To train a model that understands complex sketches, a unique synthetic data pipeline was engineered:
-   **Realism Anchor (COCO-Edge)**: The `COCO` dataset is processed with edge detection filters (Canny/HED) to create synthetic sketches from real-world scenes. This teaches the model about occlusion and perspective.
-   **Iconic Augmentation (QuickDraw Compositor)**: Instead of using low-resolution bitmaps, the system ingests raw `QuickDraw` vector data. A "Compositor" engine programmatically combines multiple drawings, applies affine transformations, and correctly calculates ground-truth masks for occluded objects, generating infinite-resolution training data.

## Tech Stack

-   **Generative AI**: SDXL Lightning, StreamDiffusion, ControlNet
-   **Inference Optimization**: NVIDIA TensorRT, FP8/FP16 Quantization
-   **Client-Side ML**: ONNX Runtime, WebGPU, YOLO26s-Seg
-   **Backend**: Python, FastAPI, WebSockets
-   **Frontend**: TypeScript, React, Vite
-   **Data Engineering**: OpenCV, PyTorch, Pandas

You can find the complete source code on GitHub.