import React from 'react'
import Category from './Category'
import Page from '../components/Page'
import ProductsSection from '../components/ProductsSection'
import CategorySection from '../components/CategorySection'

export default function CategoryPage(props) {
    return (
        <Page>
            <Category>{props.category}</Category>
            <ProductsSection category={props.category}/>
            <CategorySection />
        </Page>
    )
}
