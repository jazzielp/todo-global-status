import { createRoot } from 'react-dom/client'
import { App } from './App'
import './index.css'

import { store } from './store'
import { Provider } from 'react-redux'

const root = document.getElementById('root')
if (root == null) throw new Error('No root element found')

createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
)
