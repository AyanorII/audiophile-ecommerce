import React from 'react'
import CategorySection from '../components/CategorySection'
import Hero from '../components/Hero'
import Page from "../components/Page"
import PremiumSpeaker from '../components/PremiumSpeaker'
import HomeCard1 from '../components/HomeCard1'
import HomeCard2 from '../components/HomeCard2'

export default function Home() {


    return (
        <Page>
            <Hero />
            <CategorySection />
            <PremiumSpeaker />
            <HomeCard1 />
            <HomeCard2 />
        </Page>
    )
}
