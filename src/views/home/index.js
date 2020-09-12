import style from './home.scss'

import landing from '@/components/landing'

const home = ({ newState }) => {
  const state = newState({
    counter: 0
  })

  return ['main', {
    class: style.home,
  }, [
    landing,
  ]]
}

export default home
