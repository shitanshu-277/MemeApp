import { useEffect, useState } from "react";
import Card from './card'
import Shimmer from './shimmer'

const Body = () =>{
    const [memes,setMemes] = useState([]);
    const [showShimmer,setShowShimmer] = useState(false);
    useEffect(()=>{
        fetchMemes();
        window.addEventListener('scroll',handleScroll);
        return ()=> window.removeEventListener('scroll',handleScroll);
    },[])

    const handleScroll = () => {
        if(window.innerHeight + window.scrollY >= document.body.scrollHeight-1){
            fetchMemes();
        }
    }

    const fetchMemes = async () =>{
        setShowShimmer(true);
        const data = await fetch('https://meme-api.com/gimme/20');
        const json = await data.json()
        setShowShimmer(false);
        setMemes((memes) => [...memes,...json.memes]);
        console.log(json);
    }
    return <div className="flex flex-wrap">
        {memes.map((meme,i)=> <Card key={i} data={meme}/>)}
        {showShimmer && <Shimmer/>}
    </div>
}
export default Body