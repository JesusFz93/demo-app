import React, { useState } from 'react'
import Card from '../components/Card'
import Title from '../components/Title'

const initialAnimals = [
    {
        id: 1,
        name: 'Conejo',
        image: 'https://i.pinimg.com/564x/2a/7e/f4/2a7ef42f53c77aff9430de39e5dac24b--rabbits.jpg',
        description: "Eeste es un animal que le gustan las zanahorias"
    },
    {
        id: 2,
        name: 'Tigre',
        image: 'https://i.pinimg.com/originals/d7/be/ca/d7beca2c21d4600d065b8331775aa1f5.jpg',
        description: "Este animal es un felino"
    },
    {
        id: 3,
        name: 'Zebra',
        image: 'https://whatismyspiritanimal.com/wp-content/uploads/2016/12/Spirit-Animal-Quiz-Follower-Zebra-500x500.png',
        description: "Este animal sale en Madagascar"
    },
    {
        id: 4,
        name: 'Oso',
        image: 'https://whatismyspiritanimal.com/wp-content/uploads/2016/12/Spirit-Animal-Quiz-Protector-Grizzly-Bear-500x500.png',
        description: "Este animal es primo del oso panda"
    }
]

const AnimalsPage = () => {
    const [animales] = useState(initialAnimals)
    return (
        <>
            <Title titulo="Pagina de animales" />
            <main>
                <article>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            animales.map((animal) => (
                                <div key={animal.id} className="col">
                                    <Card {...animal} />
                                </div>
                            ))
                        }
                    </div>
                </article>
            </main>
        </>
    )
}

export default AnimalsPage