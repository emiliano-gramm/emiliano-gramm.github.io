---
layout: page
title: CUDA parallel vector addition
description: First CUDA kernel from Programming Massively Parallel Processors—host/device memory, kernel launch, and element-wise addition.
img: assets/img/edge_inference.jpg
importance: 4
category: fun
github: https://github.com/emiliano-gramm/SimpleParallelVectorAdditionCUDA
---

**Context:** Study exercise while reading _Programming Massively Parallel Processors_ (H&P / Kirk & Hwu).

**Stack:** C++23, CUDA, CMake, CLion

### Project overview

Two small host arrays are added on the GPU; the program copies results back and prints the summed vector. The goal is to practice the standard CUDA flow, not to ship a library.

### Technical implementation

1. **Host-side orchestration (`vecAdd.cu`):** Allocate device buffers, `cudaMemcpy` host → device, launch the kernel with a 1-D grid (`<<<ceil(n/1024.0), 1024>>>`), copy results back, then `cudaFree` each pointer.
2. **Kernel (`vecAddKernel.cu`):** A `__global__` function maps each thread to an index with `blockDim.x * blockIdx.x + threadIdx.x` and adds `A[i] + B[i]` when `i < n`, so tail threads in the last block do not run out of bounds.
3. **Build:** CMake enables CUDA as a language, separate compilation for multiple `.cu` units, and links `CUDA::cudart`.

### Outcome

A good learning resource that will help in future implementations of parallel programming techniques.
