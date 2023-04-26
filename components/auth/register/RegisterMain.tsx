'use client'
import { useState } from 'react'
import Register1 from './Register1'
import Register2 from './Register2'

const RegisterMain = () => {
  const [email, setEmail] = useState('')
  const [fase2, setFase2] = useState(false)
  return <main>{!fase2 ? <Register1 setFase2={setFase2} email={email} setEmail={setEmail} /> : <Register2 email={email} setFase2={setFase2} />}</main>
}

export default RegisterMain
