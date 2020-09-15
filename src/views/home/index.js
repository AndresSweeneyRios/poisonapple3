import style from './home.scss'

import landing from '@/components/landing'
import carousel from '@/components/carousel'

const home = () => {
  return ['main', {
    class: style.home,
  }, [
    carousel,
    landing,
  ]]
}

export default home
