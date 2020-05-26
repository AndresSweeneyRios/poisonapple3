import style from './home.scss'

export default ({ newState }) => {
  const state = newState({
    counter: 0
  })

  return ['div', [
    ['p', { class: style.home }, state.counter],
    ['button', { onClick: () => state.counter-- }, '-'],
    ['button', { onClick: () => state.counter++ }, '+'],
  ]]
}
