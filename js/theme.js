/* eslint-disable no-undef */
'use strict'

import { $, $HTML } from '../src/lib/dom'

const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
let isPressed = false

if (sessionStorage.getItem('theme')) {
  $HTML.dataset.theme = sessionStorage.getItem('theme')
} else {
  $HTML.dataset.theme = isDark ? 'dark' : 'light'
}

const changeTheme = function () {
  isPressed = !isPressed
  this.setAttribute('aria-pressed', isPressed)
  $HTML.setAttribute('data-theme', ($HTML.dataset.theme === 'light') ? 'dark' : 'light')
  sessionStorage.setItem('theme', $HTML.dataset.theme)
}

window.addEventListener('load', () => {
  const themeButton = $('[data-theme-btn]')

  themeButton.addEventListener('click', changeTheme)
})
