import styles from './skills.scss'

const skillgroups = [
  ['Frontend', [
    "Sass",
    "Stylus",
    "WebRTC",
    "Electron",
    "jQuery",
    "Webpack",
    "Tailwind",
    "Vuetify",
    "Bootstrap",
  ]],

  ['Backend', [
    "Express.js",
    "Koa",
    "MongoDB",
    "MySQL",
    "NGINX",
    "Stripe",
    "Mollie",
    "Discord.js",
  ]],
  
  ['Languages', [
    "JavaScript",
    "TypeScript",
    "C#",
    "Godot Script",
    "GML",
  ]],

  ['Frameworks', [
    "Express",
    "Phonegap / Cordova",
    "Vue.js",
    "Nuxt.js",
    "React",
    "Next.js",
    "Preact",
  ]],

  ['Gamedev', [
    "Unity",
    "Godot",
    "GameMaker: Studio",
    "Construct 2",
    "PixiJS",
    "Three.js",
  ]],

  ['Graphics', [
    "Blender",
    "MagicaVoxel",
    "Photoshop",
    "Figma",
    "Inkscape",
  ]],
]

const skills = () => {
  return ['div', { 
    id: 'skills', 
    class: styles.skills, 
  }, skillgroups.map(([ title, skills ]) => {
    return ['ul', [
      ['li', { class: styles.title }, title],
      ...skills.map(skill => ['li', skill]),
    ]]
  })]
}

export default skills
