import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aveek Goswami",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "ML Engineer and student. I like building, reading, and cheering for Manchester United.",
  summary:
    "Final year MEng Computational Bioengineering student with experience applying machine learning concepts and developing software products through internships, college projects and personal endeavours. I’m constantly growing my technical skillset, and I'm eager to build cutting-edge products in the fast-growing machine learning industry.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "C++",
    "C",
    "Java",
    "MATLAB",
    "React",
    "Next.js",
    "TailwindCSS",
    "Tensorflow",
    "PyTorch",
    "GCP",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Sachiv.ai",
      href: "https://sachiv.ai",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/sachiv-logo.png",
      start: "Jan 2024",
      end: "Aug 2024",
      description:
        "Developed a full-stack meeting intelligence application for users to schedule meeting bots with Recall API, store call transcripts using a Zilliz vector embedding database, and query meetings using OpenAI API and LangChain. Deployed dockerised frontend and backend services using GCP Cloud Run.",
    },
    {
      company: "Remidio Innovative Solutions",
      badges: [],
      href: "https://www.remidio.com",
      location: "Singapore",
      title: "Deep Learning Engineer Intern",
      logoUrl: "/remidio-logo.png",
      start: "Jul 2023",
      end: "Dec 2023",
      description:
        "Trained CNNs to predict retinal thickness from fundus images to aid AMD diagnosis. Devised a radial gradient algorithm for U-Net training; implemented transfer learning with EfficientNet-B0. Achieved ~4% mean error.",
    },
    {
      company: "Nullspace Robotics",
      href: "https://sg.nullspace.co",
      badges: [],
      location: "Singapore",
      title: "Machine Learning Engineer Intern",
      logoUrl: "/nullspace-logo.png",
      start: "Jul 2022",
      end: "Sep 2022",
      description:
        "Deployed a self-designed CNN onto a Raspberry Pi for real-time classication of Lego pieces, achieving 93\% accuracy.",
    },
    {
      company: "GovTech Singapore",
      href: "https://www.tech.gov.sg",
      badges: [],
      location: "Singapore",
      title: "Research Engineer Intern",
      logoUrl: "/govtech-logo.png",
      start: "May 2021",
      end: "Aug 2021",
      description:
        "Project lead for SmartGym bluetooth blood pressure monitor. Configured Raspberry Pi to subscribe to Bluetooth indications and publised data via MQTT. Designed frontend with Flutter to display data",
    },
    {
      company: "Singapore Civil Defence Force",
      href: "https://li.me/",
      badges: [],
      location: "Singapore",
      title: "Firefighter",
      logoUrl: "/scdf-logo.png",
      start: "Jul 2019",
      end: "Feb 2021",
      description:
        "Led and managed a team of 20 firefighters. Responded to the 2021 Kwong Wai Shiu Hospital fire; extinguished within 2 hours.",
    },
  ],
  education: [
    {
      school: "Imperial College London",
      href: "https://imperial.ac.uk",
      degree: "Computational Bioengineering, MEng",
      logoUrl: "/imperial-logo.png",
      start: "2021",
      end: "2025",
    },
    {
      school: "Raffles Institution",
      href: "https://ibo.org",
      degree: "GCE A-Level",
      logoUrl: "/raffles-logo-2.png",
      start: "2013",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "my.notes",
      href: "",
      dates: "Jul 2024 - Aug 2024",
      active: true,
      description:
        "Building a meeting intelligence application which allows users to record, refer to and chat with their meetings.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "FastAPI",
        "Google Cloud",
        "LangChain",
        "Milvus",
      ],
      links: [
        {
          type: "Website",
          href: "https://mynotes-frontend-service-bnvicnudra-uc.a.run.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://storage.googleapis.com/aveek-demo-videos/mynotes-demo.mov",
      // "https://storage.googleapis.com/aveek-demo-videos/output.mov",
      // "https://storage.googleapis.com/aveek-demo-videos/mynotes-demo.mov"
    },
    {
      title: "Hyperspectral Brain Imaging",
      href: "",
      dates: "Oct 2023 - Jun 2024",
      active: true,
      description:
        "Built an imaging system to observe Alzheimer's biomarkers, using spectral unmixing and principal component analysis algorithms.",
      technologies: [
        "MATLAB",
        "Image Processing",
        "CAD",
      ],
      links: [
        {
          type: "Report",
          href: "https://magichampz.github.io/portfolio/Project_4087_Final_Report.pdf",
          icon: <Icons.bookopen className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/racketmaestro/Hyperspectral-Imaging",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/HSI.png",
      video: "",
    },
    {
      title: "LLMAO - Large Language Models: An Overview",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Delivered a 4-week workshop on LLMs to 120 attendees. Topics covered include prompt engineering, supervised fine-tuning, reinforcement learning, and building systems with LangChain, HuggingFace, Gradio, OpenAI API.",
      technologies: [
        "LangChain",
        "OpenAI API",
        "Prompt Engineering",
        "Gradio",
        "HuggingFace",
      ],
      links: [
        {
          type: "Resources",
          href: "https://automatic.chat",
          icon: <Icons.packageopen className="size-3" />,
        },
      ],
      image: "/LLMAO-L1.png",
      video: "",
      // "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Breast Cancer Prediction",
      href: "",
      dates: "Nov 2023 - Jan 2024",
      active: true,
      description:
        "Developed an OpenCV image processing pipeline, deployed a CNN for breast density classification using Streamlit.",
      technologies: [
        "Tensorflow",
        "OpenCV",
        "Streamlit",
        "Scikit-Learn",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/racketmaestro/Breast-Cancer-Masking-WebApp?tab=readme-ov-file",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/breast-web-app.png",
      video: "",
    },
    {
      title: "Veekly Bobangs - Deals App",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed a React Native App and a Python web-scraping service. Retrieves food promotions and displays the offers’ coordinates on a map at your location",
      technologies: [
        "React",
        "JavaScript",
        "Selenium",
        "BeautifulSoup"
      ],
      links: [
        {
          type: "Demo",
          href: "https://www.youtube.com/shorts/C_KEpVR6UW8?feature=share",
          icon: <Icons.squareplay className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://storage.googleapis.com/aveek-demo-videos/veekly-bobangs-demo.mp4",
      // "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Agent ARnold",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Designed a mixed reality game for children with Cerebral Palsy on Unity with C\# scripting and computer vision. In collaboration with the Pace Centre.",
      technologies: [
        "Unity",
        "Mixed Reality",
        "Vuforia",
        "C#",
        "Computer Vision",
      ],
      links: [
        {
          type: "Article",
          href: "https://medium.com/antaeus-ar/agent-arnold-an-augmented-reality-game-for-children-with-cerebral-palsy-8515734a3206",
          icon: <Icons.squareplay className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magichampz/Agent-ARnold",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Agent-ARnold.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
