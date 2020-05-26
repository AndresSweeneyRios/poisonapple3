import { render } from './render'

const routes = [
  {
    regex: /^\/?$/,
    module: 'views/home',
  }
]

export default (container) => {
  const testRoute = async () => {
    for ( const { regex, module } of routes ) {
      if (regex.test(window.location.pathname)) {
        const { default: component } = await import(/* webpackChunkName: "[request]" */  `/${module}`)

        container.append(render(component).element)
      }
    }
  }

  testRoute()
}
