import { ExperienceItem, ProjectItem, EducationItem, SkillCategory, ChatMessage, ChatOption } from './types';

export const experienceData: ExperienceItem[] = [
  {
    role: "Photographer & Photo Technician & Sales Associate",
    company: "Viktorianna Photography",
    duration: "May 2024 - Present (Weekends)",
    location: "Dallas-Fort Worth",
    points: [
      "Captured and edited high-quality portraits using Photoshop & Lightroom.",
      "Managed lighting, cameras, and printers for same-day print delivery.",
      "Increased photo package conversions through effective sales and upselling.",
      "Calibrated hardware and troubleshot equipment efficiently.",
    ],
  },
  {
    role: "UI/UX Technical Artist",
    company: "Skillo",
    duration: "Jan 2024 - Present",
    location: "Hybrid",
    points: [
      "Designed artist-friendly UI/UX systems for real-time production.",
      "Built custom Python tool panels using PySide & NumPy.",
      "Developed a physics sandbox in Pygame + NumPy.",
      "Integrated & optimized assets in Unity & Unreal Engine.",
      "Created procedural Houdini systems for VFX assets."
    ],
  },
  {
    role: "Photographer & Photo Technician",
    company: "Visenta Studio LLC",
    duration: "May 2023 - Nov 2023",
    location: "Dallas-Fort Worth",
    points: [
        "Captured studio & event photography with professional lighting.",
        "Exceeded daily sales goals through customer engagement.",
        "Optimized darkroom & digital workflows for efficiency."
    ],
  },
  {
    role: "Teaching Assistant",
    company: "University of Texas at Arlington",
    duration: "Aug 2022 - Dec 2022",
    location: "Arlington, TX",
    points: [
      "Supported lectures, labs, and hands-on exercises.",
      "Tutored students and graded assignments.",
      "Developed supplementary learning materials.",
    ],
  },
  {
    role: "Technical Artist - Amazon Games: New World",
    company: "Amazon",
    duration: "Jun 2020 - Nov 2021",
    location: "Hyderabad, India",
    points: [
      "Built custom Python Maya tools, automating tasks by 30%.",
      "Created optimized 3D assets in Unity, Maya, Blender.",
      "Developed procedural Houdini environments for world-building.",
      "Integrated Substance workflows for PBR materials.",
      "Improved runtime performance & authored technical documentation.",
    ],
  },
];

export const projectsData: ProjectItem[] = [
    {
        title: "Physics Sim: Bouncing Ball (Pygame + NumPy)",
        description: "Interactive real-time physics sandbox merging VFX principles and animation programming. Implemented gravity, collisions, soft-body simulation, spark particles, velocity heatmaps, and a real-time debug HUD. Built from scratch to showcase technical art and simulation design.",
        tags: ["Python", "NumPy", "Pygame", "VFX", "Simulation"]
    },
    {
        title: "Amazon Games - New World Technical Art",
        description: "Designed and maintained art tools supporting production workflows. Developed custom Python-based Maya tools that automated repetitive tasks, improving efficiency by 30%. Created optimized 3D assets using Unity, Maya, Blender, and Houdini procedural systems.",
        tags: ["Maya", "Python", "Unity", "Houdini", "Automation"]
    },
     {
        title: "Gesture Recognition Dynamics",
        description: "Built a hybrid LSTM-CNN model for video activity detection. Integrated MediaPipe for pose extraction and applied preprocessing to reduce noise. Improved classification speed by 25% and enhanced model accuracy through thorough benchmarking.",
        tags: ["Deep Learning", "Python", "LSTM-CNN", "MediaPipe"]
    },
    {
        title: "Smart Student Portal",
        description: "Built a single-page academic portal using ReactJS and Spring Boot. Implemented REST APIs, a MySQL/H2 database, responsive styling, and role-based user support. Optimized React rendering for 30% faster load times and 40% higher engagement.",
        tags: ["ReactJS", "Spring Boot", "MySQL", "REST API"]
    },
    {
        title: "MARS Outdoor - 3D Advertising Venture",
        description: "A creative business & 3D advertising venture featuring mobile LED truck ads, 3D hologram signage, and futuristic outdoor advertising. Created 3D animations for LED trucks, hologram ads, and brand identity materials using AI tools.",
        tags: ["3D Animation", "Blender", "After Effects", "Premiere Pro", "AI Tools"]
    },
    {
        title: "Lucid Origin - AI Film Project",
        description: "An experimental AI film and animation project focused on AI-driven storytelling. Created a cinematic VFX portfolio piece blending AI with technical art. Developed experimental 3D assembly visuals, camera motion, and lighting experiments.",
        tags: ["AI Animation", "Blender", "Unreal Engine", "VFX"]
    }
];

