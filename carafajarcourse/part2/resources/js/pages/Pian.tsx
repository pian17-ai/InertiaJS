import { Link } from '@inertiajs/react'
import React from 'react'

function Tisha() {
  return (
    <div>
      <div className="px-3 py-2 bg-slate-600">
                <ul className="flex">
                    <li className="px-2 mr-2 bg-slate-800 rounded-md"><Link href={"/"} >Home</Link></li>
                    <li className="px-2 bg-slate-800 rounded-md"><Link href={"/student"} >Student</Link></li>
                </ul>
            </div>
      <h1>Pian Page</h1>
    </div>
  )
}

export default Tisha
