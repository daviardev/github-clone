import './style.css'
import './js/theme'

import { $ } from './src/lib/dom'

/**
 *
 * @param {NodeList} e
 * @param {String} event
 * @param {Function} callback
 * @param {NodeList} header
 */

const addEOnElement = (e, event, callback) => {
  for (const i of e) {
    i.addEventListener(event, callback)
  }
}

const header = $('[data-header]')
const searchField = $('[data-search-field]')
const searchToggler = $('[data-search-toggler]')

let isExpanded = false

window.addEventListener('scroll', () => {
  header.classList[window.scrollY > 50 ? 'add' : 'remove']('active')
})

searchToggler.addEventListener('click', () => {
  header.classList.toggle('search-active')
  isExpanded = !isExpanded
  this.setAttribute('aria-expanded', isExpanded)
  searchField.focus()
})
