import { useState, useEffect } from 'react';
import './App.css';
import Footer from './Nav';

function Rick() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []); // Dependency array to run the effect only once on mount

    return (
        
        <div className="table-container">
            <Footer/>
            <div className='flex'>
            <img src="https://images.vexels.com/content/137617/preview/geometric-logo-abstract-2ba9b8.png" className="mail" />
            <h1 className='title'>Resultados de la Api</h1></div>
        <table className='tabla'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                            {user.address.street}, {user.address.suite}, {user.address.city}
                        </td>
                        <td>{user.phone}</td>
                        <td>
                            <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" className='title'>
                                {user.website}
                            </a>
                        </td>
                        <td>{user.company.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <a href="/" className='link'>volver</a>
    </div>
    );
}

export default Rick;
