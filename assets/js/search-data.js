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
      },{id: "news-currently-engineering-a-real-time-robotic-vision-dashboard-at-cuip-i-am-implementing-a-ros2-and-cuda-accelerated-pipeline-to-visualize-telemetry-and-video-feeds-for-a-fleet-of-heterogeneous-robots-including-the-clearpath-jackal-and-hiwonder-jetauto-current-sprint-focus-resolving-cpu-bottlenecks-in-image-processing-by-implementing-multi-processing-to-ensure-continuous-gpu-saturation-on-nvidia-jetson-hardware-applying-federated-learning-strategies-combining-fedprox-and-fedadam-to-improve-ade-fde-metrics-for-trajectory-prediction",
          title: 'Currently Engineering: A real-time robotic vision dashboard at CUIP. I am implementing a...',
          description: "",
          section: "News",},{id: "news-development-on-the-live-drawing-project-is-entering-an-exciting-new-phase-evolving-beyond-simple-classification-into-a-real-time-scene-aware-generative-canvas-the-goal-is-to-create-a-system-with-under-100ms-of-latency-from-the-user-s-brushstroke-to-a-fully-synthesized-high-fidelity-image-this-leap-in-performance-and-capability-is-guided-by-a-new-technical-architecture-client-side-scene-intelligence-we-are-moving-the-initial-scene-understanding-directly-into-the-browser-an-instance-segmentation-model-running-on-webgpu-via-onnx-will-analyze-the-composition-of-the-drawing-in-real-time-this-allows-the-system-to-understand-complex-overlapping-objects-a-crucial-step-beyond-recognizing-single-items-high-performance-generative-backend-the-server-will-leverage-state-of-the-art-techniques-like-sdxl-lightning-and-streamdiffusion-the-entire-pipeline-will-be-compiled-with-tensorrt-and-use-fp8-quantization-targeting-a-sub-50ms-inference-budget-to-make-real-time-generation-possible-a-novel-hybrid-data-pipeline-to-teach-the-model-to-understand-complex-occluded-sketches-we-are-engineering-a-unique-synthetic-data-pipeline-it-fuses-two-sources-edge-maps-from-the-coco-dataset-to-learn-realism-and-occlusion-and-a-custom-compositor-engine-that-uses-quickdraw-vector-data-to-generate-infinite-resolution-training-scenes-with-complex-object-interactions-this-ambitious-direction-moves-the-project-from-a-drawing-recognizer-to-a-true-creative-partner-setting-the-stage-for-a-new-class-of-interactive-ai-experiences",
          title: 'Development on the Live Drawing project is entering an exciting new phase, evolving...',
          description: "An update on the evolution of LiveDrawingRecognition towards a next-generation, scene-aware generative AI system.",
          section: "News",},{id: "projects-real-time-edge-vision-inference",
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
            },},{id: "projects-real-time-robotic-vision-dashboard",
          title: 'Real-Time Robotic Vision Dashboard',
          description: "Multi-robot dashboard for low-latency, multi-sensor visualization.",
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
