import { useState, useEffect } from "react";


const Profile = (props)=> {
  const [userName, setUserName] = useState("dummy name");
  const [email, setEmail] = useState("dummy@gamil.com");
  const [count,setCount] = useState(0);
  const [count2,setCount2] = useState(0);
  
  useEffect(()=>{
    setUserName("Yogini");
    setEmail("yoginikokare@gmail.com");
    console.log("child2 - useEffect()");
    const timer = setTimeout(()=> {
      console.log("setTimeout callback fun called after 30 second");
    }, 30);

    return () => {
      clearTimeout(timer);
      console.log("UseEffect Unmounting");
    }
  }, [])

  console.log("child2 - render()");

  return(
    <div className="bg-gray-200 shadow-lg w-[25%] h-[200px]">
       <h3 className="font-bold">Profile of {props.name}</h3>
       <div>
          <h3>Name: {userName}</h3>
          <h3>Email: {email}</h3>
        </div>
    </div>
  )

}

export default Profile;