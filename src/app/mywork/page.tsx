import React from 'react'
import NavbarSecondry from '@/components/Navbar-Secondry'
import WorkPage from './workPage'

export default function page() {
    return (
        <main className='w-full'>
            <NavbarSecondry />
            <WorkPage />
        </main>
    )
}
