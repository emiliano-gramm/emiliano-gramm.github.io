---
layout: page
title: LSTM Sequence Modeling Exploration
description: Course assignment exploring character-level sequence modeling with LSTM, plus comparative understanding of RNN and GRU architectures.
importance: 3
category: fun
github: https://github.com/emiliano-gramm/LSTM_Exploration
---

**Context:** Machine Learning coursework module on recurrent neural networks for sequence modeling.

**Primary focus:** Implementing and analyzing a character-level `LSTM` architecture in PyTorch.

**Course:** CPSC 5440, University of Tennessee Chattanooga.

### Significance and objective

This assignment studies next-character generation as an entry point into sequence models that predate modern LLMs. The objective was to train an `LSTM` on a Sherlock Holmes corpus to predict the next character from a fixed-length context and better understand why recurrent models remain foundational.

### Data and preprocessing

- Downloaded and cleaned a Project Gutenberg Sherlock Holmes corpus.
- Built a constrained character vocabulary (letters, punctuation, spaces, digits).
- Implemented one-hot encoding and a sliding-window dataset with sequence length `50`.
- Created `(X, y)` pairs where targets are shifted one character ahead of inputs.

### LSTM implementation

- Implemented a two-layer character-level `LSTM` model with dropout between recurrent layers.
- Added a linear projection head to map hidden states to character logits.
- Trained using `CrossEntropyLoss` with `Adam`, flattening sequence outputs for token-level supervision.
- Saved model weights and evaluated generation behavior in inference mode.

### Technical challenges addressed

- **Data encoding:** Built character-to-index mappings and one-hot encoded every character for model input.
- **Memory management:** Switched from overlapping windows (stride `1`) to non-overlapping windows (stride `50`) to avoid excessive tensor memory usage.
- **Tensor reshaping:** Flattened batched sequence outputs/targets in training so they match `CrossEntropyLoss` input requirements.

### Generation workflow

- Encoded a prompt string and kept the most recent `50` characters as model input.
- Iteratively predicted one character at a time and fed predictions back into the sequence.
- Decoded argmax predictions to generate a full output string.

### Broader module takeaways

After 100 training epochs, the model produced text with English-like structure but semantically nonsensical sentences, which matches the expected behavior for this assignment setup.

Although implementation centered on `LSTM`, the module also covered `RNN` and `GRU` concepts. This helped connect practical training behavior to broader ideas around long-range dependencies and gated recurrent design.
