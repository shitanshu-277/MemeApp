import { useState } from "react";
import AccordianItem from "./accordianItem";
const data = [
    {
        title: "Accordian Item #1",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        title: "Accordian Item #2",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        title: "Accordian Item #3",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
]
const Accordian = () => {
    const [openIndex,setOpenIndex] = useState(2);
    return (
        <div className="w-[50%] m-auto mt-5">
            {data.map((item,index)=>(
                <AccordianItem key={index} title={item.title} body={item.body} isOpen={index === openIndex} setisOpen={() => {
                    setOpenIndex(() =>{
                        index===openIndex ? setOpenIndex(null): setOpenIndex(index)
                    });
                }}/>
            )
            )}
        </div>
    )
}

export default Accordian;