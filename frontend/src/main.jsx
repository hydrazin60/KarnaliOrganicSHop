import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store/store"; // Import persistor from your store file
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* Pass persistor directly */}
        <App />
        <Toaster />
      </PersistGate>
    </Provider>
  </StrictMode>
);
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { Toaster, toast } from "sonner";
// import { Provider } from "react-redux";
// import { store } from "./redux/store/store";
// import { PersistGate } from "redux-persist/integration/react";
// import persistStore from "redux-persist/es/persistStore";
// let persistor = persistStore(store);
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={store.persistor}>
//         <App />
//         <Toaster />
//       </PersistGate>
//     </Provider>
//   </StrictMode>
// );
