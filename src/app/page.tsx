'use client'
import { FormEvent, useState } from "react"
import { useRouter} from 'next/navigation'

export default function Home() {

  const [inputVal ,setInputVal] = useState('')
  const {push} = useRouter()


  const handleSubmit = (e:FormEvent)=>{
    e.preventDefault()
    push(`/prediction/${inputVal}`)
  }

  return (
    <div>
      <div>
        <h1>enter your name</h1>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <input
        className="text-black"
         type="text" 
         value={inputVal}
         placeholder="Type your name...."
         onChange={(e)=>setInputVal(e.target.value)}/>
        <button type="submit"> Predict Dta</button>
      </form>
    </div>
  )
}
