const card = ({data}) =>{
    const {url,author,title} = data;
    return <div className="p-5 m-5 h-64 w-64 border border-black rounded-lg">
        <p>{title}</p>
        <p>{author}</p>
        <img alt="meme" src={url} className="w-full h-40 object-cover rounded-md mt-2"></img>
    </div>
}

export default card