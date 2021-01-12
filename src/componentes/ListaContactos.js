import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import db from './../firebase/firebaseConfig';
import Contacto from './Contactos';

const ListaContactos = () => {

    const [contactos, cambiarContactos] = useState([
        { id: 1, nombre: 'Carlos', correo: 'Correo' },
        { id: 2, nombre: 'Juan', correo: 'Correo 2' }
    ]);

    useEffect(()=> {
        db.collection('usuarios').onSnapshot((snapshot)=>{
            cambiarContactos(snapshot.docs.map((documento)=>{
                return {...documento.data(), id: documento.id}
            }))
        });
    },[]);

    return (
        contactos.length > 0 &&
        <ContenedorContactos>
            {contactos.map((contacto) => (
                <Contacto
                    key={contacto.id}
                    id={contacto.id}
                    nombre={contacto.nombre}
                    correo={contacto.correo}
                />
                // <p key={contacto.id}>
                //     {contacto.nombre} -
                //     {contacto.correo}
                // </p>
            ))}
        </ContenedorContactos>
    );
}

const ContenedorContactos = styled.div`
    margin-top: 40px;
`;

export default ListaContactos;