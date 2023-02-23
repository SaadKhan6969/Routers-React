import axios from "axios"
import { useState } from "react"
import { Button } from "@mui/material"

function Post(){
    const [data,setdata]=useState([])
  let api = "https://jsonplaceholder.typicode.com/posts"
 let getAPIData=()=>{
  axios.get(api)
  .then((res)=>{
 setdata([...res.data])
  })
.catch((err)=>{
  console.log(err)
})
axios.post(api,{
  body:'Custom',
  title:'ABC',
  id:1,
})
.then((res)=>{
  console.log("Waw")
})
.catch((err)=>{
  console.log("Shat ho Ustazzz")
})
axios.put(api+'/1',{body:'Custom'})
.then((res)=>{
  console.log("Waw")
})
.catch((err)=>{
  console.log("Shat ho Ustazzz")
})
axios.delete(api+'/2')
.then((res)=>{
  console.log("Waw")
})
.catch((err)=>{
  console.log("Shat ho Ustazzz")
})}
    return(
        <>
         <div className="App">
   {data.map((x,i)=>{
    return(
    <div key={i}>
    <h3>{x.id}</h3>
    <h3>{x.title}</h3></div>)
   })}
   <Button onClick={getAPIData} variant="contained">Add</Button>

    </div>
        </>
    )
}
export default Post