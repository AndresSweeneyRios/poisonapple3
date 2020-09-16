import style from './home.scss'

import landing from '@/components/landing'
import carousel from '@/components/carousel'
import projects from '@/components/projects'

const home = () => {
  return ['main', {
    class: style.home,
  }, [
    // carousel,
    landing,
    projects,
  ]]
}

export default home
