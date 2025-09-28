import { useEffect, useState } from "react";
import Card from './card'
import Shimmer from './shimmer'

const Body = () =>{
    const [memes,setMemes] = useState(null);
    useEffect(()=>{
        fetchMemes()
    },[])
    const fetchMemes = async () =>{
        const data = await fetch('https://meme-api.com/gimme/20');
        const json = await data.json()
        setMemes(json.memes);
        console.log(json);
    }
    return <div className="flex flex-wrap">
        {!memes ? <Shimmer/> : memes.map((meme,i)=> <Card key={i} data={meme}/>)}
    </div>
}
export default Body