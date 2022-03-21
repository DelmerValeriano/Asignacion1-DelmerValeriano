import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector} from 'react-redux';
import { getKeyboards } from '../../actions/productos';
import { ContenidoList } from '../Contenido/ContenidoList'

export const Keyboards = () => {
  const dispatch=  useDispatch()
  
  const [formvalues, setFormValues] = useState({ search: "" });
  const { search } = formvalues;
  
  const { productos } = useSelector((state) => state.producto);
  
  const [keyboardsFilter, setKeyboardsFilter] = useState([]);
  
  useEffect(() => {
    dispatch(getKeyboards());
  }, [dispatch]);
  
  useEffect(() => {
    setKeyboardsFilter(productos);
  }, [productos]);

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...search,
      [target.name]: target.value,
    });

    let filtrado = [];

    if (search === "") {
      setKeyboardsFilter(productos);
    } else {
      filtrado = productos.filter(function (item) {
        return item.name.toLowerCase().match(target.value.toLowerCase());
    });
      setKeyboardsFilter(filtrado);
    }
  };
  return (
    <div>
       <div className="ml-10 my-8 font-serif ">
        <h1 className="mb-4 text-5xl">KEYBOARDS</h1>
        <input placeholder="Search..." maxLength="25" onChange={handleInputChange}  name="search" value={search} className="shadow appearance-none border rounded pr-64 py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" />
       
      </div>





      {(keyboardsFilter.length === 0) ? (
        <div
          className="bg-red-300 border-l-4 border-red-700 mb-10  text-orange-700 p-4"
          role="alert"
        >
          <p className="font-bold text-black ">Keybords</p>
          <p className="font-bold text-black">No results, try again.</p>
        </div>
      ) : (
        <ContenidoList 
        productoFilter={keyboardsFilter} />
        
      )}


      
        
     
    </div>
  )
}
