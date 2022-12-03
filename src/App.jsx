import React from "react"
import { BrowserRouter } from "react-router-dom";
import RootRoute from "./Routes/RootRouter";
import { Provider } from "react-redux";
import store from './store/instanse';
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from './store/instanse';

function App() {
    return (
        <React.Fragment>
            <Provider store={store}>
                <PersistGate persistor={persistor} loading={'loading...'}>
                    <BrowserRouter>
                        <RootRoute/>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </React.Fragment>
    )
}

export default App;