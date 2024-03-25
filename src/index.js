import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import { MUIDemo } from './materialUI-demo/mui-demo';
// import { ReduxDemo } from './redux-demo/redux-demo';
// import { ContextDemo } from './context-demo/context-demo';
// import { TutorialExample } from './router-demo/tutorial-home';
// import { ProjectHome } from './component-properties/project-home/project-home';
// import { TableDemo } from './component-properties/table-demo/table-demo';
// import { FormEvents } from './form-events/form-events';
// import { Bounce } from './timer-events/timer-events';
// import { ClipboardEvents } from './clipboard-events/clipboard-events';
// import { RegularExpression } from './regular-expression/regular-expression';
// import { EMICalculator } from './emi-calculator/emi-calculator';
// import { ElementStateEvents } from './elementstate-events/elementstate-events';
// import { ButtonEvents } from './button-events/button-events';
// import { KeyboardEvents } from './keyboard-events/keyboard-events';
// import {Shopper} from './shopper/shopper';
// import { NasaAPI } from './nasa-api/nasa-api';
// import { APIAxios } from './api-demo/api-axios';
// import { APIAjax } from './api-demo/api-ajax';
// import { AsyncFetch } from './api-demo/async-fetch';
// import { APIDemo } from './api-demo/api-demo';
// import { LifeCycle } from './life-cycle/lifeCycle';
// import { ClassBinding } from './binding/classBinding';
// import { StyleBinding } from './binding/styleBinding';
import { NetflixIndex } from './netflix/netflix-index';
// import { DataBinding } from './dataBinding/databinding';
// import {UseState} from './useState/usestate';
// import { EventDemo } from './event-binding/event-binding';
// import { MouseEvents } from './mouse-events/mouse-events';
// import {TouchEvents} from './touch-events/touch-events';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <App/> */}
   <NetflixIndex/>
   {/* <StyleBinding/> */}
   {/* <ClassBinding/> */}
   {/* <LifeCycle/> */}
   {/* <APIDemo/> */}
   {/* <AsyncFetch/> */}
   {/* <APIAjax/> */}
   {/* <APIAxios/> */}
   {/* <Shopper/> */}
   {/* <NasaAPI/> */}
   {/* <EventDemo></EventDemo> */}
   {/* <MouseEvents/> */}
   {/* <KeyboardEvents/> */}
   {/* <ButtonEvents/> */}
   {/* <ElementStateEvents/> */}
   {/* <EMICalculator/> */}
   {/* <RegularExpression/> */}
   {/* <ClipboardEvents/> */}
   {/* <Bounce/> */}
   {/* <FormEvents/> */}
   {/* <TouchEvents/> */}
   {/* <ProjectHome/> */}
   {/* <TableDemo/> */}
   {/* <TutorialExample/> */}
   {/* <ContextDemo/> */}
   {/* <ReduxDemo/> */}
   {/* <MUIDemo/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
