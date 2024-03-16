import { useEffect, useState } from "react";
import { CiClock2 } from "react-icons/ci";
import { HiFire } from "react-icons/hi";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Posts(){
    const [w,setW] = useState([])
    const [area,setArea] = useState([])
    const [cooking,setCooking] = useState([])
    useEffect(()=>{
      fetch('recipe.json')
      .then(res=>res.json())
      .then(data=>setW(data))
    },[])
    const changeShape=(wer)=>{
        const isThere = area.find(coo=>coo.recipe_id === wer.recipe_id)
        if(!isThere){
            const ourArea = [...area,wer]
            setArea(ourArea)
        }
        else{
            toast('cannot choose')
        }
    }
    const addCook = (wer)=>{
        setCooking([...cooking,wer])
    }
    const deleteItem=(wer)=>{
        const rep = area.filter(px=>px.recipe_id!==wer)
        setArea(rep)
    }
    let time = 0;
    let calorie = 0;

    cooking.map(cook => {
    const w = cook.preparing_time.split(' ');
    const p = cook.calories.split(' ')
    const numeric = parseInt(p[0])
    const numericValue = parseInt(w[0]);
    time += numericValue;
    calorie+=numeric
});
    return (
            <div className="flex gap-2 justify-between mb-20">
                <div className="grid grid-cols-2 gap-5 w-[2/3] mt-[50px]">
             {
                w.map(we=><div key={we.recipe_id} className="border rounded-2xl border-solid  w-[380px] p-6 shadow-lg">
                <img src={we.recipe_image} alt="image" />
                <h2 className="mt-6 font-semibold text-xl mb-4">{we.recipe_name}</h2>
                <p className="border-b border-solid pb-4 text-[#150B2BB3]">{we.short_description}</p>
                <h2 className="font-medium text-[18px] mt-3">Ingredients: {we.ingredients.length}</h2>
                <ul className="mt-5 text-[#150B2BB3]">
                            {we.ingredients.map((ingredient, index) => (
                                <li key={index}>{index+1}. {ingredient}</li>
                            ))}
                        </ul>
                 <div className="flex gap-6 mt-3">
                   <span className="flex justify-center items-center gap-2 text-[#150B2BB3]"><CiClock2 />{we.preparing_time}</span>
                   <span className="flex justify-center items-center gap-2 text-[#150B2BB3]"><HiFire />{we.calories}</span>
                 </div>
                 <button onClick={()=>changeShape(we)} className=" px-5 py-3 border border-solid mt-5 font-medium text-[18px] rounded-[52px] bg-[#0BE58A] text-black">Want to Cook</button>
                 
              </div>)
             }
             
        </div>
        <div className="flex-1 mt-[50px] max-w-[514px] border border-solid border-[#28282833] h-[850px] rounded-2xl">
            <p className="text-center border-b border-solid border-[#28282833] max-w-[350px] mx-auto mt-8 pb-4 text-2xl font-semibold">Want to cook: 0{area.length}</p>
            <div>
                <div className="mt-5 flex ml-[70px]  max-w-[300px]  text-[16px]  text-[#150B2BB3] font-medium">
                    <span>Name</span>
                    <span className="ml-[90px]">Time</span>
                    <span className="ml-[60px]">Calorie</span>
                </div>
                {
                    area.map((item,idx)=>(<div className="p-4 flex items-center justify-between text-[16px]  text-[#150B2BB3] font-medium bg-[#28282808]" key={item.recipe_id}>
                        <span>{1+idx}</span>
                        <span className="w-[122px]">{item.recipe_name}</span>
                        <span className="w-[68px] text-center">{item.preparing_time}</span>
                        <span className="w-64px">{item.calories}</span>
                        <span><button onClick={()=>{addCook(item)
                        deleteItem(item.recipe_id)}} className="px-[11px] py-[9px] bg-[#0BE58A] font-medium text-[16px] text-black rounded-2xl">Preparing</button></span>
                    </div>))
                }
            </div>
            <div>
            <p className="text-center border-b border-solid border-[#28282833] max-w-[350px] mx-auto mt-8 pb-4 text-2xl font-semibold">Now Cooking: 0{cooking.length}</p>
              <div>
              <div className="mt-5 flex justify-around px-[30px] text-[16px]  text-[#150B2BB3] font-medium">
                    <span>Name</span>
                    <span className="ml-[90px]">Time</span>
                    <span className="ml-[60px]">Calorie</span>
                </div>
                {
                    cooking.map((item,idx)=>(<div className="p-4 flex items-center  text-[16px]  text-[#150B2BB3] font-medium bg-[#28282808]" key={item.recipe_id}>
                        <span>{1+idx}</span>
                        <span className="w-[122px] ml-[25px]">{item.recipe_name}</span>
                        <span className="w-[68px] ml-[51px] text-center">{item.preparing_time}</span>
                        <span className="w-64px ml-[70px]">{item.calories}</span>
                    </div>
                    ))
                    
                }
              </div>
            </div>
            <div className="w-[300px] mx-auto border-t border-solid border-[#28282833] flex justify-around mt-10">
            <span className="text-xl  text-[#150B2BB3] text-center">Total time: {time} min</span>
            <span className="text-xl  text-[#150B2BB3] text-center">Total calorie: {calorie} calorie</span>
            </div>
        </div>
        <ToastContainer />
            </div>
    )
}