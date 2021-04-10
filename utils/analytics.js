/**
 * Event - Add custom tracking event.
 * @param {string} category 
 * @param {string} action 
 * @param {string} label 
 */

import ReactGA from 'react-ga';

export const initGA = () => {
  console.log('GA init')
  ReactGA.initialize('UA-160592978-1')
}
export const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`)
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
export const logEvent = (category, action, label) => {
  if (category && action) {
    ReactGA.event({ category, action, label })
  }
}
export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}