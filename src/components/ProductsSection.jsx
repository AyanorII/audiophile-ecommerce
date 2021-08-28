import React from "react";
import data from "../data.json";
import Product from "./Product";

export default function ProductsSection(props) {
    const filteredItems = data.filter(
        (product) => product.category === props.category
    );

    return (
        <section>
            {filteredItems.reverse().map((product, index) => (
                <Product
                    dataAos={index === 1 ? "fade-right" : "fade-left"}
                    index={index}
                    key={product.id}
                    src={product.image.mobile}
                    new={product.new}
                    name={product.name}
                    description={product.description}
                    slug={product.slug}
                    price={product.price}
                />
            ))}
        </section>
    );
}
