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
  },{id: "nav-implementations",
          title: "implementations",
          description: "A growing collection of research-driven implementations and writeups.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/implementations/";
          },
        },{id: "nav-reading-implementing",
          title: "reading / implementing",
          description: "Research paper syntheses with related implementation notes and links.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/reading-implementing/";
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
      },{id: "news-reading-note-nvidia-distillation-aware-quantization",
          title: 'Reading Note: NVIDIA Distillation-Aware Quantization',
          description: "Started reading NVIDIA&#39;s Distillation-Aware Quantization paper; synthesis and implementation writeup coming soon.",
          section: "News",handler: () => {
              window.location.href = "/news/Distillation-Aware-Quantization-NVidia/";
            },},{id: "projects-distillation-aware-quantization-planned-implementation",
          title: 'Distillation-Aware Quantization (Planned Implementation)',
          description: "Planned reproduction and adaptation of NVIDIA&#39;s Distillation-Aware Quantization paper.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/distillation-aware-quantization-implementation/";
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
