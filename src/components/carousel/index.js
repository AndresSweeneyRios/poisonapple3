import styles from './carousel.scss'
import gallery from '@/assets/gallery'

const context = document.createElement('div')
context.className = styles.carousel

const loadCarousel = async () => {
  const mappedGallery = gallery.map((path) => {
    const src = require(`@/assets/gallery/${path}`)
    const img = document.createElement('img')

    img.setAttribute('aria-hidden', 'true')
    
    img.src = src
  
    return img
  })
  
  let columnCount = Math.round(window.innerWidth / 300)
  
  const appendColumns = async () => {
    const imageGroups = new Array(columnCount).fill(0).map(() => []) 
    
    mappedGallery.forEach((item, index) => {
      imageGroups[
        Math.floor(index / ( gallery.length / columnCount ))
      ].push(item)
    })
  
    const columnPrototype = document.createElement('div')
    columnPrototype.className = styles.column
    columnPrototype.style.width = 100 / columnCount + '%'
  
    const columns = imageGroups.map((images) => {
      const column = columnPrototype.cloneNode()
  
      column.append(...images, ...images.map(image => image.cloneNode({ deep: false })))
  
      return column
    })
  
    for (const column of columns) {
      context.appendChild(column)
    }
  }
  
  appendColumns()
  
  window.addEventListener('resize', () => {
    const newColumnCount = Math.round(window.innerWidth / 300)
  
    if (columnCount != newColumnCount) {
      columnCount = newColumnCount
  
      while (context.firstChild) {
        context.removeChild(context.firstChild)
      }
  
      appendColumns()
    }
  })
}

loadCarousel().catch(console.error)

export default context
