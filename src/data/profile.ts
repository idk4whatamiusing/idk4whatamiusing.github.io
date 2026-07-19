export type Experiment = {
  title: string;
  number: string;
  description: string;
  interactive: boolean;
  gif?: string;
  poster?: string;
};

export type Project = {
  name: string;
  description: string;
  link: string;
  interactive: boolean;
  gif?: string;
  poster?: string;
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
      gif: "/gifs/01-aryan-chahal-cr7-goat-gif.gif",
    },
    {
      name: "Taskflow",
      description: "A minimal productivity app for managing daily tasks and habits.",
      link: "https://github.com/idk4whatamiusing",
      interactive: false,
      gif: "/gifs/02-cr7-2017-gif.gif",
    },
    {
      name: "Pixelpad",
      description: "Browser-based drawing tool with layers and export to PNG.",
      link: "https://github.com/idk4whatamiusing",
      interactive: false,
      gif: "/gifs/03-cristiano-ronaldo-ronaldo-im-here-gif.gif",
    },
    {
      name: "Weatherly",
      description: "Clean weather dashboard with hourly and weekly forecasts.",
      link: "https://github.com/idk4whatamiusing",
      interactive: true,
      gif: "/gifs/04-cristiano-ronaldo-ronaldo-portugal-gif.gif",
    },
    {
      name: "Snipshot",
      description: "Quick screenshot annotation tool with cloud sync.",
      link: "https://github.com/idk4whatamiusing",
      interactive: false,
      gif: "/gifs/05-dictator-mbappe-kylian-jong-un-gif.gif",
    },
    {
      name: "Musefy",
      description: "Playlist generator that groups songs by mood and tempo.",
      link: "https://github.com/idk4whatamiusing",
      interactive: false,
      gif: "/gifs/06-england-england-football-gif.gif",
    },
    {
      name: "Devlog",
      description: "A lightweight journal for tracking coding progress and notes.",
      link: "https://github.com/idk4whatamiusing",
      interactive: true,
      gif: "/gifs/07-goat-lionel-messi-gif.gif",
    },
    {
      name: "Gridshot",
      description: "Aim-trainer mini-game built with canvas and requestAnimationFrame.",
      link: "https://github.com/idk4whatamiusing",
      interactive: false,
      gif: "/gifs/08-mbappe-mbappe-dictator-gif.gif",
    },
  ] as Project[],
  experiments: [
    { title: "Coming Soon", number: "01", description: "Something interesting is brewing.", interactive: false, gif: "/gifs/09-messi-crying-gif.gif" },
    { title: "Coming Soon", number: "02", description: "Stay tuned for updates.", interactive: false, gif: "/gifs/10-messi-girlcelona-gif.gif" },
    { title: "Coming Soon", number: "03", description: "Working on it.", interactive: false, gif: "/gifs/11-messi-messi-crying-2-gif.gif" },
    { title: "Coming Soon", number: "04", description: "Exploring generative art with code.", interactive: false, gif: "/gifs/12-messi-messi-crying-gif.gif" },
    { title: "Coming Soon", number: "05", description: "A tiny game built in the browser.", interactive: false, gif: "/gifs/13-messi-gif.gif" },
    { title: "Coming Soon", number: "06", description: "Experimental UI motion studies.", interactive: false, gif: "/gifs/14-poor-ronaldo-ronaldo-crying-gif.gif" },
    { title: "Coming Soon", number: "07", description: "Shader sketches and gradients.", interactive: false, gif: "/gifs/15-reaction-sports-gif.gif" },
    { title: "Coming Soon", number: "08", description: "CLI tool for fun productivity.", interactive: false, gif: "/gifs/16-ronaldo-laughing-cristiano-ronaldo-gif.gif" },
    { title: "Coming Soon", number: "09", description: "Reverse-engineering small apps.", interactive: false, gif: "/gifs/17-ronaldo-gif.gif" },
    { title: "Coming Soon", number: "10", description: "Learning Rust, one project at a time.", interactive: false, gif: "/gifs/18-sad-messi-messi-gif.gif" },
    { title: "Coming Soon", number: "11", description: "Audio-reactive visuals.", interactive: false, gif: "/gifs/19-tll4k-messi-gif.gif" },
    { title: "Coming Soon", number: "12", description: "A minimal note-taking toy.", interactive: false, gif: "/gifs/20-trollszn123-ronaldo-gif.gif" },
  ] as Experiment[],
};
