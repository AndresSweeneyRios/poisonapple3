export const hookProps = (element, props) => {
  for ( const [ key, value ] of Object.entries(props) ) {
    const matchedEvent = key.match(/^on([A-Z][a-z]+)$/)

    if (matchedEvent) {
      const [, eventName] = matchedEvent

      switch (eventName) {
        case 'Mounted': 
          value.bind(element)()
          break

        default:
          element.addEventListener(eventName.toLowerCase(), value)
      }
    } else {
      element.setAttribute(key, value)
    }
  }
}

export const processComponent = ({ component, existingElement, rerender, newState }) => {
  const normalized = normalizeComponent (
    typeof component === 'function' ? component({ render, rerender, newState }) : component
  )

  if (typeof normalized === 'string' || typeof normalized === 'number' ) {
    const element = document.createTextNode(normalized)

    return { props: [], children: [], element }
  } else {
    const { tagName, props, children } = normalized

    const element = existingElement || document.createElement(tagName)
  
    return { props, children, element }
  }
}

export const render = ( component ) => {
  let rerender = () => {}

  const state = new Proxy({}, {
    get (target, prop) {
      return target[prop]
    },

    set (target, prop, value) {
      target[prop] = value
      rerender()
      return true
    },
  })

  const newState = ( object ) => Object.assign(state, object)

  const { props, children, element } = processComponent({ 
    component, 
    rerender, 
    newState,
  })

  hookProps(element, props)

  const renderedChildren = children.map(render)

  for ( const { element: childElement } of renderedChildren ) {
    element.append(childElement)
  }

  rerender = (newChild) => {
    if (element.nodeName === '#text' && newChild !== component) {
      element.textContent = newChild
    }

    const { props, children: newChildren } = processComponent({ 
      component: newChild || component, 
      existingElement: element, 
      rerender,
      newState: () => state,
    }, element)

    // hookProps(props, element)

    for (const i in renderedChildren) {
      renderedChildren[i].rerender(newChildren[i])
    }
  }

  return { component, children, props, rerender, renderedChildren, element }
}

export const normalizeComponent = (args) => {
  if (!Array.isArray(args)) return args

  const tagName = args[0]

  const props = !Array.isArray(args[1]) && typeof args[1] === 'object' ? args[1] : {}

  const children = 
    Array.isArray(args[1]) ? args[1] :
    Array.isArray(args[2]) ? args[2] :
    typeof args[1] === 'string' || typeof args[1] === 'number' ? [args[1]] :
    typeof args[2] === 'string' || typeof args[2] === 'number' ? [args[2]] :
    []

  return { tagName, props, children }
}