---
layout: page
title: CNN Image Upscaling
description: CPSC 5440 project implementing an encoder-decoder CNN to upscale grayscale images from 28x28 to 56x56.
importance: 2
category: fun
---

**Context:** Machine Learning coursework project focused on practical CNN design for super-resolution style reconstruction.

### Project objective

Design and train a compact convolutional model that upscales low-resolution grayscale images (`28x28`) into higher-resolution outputs (`56x56`) while preserving recognizable structure and minimizing blur artifacts.

### Architecture and training

- Implemented a lightweight encoder-decoder CNN in PyTorch.
- **Encoder:** `Conv2d` + `ReLU` + `MaxPool2d` for feature compression.
- **Decoder:** `Upsample` + `Conv2d` + `ReLU` blocks, ending with `Sigmoid` output.
- Trained for `100` epochs using `BCELoss` and `Adam` optimizer.

### Data pipeline

- Processed dataset images into grayscale and generated paired low/high-resolution samples.
- Normalized pixel values to `[0, 1]` to match sigmoid output assumptions.
- Cached processed arrays as `.npy` files to reduce repeated long load times.
- Built batched training/testing loaders with proper tensor channel formatting (`unsqueeze`).

### Technical challenges addressed

- Iterated on layer design to balance reconstruction quality and runtime speed.
- Resolved tensor dimensionality issues to match PyTorch input conventions.
- Reduced preprocessing overhead by persisting processed dataset tensors.

### Results

- Final training loss: `0.5625`
- Final test loss: `0.5651`
- Visual inspection showed consistent reconstruction of recognizable images with reasonable sharpness for a shallow network baseline.

### Next steps

- Explore deeper CNN variants for stronger detail recovery.
- Extend from grayscale to color-image upscaling.
- Compare alternative loss functions and optimizers.