export const educationData: EducationItem[] = [
    {
        degree: "MS, Computer Science",
        institution: "University of Texas at Arlington",
        duration: "Jan 2022 - Dec 2023",
        gpa: "3.7",
        courses: ["Machine Learning", "Computer Vision", "Data Mining", "Advanced Algorithms"],
        activities: "ACM, HackUTA, AI/ML Study Groups, Graduate CS Council, open-source contributor"
    },
    {
        degree: "BTech, Computer Science",
        institution: "GITAM Deemed University",
        duration: "Aug 2016 - Sep 2020",
        gpa: "3.2",
        courses: ["Data Structures", "Algorithms", "Object-Oriented Programming", "Database Management"],
        activities: "Coding Club, Hackathons, Tech Fest, Google DSC"
    }
];


export const skillsData: SkillCategory[] = [
    {
        title: "3D Software & Game Engines",
        skills: ["Maya", "Blender", "3ds Max", "Houdini", "Substance Designer", "Unity (URP/HDRP)", "Unreal Engine 4", "NVIDIA Omniverse Kit"]
    },
    {
        title: "Programming & Automation",
        skills: ["Python", "C++", "PySide", "Maya.cmds", "NumPy", "Asset Optimization", "Tool Development"]
    },
     {
        title: "AI & Simulation",
        skills: ["Generative AI", "Deep Learning (CNN/LSTM)", "MediaPipe", "Real-Time Physics & VFX"]
    },
    {
        title: "Web & UX/UI",
        skills: ["ReactJS", "Spring Boot", "MySQL", "REST API", "Figma", "Photoshop", "Illustrator", "Lightroom", "Notion", "Super.so"]
    },
    {
        title: "Generative & Creative Tools",
        skills: ["Leonardo AI", "Midjourney", "Pika Labs", "Runway Gen-2", "CapCut AI", "Adobe Firefly", "Kaiber AI", "Synthesia", "HeyGen", "Meshy AI", "Tripo AI", "Spline 3D", "Luma AI", "ElevenLabs", "ChatGPT", "Claude", "Gemini"]
    },
];

export const mainChatbotOptions: ChatOption[] = [
    { text: "Animation/VFX", url: '_SUB_OPTIONS_ANIMATION_' },
    { text: "3D Models & Assets", url: '#' },
    { text: "AI Generated Content", url: '#' },
    { text: "Technical Pipeline", url: '#' }
];

export const animationVFXOptions: ChatOption[] = [
    { text: "Scene 5: The Revelation (Loop Five, Shot 5)", url: 'videos/scene5_revelation.mp4' },
    { text: "Scene 6: The Choice (Loop Six, Shots 2, 3, 7, 8)", url: 'videos/scene6_the_choice.mp4' },
];

export const initialMessages: ChatMessage[] = [
    {
        sender: 'bot',
        text: "Greetings. I am Avaneesh's AI assistant. I can guide you through his creative portfolio. What would you like to explore first?"
    },
    {
        sender: 'bot',
        options: mainChatbotOptions
    }
];
