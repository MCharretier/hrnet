import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import employeeReducer from '../features/employee/employee.slice'
import { composeWithDevTools } from '@redux-devtools/extension'

const rootReducer = combineReducers({
    employee: employeeReducer
})

const persistedReducer = persistReducer(
    {
        key: 'root',
        storage
    },
    rootReducer
)

const store = configureStore(
    {
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false
            })
    },
    composeWithDevTools()
)

const persistor = persistStore(store)

export { store, persistor }
