import { template, link } from 'bitt'

import styles from './landing.scss'

import appleImage from '@/assets/lowpoly_apple_transparent.webp'

import gamejoltSVG from 'icons/gamejolt.svg'
import githubSVG from 'icons/github.svg'
import soundcloudSVG from 'icons/soundcloud.svg'
import twitchSVG from 'icons/twitch.svg'

const landing = ['div', {
  class: styles.landing,
}, [
  ['div', {
    class: styles.horizontal,
  }, [
    ['img', { src: appleImage }],

    ['div', {
      class: styles.vertical,
    }, [
      ['h1', `Hey, I'm Andres, a software developer.`],
      ['h2', `Here's some stuff I made.`],
      ['div', {
        class: styles.social,
      }, [
        ['a', { href: 'https://github.com/Andr3wRiv3rs', title: 'GitHub' }, [template(githubSVG)]],
        ['a', { href: 'https://soundcloud.com/poison_apple', title: 'SoundCloud' }, [template(soundcloudSVG)]],
        ['a', { href: 'https://gamejolt.com/@AndrewRivers', title: 'GameJolt' }, [template(gamejoltSVG)]],
        ['a', { href: 'https://www.twitch.tv/andr3wriv3rs', title: 'Twitch' }, [template(twitchSVG)]],
      ]],
      ['p', [
        'Poison Apple#9351', 
        ['br'], 
        'andrewarivers@gmail.com',
      ]],
    ]],
  ]]
]]

export default landing
