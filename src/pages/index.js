import { useEffect } from "react"
import { useSession } from "next-auth/react"
import Router from "next/router"



const Index = () => {
    const { status, data } = useSession()
    useEffect(() => {
        if (status === "authenticated"){
            Router.replace("/plant/")
        }else{
          Router.replace("/auth/login/")
        }

    }, [status])
  
  return (
    <>
        Loading
    </>
    
  )
}



export default Index
