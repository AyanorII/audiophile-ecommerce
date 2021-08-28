import React from 'react'
import Header from '../components/Header'
import Page from '../components/Page'
import ProductsSection from '../components/ProductsSection'
import CategorySection from '../components/CategorySection'

export default function CategoryPage(props) {
    return (
        <Page>
            <Header>{props.category}</Header>
            <ProductsSection category={props.category}/>
            <CategorySection />
        </Page>
    )
}
