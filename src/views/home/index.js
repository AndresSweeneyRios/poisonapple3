import styles from './home.scss'

import landing from '@/components/landing'
// import carousel from '@/components/carousel'
import projects from '@/components/projects'
import skills from '@/components/skills'

const home = () => {
  return ['main', {
    class: styles.home,
  }, [
    ['div', { class: styles.background }],
    // carousel,
    landing,
    // ['hr'],
    projects,
    // ['hr'],
    skills,
  ]]
}

export default home
