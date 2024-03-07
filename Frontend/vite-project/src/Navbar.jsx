import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className='container'>
          <div className='brand-icon'><Link to="/">Navbar</Link></div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar