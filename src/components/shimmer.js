const shimmer = () =>{
    return Array(20).fill(0).map((n,i)=>(
        <div key={i} className="p-5 m-5 h-64 w-64 border border-black rounded-lg">
        <div className="w-64 h-64 bg-black-200"></div>
         </div>
    ))
}

export default shimmer;