/**
 * @method
 * Method to execute before page reloads
 * @param {BeforeUnloadEvent} event
 */
const beforeunloadHandler = (event: BeforeUnloadEvent) => {
  const message = 'É possível que as alterações feitas não sejam salvas.'
  event.preventDefault()
  event.returnValue = message

  return message
}
export default defineNuxtPlugin((nuxtApp) => {
  window.addEventListener('beforeunload', beforeunloadHandler)
})
