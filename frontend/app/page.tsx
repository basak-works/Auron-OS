"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menu = [
  "AI CORE",
  "MEMORY VAULT",
  "AI AGENTS",
  "SECURITY",
  "AUTOMATION"
];

export default function AuronOS() {

  const [boot,setBoot] = useState(true);
  const [active,setActive] = useState("AI CORE");


  useEffect(()=>{
    const t=setTimeout(()=>{
      setBoot(false)
    },4000);

    return ()=>clearTimeout(t);

  },[]);


  if(boot){

    return (

      <main className="
      h-screen bg-black text-cyan-400 
      flex items-center justify-center
      overflow-hidden font-mono
      relative">


      <div className="
      absolute inset-0
      bg-[linear-gradient(#0ff1_1px,transparent_1px),
      linear-gradient(90deg,#0ff1_1px,transparent_1px)]
      bg-[size:40px_40px]
      opacity-20
      "/>


      <div className="z-10 text-center">


      <motion.h1

      animate={{
        scale:[1,1.05,1],
        opacity:[0.5,1,0.5]
      }}

      transition={{
        duration:2,
        repeat:Infinity
      }}

      className="
      text-7xl
      font-black
      tracking-widest
      bg-gradient-to-r
      from-cyan-400
      to-purple-600
      text-transparent
      bg-clip-text">

      AURON OS

      </motion.h1>



      <p className="
      mt-8
      tracking-[0.4em]
      text-sm">

      INITIALIZING NEURAL SYSTEM...

      </p>



      <div className="
      mt-8
      w-72
      h-1
      bg-gray-900
      rounded">

      <motion.div

      initial={{
        width:0
      }}

      animate={{
        width:"100%"
      }}

      transition={{
        duration:3.5
      }}

      className="
      h-full
      bg-cyan-400
      shadow-[0_0_20px_cyan]"
      />


      </div>



      <div className="
      mt-10
      text-left
      text-xs
      space-y-3
      text-gray-400">


      <p>
      Neural Core
      <span className="float-right text-green-400">
      ONLINE
      </span>
      </p>


      <p>
      Memory Engine
      <span className="float-right text-green-400">
      ACTIVE
      </span>
      </p>


      <p>
      Security Layer
      <span className="float-right text-green-400">
      PROTECTED
      </span>
      </p>



      </div>


      </div>


      </main>
    )
  }




return (

<main className="
h-screen
bg-[#050505]
text-white
overflow-hidden
flex
font-sans
">


{/* DESKTOP SIDEBAR */}

<aside className="
hidden
md:flex
w-72
border-r
border-gray-800
bg-[#080808]
flex-col
p-6">


<h1 className="
text-3xl
font-black
tracking-widest
bg-gradient-to-r
from-cyan-400
to-purple-500
text-transparent
bg-clip-text">

AURON

</h1>


<p className="
text-xs
text-green-400
mt-4
font-mono">

● SYSTEM ONLINE

</p>



<nav className="
mt-10
space-y-4">


{
menu.map(item=>(

<button

key={item}

onClick={()=>setActive(item)}

className={`
w-full
text-left
p-3
rounded-lg
font-mono
text-sm
transition

${active===item?

"bg-cyan-500/10 text-cyan-400 border border-cyan-400/30"

:

"text-gray-500 hover:text-white"

}

`}

>

{item}

</button>

))

}



</nav>


</aside>





{/* MAIN */}

<section className="
flex-1
flex
flex-col">


<header className="
h-20
border-b
border-gray-800
flex
items-center
justify-between
px-6
bg-[#080808]">


<h2 className="
font-bold
tracking-widest">

{active}

</h2>


<div className="
font-mono
text-xs
text-cyan-400">

AURON CORE v1.0

</div>


</header>





<div className="
flex-1
p-6
overflow-auto">



<div className="
grid
grid-cols-1
lg:grid-cols-3
gap-6">



<div className="
lg:col-span-2
bg-[#090909]
border
border-gray-800
rounded-2xl
p-8
min-h-[400px]">


<div className="
flex
items-center
gap-3
text-cyan-400
font-mono">

<span className="
w-3
h-3
rounded-full
bg-cyan-400
animate-pulse"
/>

NEURAL ENGINE ACTIVE

</div>



<div className="
h-full
flex
items-center
justify-center">


<div className="
text-center">


<div className="
text-7xl">

◉

</div>


<h1 className="
text-4xl
font-bold
mt-5">

AURON CORE

</h1>


<p className="
text-gray-500
mt-3">

Personal Intelligence Operating System

</p>


</div>

</div>


</div>





<div className="
space-y-5">


{
[
["CPU","32%"],
["MEMORY","76%"],
["AGENTS","05 ACTIVE"]

].map(x=>(


<div

key={x[0]}

className="
bg-[#090909]
border
border-gray-800
rounded-xl
p-5">


<p className="
text-gray-500
text-xs">

{x[0]}

</p>


<h2 className="
text-2xl
text-cyan-400">

{x[1]}

</h2>


</div>


))

}



</div>




</div>


</div>



</section>

</main>

)

}
