const EmpDesign=(props)=>{
    return(
        <>
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.designation}</td>
            <td>{props.salary}</td>
        </tr>
        </>
    )
}
export default EmpDesign;