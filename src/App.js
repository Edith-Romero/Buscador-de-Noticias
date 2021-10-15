import React, {Fragment,useState,useEffect} from 'react';
import Header from './Componentes/Header';
import Formulario from './Componentes/Formulario';
import ListadoNoticias from './Componentes/ListadoNoticias';


function App() {

  // Definir la categoria y noticias
  const [categoria,guardarCategoria]= useState('');
  const [noticias,GuardarNoticias] = useState([]);

  useEffect(() => {
    const ConsultarApi = async()=>{
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=ff8614bd7a38448590f6148c4f7bcc24`

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      GuardarNoticias(noticias.articles);
    }
    ConsultarApi();
  }, [categoria])

  return (
    <Fragment>
      <Header
        titulo='Buscador de Noticias'
      />
      <div className="container white">
        <Formulario
        guardarCategoria={guardarCategoria}/>
      </div>
      <ListadoNoticias
        noticias = {noticias}
      />
    </Fragment>
  );
}

export default App;
