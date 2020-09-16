import { template } from 'bitt'
import marked from 'marked'
import styles from './projects.scss'
import projectList from '@/assets/projects'
import badgeColors from './badges'

import discordSVG from 'icons/discord.svg'
import gamejoltSVG from 'icons/gamejolt.svg'
import githubSVG from 'icons/github.svg'
import npmSVG from 'icons/npm.svg'
import soundcloudSVG from 'icons/soundcloud.svg'
import twitchSVG from 'icons/twitch.svg'
import twitterSVG from 'icons/twitter.svg'
import youtubeSVG from 'icons/youtube.svg'

import { 
  languages,
  highlight,
} from 'prismjs'

marked.setOptions({
  highlight (string, language) {
    return language && languages[language]  
      ? highlight(string, languages[language])
      : string
  },
  gfm: true,
})

const thumbnails = {}

for (const key in projectList) {
  thumbnails[key] = require(`@/assets/projects/${key}/${key}.png`)
}

const getIcon = (type) => {
  switch (type) {
    case 'discord': return discordSVG
    case 'gamejolt': return gamejoltSVG
    case 'github': return githubSVG
    case 'npm': return npmSVG
    case 'soundcloud': return soundcloudSVG
    case 'twitch': return twitchSVG
    case 'twitter': return twitterSVG
    case 'youtube': return youtubeSVG
  }
}

const processHandle = ({ type, value }) => {
  const href = type === 'twitter'
    ? `https://twitter.com/${value}`
    : type === 'instagram'
    ? `https://instagram.com/${value}` 
    : type === 'gamejolt'
    ? `https://gamejolt.com/@${value}`
    : ''
    
  return ['a', { href }, `@${value}`]
}

const projects = () => {
  const components = Object.values(projectList).map(({
    title,
    description,
    id,
    left,
    handles,
    links,
    badges,
  }) => {
    return ['div', {
      class: styles[id] || '',
    }, [
      ['img', {
        style: {
          objectPosition: left ? 'left center' : 'center center',
        },

        src: thumbnails[id]
      }],

      ['div', { class: styles.shadow }],

      ['div', [
        ['div', { class: styles.title }, [
          ['h3', title],
          ...(links || []).map(({
            type,
            url,
          }) => {
            return ['a', { href: url, type }, [template(getIcon(type))]]
          }),
        ]],
        template(marked(description.replace(/^\s+|\s+$/, ''))),
        ['div', { class: styles.handles }, (handles || []).map(processHandle)],
        ['div', { class: styles.badges }, (badges || []).map(
          badge => ['div', [
            ['div', { 
              // style: {
              //   backgroundColor: badgeColors[badge],
              // }
            }],

            ['p',{ 
              style: {
                // color: badgeColors[badge],
              }
            }, badge],
          ]],
        )],
      ]],
    ]]
  })

  return ['div', { class: styles.projects }, [
    // ['h1', 'MyProjects'],
    ...components,
  ]]
}

export default projects
