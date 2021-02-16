import { useState } from 'react'
import { Dashboard } from '../components/Auth/registration'
import { Footer } from '../components/Nav/copyright'
import { Header } from '../components/Nav/head'
import { Navigation } from '../components/Nav/navigation'
// import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className="container-alt flex-col justify-between">
      <Header title='Account' />
      <Navigation />
      <Dashboard />
      <Footer />
    </div>
  )
}
