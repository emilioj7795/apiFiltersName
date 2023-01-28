import React, {useState, useEffect} from 'react';

const SearchComponent = () => {
    // setear los hooks useState
    const [ users, setUsers ] = useState([]);
    const [ search, setSearch ] = useState('');


    // funcion para traer los datos de la API 
    const URL = 'https://jsonplaceholder.typicode.com/users';
    const ShowData = async () =>{
        const response = await fetch(URL)
        const data = await response.json()
        setUsers(data)

    };

    // metodo de filtrado
    let results = []
    if (!search){
        results = users
    }else {
        results = users.filter ( (dato) =>
        dato.name.toLowerCase().includes(search.toLocaleLowerCase())
        )
    };
    


    // funcion de busqueda
    const searcher = (e)=> {
        setSearch(e.target.value)
    };

    useEffect ( ()=> {
        ShowData()
    }, []);


    return (
        <div> 
            <input value={search}
            onChange ={searcher}
             type='text' 
             placeholder='search' 
             className='form-control'/>

            <table className='table table-striped table-hover mt-5 shadow-lg'>
                <thead>
                    <tr className='bg-curso text-white'>
                        <th>Name</th>
                        <th>Users Name</th>
                        </tr>
                        </thead>
                        <tbody>
                            {results.map((user)=> (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                         </tr>
                            ))}
                        </tbody>
                        </table> 
                        </div>
    )
}

export default SearchComponent;