import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppComponent from "./components/app/appComponent.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<App />*/}
      {<AppComponent></AppComponent>}
  </StrictMode>,
)
