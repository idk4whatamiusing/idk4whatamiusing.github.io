export type Experiment = {
  title: string;
  number: string;
  description: string;
  interactive: boolean;
  gif?: string;
};

export type Project = {
  name: string;
  description: string;
  link: string;
  interactive: boolean;
  gif?: string;
};

export const profile = {
  name: "Debopam Das",
  about: "I'm Debopam, a student and enthusiast passionate about technology, design, and creative problem-solving. I love experimenting with new tools, building side projects, and constantly learning.",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/idk4whatamiusing",
    email: "kyahifarakpdtahein@gmail.com",
  },
  experience: [
    {
      role: "Student",
      company: "Exploring & Learning",
      period: "Present",
      description: "Learning full-stack development, design, and building side projects.",
    },
  ],
  projects: [
    {
      name: "Portfolio Site",
      description: "Personal portfolio built with Next.js and Tailwind CSS.",
      link: "https://github.com/idk4whatamiusing",
      interactive: true,
      gif: "/gifs/portfolio.gif",
    },
    {
      name: "Taskflow",
      description: "A minimal productivity app for managing daily tasks and habits.",
      link: "https://github.com/idk4whatamiusing",
      interactive: false,
      gif: "/gifs/taskflow.gif",
    },
    {
      name: "Pixelpad",
      description: "Browser-based drawing tool with layers and export to PNG.",
      link: "https://github.com/idk4whatamiusing",
      interactive: false,
      gif: "/gifs/pixelpad.gif",
    },
    {
      name: "Weatherly",
      description: "Clean weather dashboard with hourly and weekly forecasts.",
      link: "https://github.com/idk4whatamiusing",
      interactive: true,
      gif: "/gifs/weatherly.gif",
    },
    {
      name: "Snipshot",
      description: "Quick screenshot annotation tool with cloud sync.",
      link: "https://github.com/idk4whatamiusing",
      interactive: false,
      gif: "/gifs/snipshot.gif",
    },
    {
      name: "Musefy",
      description: "Playlist generator that groups songs by mood and tempo.",
      link: "https://github.com/idk4whatamiusing",
      interactive: false,
      gif: "/gifs/musefy.gif",
    },
    {
      name: "Devlog",
      description: "A lightweight journal for tracking coding progress and notes.",
      link: "https://github.com/idk4whatamiusing",
      interactive: true,
      gif: "/gifs/devlog.gif",
    },
    {
      name: "Gridshot",
      description: "Aim-trainer mini-game built with canvas and requestAnimationFrame.",
      link: "https://github.com/idk4whatamiusing",
      interactive: false,
      gif: "/gifs/gridshot.gif",
    },
  ],
  experiments: [
    { title: "Coming Soon", number: "01", description: "Something interesting is brewing.", interactive: false, gif: "/gifs/01.gif" },
    { title: "Coming Soon", number: "02", description: "Stay tuned for updates.", interactive: false, gif: "/gifs/02.gif" },
    { title: "Coming Soon", number: "03", description: "Working on it.", interactive: false, gif: "/gifs/03.gif" },
    { title: "Coming Soon", number: "04", description: "Exploring generative art with code.", interactive: false, gif: "/gifs/04.gif" },
    { title: "Coming Soon", number: "05", description: "A tiny game built in the browser.", interactive: false, gif: "/gifs/05.gif" },
    { title: "Coming Soon", number: "06", description: "Experimental UI motion studies.", interactive: false, gif: "/gifs/06.gif" },
    { title: "Coming Soon", number: "07", description: "Shader sketches and gradients.", interactive: false, gif: "/gifs/07.gif" },
    { title: "Coming Soon", number: "08", description: "CLI tool for fun productivity.", interactive: false, gif: "/gifs/08.gif" },
    { title: "Coming Soon", number: "09", description: "Reverse-engineering small apps.", interactive: false, gif: "/gifs/09.gif" },
    { title: "Coming Soon", number: "10", description: "Learning Rust, one project at a time.", interactive: false, gif: "/gifs/10.gif" },
    { title: "Coming Soon", number: "11", description: "Audio-reactive visuals.", interactive: false, gif: "/gifs/11.gif" },
    { title: "Coming Soon", number: "12", description: "A minimal note-taking toy.", interactive: false, gif: "/gifs/12.gif" },
  ],
};
