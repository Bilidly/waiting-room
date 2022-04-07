import {useState, useEffect} from "react"

// Create your functional component:
export const Timer = () => {

  const [message, setMessage] = useState("")
  


    setTimeout(() => {
      console.log("THE MESS " + message)
      setMessage("fjdjf");
    }, 5000);


  return (
    <div className="uppercase text-8xl m-auto mb-6 mt-60 max-w-[100%] content-center">{message}<span className="dots"><span>.</span><span>.</span><span>.</span></span></div>
  )
}
