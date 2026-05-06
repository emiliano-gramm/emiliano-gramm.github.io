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
          section: "News",},{id: "news-reading-amp-amp-implementing-working-through-programming-massively-parallel-processors-and-put-the-first-and-second-cuda-chapters-into-practice-by-implementing-a-simple-vector-add-kernel-code-simpleparallelvectoradditioncuda",
          title: 'Reading &amp;amp;amp; implementing: Working through Programming Massively Parallel Processors and put the first...',
          description: "",
          section: "News",},{id: "news-new-project-added-a-cnn-image-upscaling-project-for-cpsc-5440-training-an-encoder-decoder-model-to-reconstruct-56x56-grayscale-images-from-28x28-inputs",
          title: 'New project: Added a CNN image upscaling project for CPSC 5440, training an...',
          description: "",
          section: "News",},{id: "news-new-project-published-my-lstm-sequence-modeling-exploration-for-cpsc-5440-focused-on-next-character-generation-from-a-sherlock-holmes-corpus-with-notes-on-rnn-gru-context-and-implementation-details-repo-lstm-exploration",
          title: 'New project: Published my LSTM sequence modeling exploration for CPSC 5440, focused on...',
          description: "",
          section: "News",},{id: "news-project-milestone-completed-swarm-sense-our-multi-robot-ros-2-telemetry-dashboard-final-outcomes-include-stable-websocket-based-monitoring-for-5-robots-sub-100ms-video-latency-using-hardware-accelerated-h-264-transport-a-reproducible-docker-environment-for-team-deployment-stronger-documentation-for-onboarding-and-improved-robustness-through-comprehensive-error-handling-and-unit-testing",
          title: 'Project milestone: Completed Swarm-Sense, our multi-robot ROS 2 telemetry dashboard. Final outcomes include...',
          description: "",
          section: "News",},{id: "projects-cnn-image-upscaling",
          title: 'CNN Image Upscaling',
          description: "CPSC 5440 project implementing an encoder-decoder CNN to upscale grayscale images from 28x28 to 56x56.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cnn-image-upscaling/";
            },},{id: "projects-cuda-parallel-vector-addition",
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
