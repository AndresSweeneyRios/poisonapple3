import style from './home.scss'

import landing from '@/components/landing'
import carousel from '@/components/carousel'
import projects from '@/components/projects'
import skills from '@/components/skills'

const home = () => {
  return ['main', {
    class: style.home,
  }, [
    carousel,
    landing,
    // ['hr'],
    projects,
    // ['hr'],
    skills,
  ]]
}

export default home
