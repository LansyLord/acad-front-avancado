import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DpoLgpd = () => {

    const [dpo, setDpo] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/dpolgpd")
            .then(response => setDpo(response.data))
            .catch(error => console.error("Erro ao carregar a lista dpo: ", error))
    }, [])

    return (
        <div>
            <h1>DPO Lgpd:</h1>
            {
                dpo.map((dpo) => (
                    <div key={dpo.id}>
                        {dpo.texto}
                    </div>
                ))
            }
        </div>
    )
}

export default DpoLgpd