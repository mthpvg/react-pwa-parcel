export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('../service-worker.js')
      .then(registration => {
        console.log('[SW] service Worker is registered', registration.scope)
      })
      .catch(err => {
        console.error('[SW] service Worker registration failed:', err)
      })
    })
  }
}
