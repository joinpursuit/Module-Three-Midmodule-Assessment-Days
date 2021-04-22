import ProductCard from "./ProductCard"
import React from 'react'

const Product = ({students}) => {
    return (
        <section>
            {students.map((student, i) => (
                <ProductCard {...student} key={student.id} />
            ))}
        </section>
    )
}




