import NavbarSecondry from '@/components/Navbar-Secondry'
import React from 'react'
import ContactPage from './contactPage'

export default function page() {
    return (
        <main className='w-full'>
            <NavbarSecondry />
            <ContactPage />
        </main>
    )
}
