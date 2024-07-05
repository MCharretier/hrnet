import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import CreateEmployee from './pages/CreateEmployee'
import EmployeeList from './pages/EmployeeList'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <Routes>
                        <Route path="/" element={<CreateEmployee />} />
                        <Route path="/list" element={<EmployeeList />} />
                    </Routes>
                </Router>
            </PersistGate>
        </Provider>
    </React.StrictMode>
)
