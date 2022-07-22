
import React from 'react'
import { useParams } from 'react-router-dom'
import Title from '../components/Title'

const AnimalPage = () => {

    const { idAnimal } = useParams()

    return (
        <>
            <Title titulo="Pagina de animal individual" />
            <main>
                <article>
                    <div>{idAnimal}</div>
                </article>
            </main>
        </>
    )
}

export default AnimalPage