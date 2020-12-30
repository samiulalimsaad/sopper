import React, { useEffect } from "react";
import "./App.css";
import LinkedPage from "./components/pages/LinkedPage";
import { Provider } from "react-redux";
import { store } from "./components/redux/store";
function App() {
    return (
        <Provider store={store}>
            <div
                style={{
                    backgroundImage: "url(./img/white_leather.png)",
                }}
            >
                <LinkedPage />
            </div>
        </Provider>
    );
}

export default App;
