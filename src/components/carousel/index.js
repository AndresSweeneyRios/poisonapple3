import styles from './carousel.scss'
import gallery from '@/assets/gallery'

const mappedGallery = gallery.map((path) => {
  const src = require(`@/assets/gallery/${path}`)
  const img = document.createElement('img')
  
  img.src = src

  return img
})

const carousel = () => {
  return ['div', {
    class: styles.carousel,

    onMount () {
      const context = this

      let columnCount = Math.round(window.innerWidth / 300)

      const appendColumns = () => {
        const imageGroups = new Array(columnCount).fill(0).map(() => []) 
        
        mappedGallery.forEach((item, index) => {
          imageGroups[
            Math.floor(index / ( gallery.length / columnCount ))
          ].push(item)
        })

        const columns = imageGroups.map((images) => {
          const column = document.createElement('div')
          column.className = styles.column
          column.style.width = 100 / columnCount + '%'

          column.append(...images, ...images.map(image => image.cloneNode({ deep: false })))

          return column
        })

        context.append(...columns)
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
  }]
}

export default carousel
