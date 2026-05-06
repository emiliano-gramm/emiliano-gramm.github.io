// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "My current CV, detailing my experience in Machine Learning, Computer Vision, and Data Science.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-programming-massively-parallel-processors",
          title: 'Programming Massively Parallel Processors',
          description: "Hands-on introduction to parallel programming on GPUs; the CUDA vector-add exercise on this site follows the early chapters.",
          section: "Books",handler: () => {
              window.location.href = "/books/programming-massively-parallel-processors/";
            },},{id: "news-currently-engineering-swarm-sense-a-web-based-robotics-fleet-command-center-at-cuip-i-am-architecting-a-high-performance-fleet-command-interface-that-uses-foxglove-studio-for-visualization-the-system-streams-data-from-ros-2-robots-over-websockets-replacing-raw-dds-udp-for-improved-reliability-on-managed-networks-current-sprint-focus-deploying-foxglove-bridge-on-the-robot-fleet-to-serve-data-over-websockets-implementing-a-hardware-accelerated-h-264-video-pipeline-foxglove-compressed-video-transport-to-achieve-amp-lt-100ms-latency-developing-a-custom-foxglove-panel-in-react-to-buffer-telemetry-and-export-it-to-matlab-mat-format",
          title: 'Currently Engineering: Swarm-Sense, a web-based robotics fleet command center at CUIP. I am...',
          description: "",
          section: "News",},{id: "news-i-m-beginning-to-explore-the-next-evolution-of-the-live-drawing-project-with-a-vision-to-transform-it-from-a-simple-classifier-into-a-real-time-scene-aware-generative-canvas-the-long-term-goal-is-to-build-a-system-capable-of-sub-100ms-latency-from-brushstroke-to-a-fully-synthesized-high-fidelity-image-the-research-is-centered-around-a-potential-new-architecture-client-side-scene-intelligence-one-key-area-of-research-is-moving-scene-understanding-into-the-browser-the-plan-is-to-use-a-lightweight-instance-segmentation-model-running-on-webgpu-via-onnx-to-analyze-the-drawing-s-composition-in-real-time-this-would-allow-the-system-to-understand-complex-overlapping-objects-a-crucial-step-beyond-recognizing-single-items-high-performance-generative-backend-for-the-server-i-m-investigating-how-to-leverage-state-of-the-art-techniques-like-sdxl-lightning-and-streamdiffusion-the-idea-is-to-compile-the-entire-pipeline-with-tensorrt-and-fp8-quantization-which-could-potentially-achieve-a-sub-50ms-inference-budget-making-real-time-generation-feasible-a-novel-hybrid-data-pipeline-a-significant-part-of-the-project-will-be-engineering-a-synthetic-data-pipeline-to-train-a-model-that-understands-complex-sketches-the-approach-i-m-exploring-involves-fusing-two-sources-edge-maps-from-the-coco-dataset-to-learn-realism-and-occlusion-and-a-custom-compositor-engine-that-uses-quickdraw-vector-data-to-generate-infinite-resolution-training-scenes-this-new-direction-is-still-in-the-early-planning-and-prototyping-stages-but-it-sets-a-long-term-vision-for-moving-the-project-from-a-drawing-recognizer-to-a-true-creative-partner",
          title: 'I’m beginning to explore the next evolution of the Live Drawing project, with...',
          description: "Exploring the future of the Live Drawing project: a vision for a real-time, scene-aware generative AI system.",
          section: "News",},{id: "news-new-project-published-my-lstm-sequence-modeling-exploration-for-cpsc-5440-focused-on-next-character-generation-from-a-sherlock-holmes-corpus-with-notes-on-rnn-gru-context-and-implementation-details-repo-lstm-exploration",
          title: 'New project: Published my LSTM sequence modeling exploration for CPSC 5440, focused on...',
          description: "",
          section: "News",},{id: "news-reading-amp-amp-implementing-working-through-programming-massively-parallel-processors-and-put-the-first-and-second-cuda-chapters-into-practice-by-implementing-a-simple-vector-add-kernel-code-simpleparallelvectoradditioncuda",
          title: 'Reading &amp;amp;amp; implementing: Working through Programming Massively Parallel Processors and put the first...',
          description: "",
          section: "News",},{id: "projects-cuda-parallel-vector-addition",
          title: 'CUDA parallel vector addition',
          description: "First CUDA kernel from Programming Massively Parallel Processors—host/device memory, kernel launch, and element-wise addition.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cuda-parallel-vector-addition/";
            },},{id: "projects-real-time-edge-vision-inference",
          title: 'Real-Time Edge Vision Inference',
          description: "Optimized on-device inference with NVIDIA Jetson and TensorRT.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/edge-vision-inference/";
            },},{id: "projects-industrial-predictive-analytics",
          title: 'Industrial Predictive Analytics',
          description: "Optimizing manufacturing workflows to generate $300k+ in annual savings.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/industrial-optimization/";
            },},{id: "projects-real-time-generative-canvas",
          title: 'Real-Time Generative Canvas',
          description: "An end-to-end system for real-time, scene-aware generative art, featuring a client-side segmentation model and a TensorRT-optimized diffusion backend.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/live-drawing-recognition/";
            },},{id: "projects-lstm-sequence-modeling-exploration",
          title: 'LSTM Sequence Modeling Exploration',
          description: "Course assignment exploring character-level sequence modeling with LSTM, plus comparative understanding of RNN and GRU architectures.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lstm-sequence-modeling-exploration/";
            },},{id: "projects-swarm-sense-a-web-based-robotics-fleet-command-center",
          title: 'Swarm Sense: A Web-Based Robotics Fleet Command Center',
          description: "A high-performance, web-based dashboard for multi-robot command and control, built on Foxglove Studio and a custom data export extension.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ros2-vision-dashboard/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Resume.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%65%6D%69%6C%69%61%6E%6F.%67%72%61%6D%6D@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/emiliano-de-la-garza-villarreal", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/emiliano-gramm", "_blank");
        },
      },{
        id: 'social-whatsapp',
        title: 'whatsapp',
        section: 'Socials',
        handler: () => {
          window.open("https://wa.me/470-358-5294", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
