const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter,RouterProvider} = require('react-router-dom');



const HomePage = require('./pages/home');
const NuevoMusicoPage = require('./pages/nuevo-musico');
const VerInstrumentoPage = require('./pages/ver-instrumento');
const NuevoInstrumentoPage = require('./pages/nuevo-instrumento');


const router = createBrowserRouter([
    {path: '/',element:<HomePage/>},
    {path: '/nuevo-musico',element:<NuevoMusicoPage/>},
    {path: '/nuevo-instrumento',element:<NuevoInstrumentoPage/>},
    {path: '/ver-instrumento/:id',element:<VerInstrumentoPage/>},
])




ReactDOM.render(
<React.StrictMode>
    <RouterProvider router={router}/>
</React.StrictMode>,   
document.getElementById('react'))
