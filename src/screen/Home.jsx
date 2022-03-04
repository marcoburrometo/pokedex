import React from 'react'
import ListaPoke from '../components/ListaPoke';
import { useNavigate } from "react-router-dom";

function Home() {
    return (
        <div>
            <ListaPoke />
        </div>
    )
}

export default Home;
