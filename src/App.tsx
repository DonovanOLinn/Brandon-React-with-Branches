import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import routes from './config/routes'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import { store } from './redux/store'

import AuthChecker from './auth/AuthChecker'
//NOTES PLEASE LOOK HERE
// So, if you hosted to Netlify, and you are getting errors pop up whenever you try to add, update, or delete from your dashboard,
// switch out all of the BrowserRouters on this page to HashRouters. That has fixed the problem. If you manage to find another solution,
// please reach out and let me know!

function App() {

  return (
    <HashRouter>
      <Navbar />
      <Provider store={store}>
        <Routes>
          { routes.map((route: any, index: any) => (
            <Route
              key={index}
              path={route.path}
              element={
                route.protected ? (
                
                <AuthChecker>
                  <route.component />
                </AuthChecker>
                ) : (
                  <route.component />
                )
              }
              />
          )) }
        </Routes>
      </Provider>
    </HashRouter>
  )
}

export default App
