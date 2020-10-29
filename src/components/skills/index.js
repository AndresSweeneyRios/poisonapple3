import styles from './skills.scss'

const skillgroups = [
  ['Languages', [
    "JavaScript",
    "TypeScript",
    "C#",
    "Godot Script",
    "GML",
  ]],

  ['Frontend', [
    "Vue.js",
    "React",
    "WebRTC",
    "Electron",
    "jQuery",
    "Webpack",
    "Parcel",
    "Phonegap",
  ]],

  ['Styles', [
    "PostCSS",
    "Tailwind",
    "Vuetify",
    "Bootstrap",
    "Bulma",
    "Sass",
    "Stylus",
  ]],

  ['Backend', [
    "WebSockets",
    "Express.js",
    "Koa",
    "MongoDB",
    "NGINX",
    "Discord.js",
    "Stripe",
    "Mollie",
    "Paypal API",
  ]],

  ['Design', [
    "Figma",
    "Blender",
    "MagicaVoxel",
    "Photoshop",
    "Inkscape",
  ]],

  ['DevOps', [
    "Docker",
    "Kubernetes",
    "Github Actions",
    "DigitalOcean",
    "Firebase",
    "AWS",
  ]],

  ['Crypto', [
    "Bitcoin",
    "Ethereum",
    "Web3.js",
    "BlockCypher",
    "Blocknative",
  ]],

  ['Gamedev', [
    "Unity",
    "Godot",
    "GameMaker: Studio",
    "Construct 2",
    "PixiJS",
    "Three.js",
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
