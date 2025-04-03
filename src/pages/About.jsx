const About=()=>{
    const data={
        color:"red",
        textDecoration:"overline"
     }
    return(
        <>
       <div style={{border:"3px solid red", width:"400px", height:"200px", borderRadius:"20px", margin:"auto", backgroundColor:"yellow",
            color:"blue"}}>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center",width:"300px", height:"150px",gap:"20px", borderRadius:"20px", margin:"auto", backgroundColor:"blue",
            color:"red", fontSize:"25px" , justifyContent:"center", marginTop:"25px",display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div style={{width:"200px", height:"100px",gap:"20px", borderRadius:"20px", margin:"auto", backgroundColor:"brown",
            color:"red", fontSize:"25px" , justifyContent:"center", marginTop:"20px",display:"flex", justifyContent:"center", alignItems:"center"}}>
                <p style={{display:"flex", justifyContent:"center", alignItems:"center", color:"white"}}>Cybrom</p>
            </div>
        </div>
       </div>


    
       <h1 style={data}>ayushhhh</h1>
        </>
    )
}
export default About;