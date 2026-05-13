import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Terminal, Brain, Rocket, Activity } from 'lucide-react';

const CHAT = [
  'rotmaxxing 🚀 JUST BOUGHT MORE $ROT',
  'dopamine_overload ⚡ MY GPU IS SCREAMING',
  'braincell_liquidator 🧠 NO EXIT STRATEGY',
  'degennode 💀 THIS COIN IS ALIVE',
  'rot.exe ☣ SIGNAL LOCKED',
];
const TWEETS = [
  '$ROT isn’t a memecoin. It’s a diagnosis. 🧠',
  'Terminally online and proud. ⚡',
  'Community sentiment: unhinged 🚀',
];

function DataBg(){
  const cols = useMemo(()=>Array.from({length:28}),[]);
  return <div className='absolute inset-0 overflow-hidden pointer-events-none'>
    <div className='absolute inset-0 bg-black' />
    <motion.div className='absolute inset-0 opacity-40' animate={{opacity:[0.35,0.55,0.35]}} transition={{repeat:Infinity,duration:4}} style={{background:'radial-gradient(circle at 30% 30%, rgba(255,0,168,.22), transparent 30%), radial-gradient(circle at 70% 50%, rgba(124,255,0,.18), transparent 35%)'}} />
    {cols.map((_,i)=><motion.div key={i} className='absolute text-[10px] text-green-400/30 font-mono' style={{left:`${i*3.7}%`}} animate={{y:['-10vh','120vh']}} transition={{repeat:Infinity,duration:8+(i%8),ease:'linear',delay:i*.2}}>$ROT<br/>BRAIN.EXE<br/>010101</motion.div>)}
  </div>
}

function Loader({done}){
 const [pct,setPct]=useState(0);
 const [msg,setMsg]=useState('BOOTING $ROT CORE...');
 useEffect(()=>{
  const msgs=['BOOTING $ROT CORE...','CONNECTING DATA NETWORK...','ANALYZING USER BRAIN CELLS...','MEMETIC SIGNAL DETECTED...'];
  let idx=0;
  const a=setInterval(()=>{setPct(v=>Math.min(v+7,100)); setMsg(msgs[idx%msgs.length]); idx++;},180);
  return ()=>clearInterval(a);
 },[]);
 if(done) return null;
 return <motion.div exit={{opacity:0}} className='fixed inset-0 z-50 bg-black flex flex-col items-center justify-center text-white'>
   <motion.div animate={{scale:[1,1.04,1], boxShadow:['0 0 40px #ff00a8','0 0 90px #7cff00','0 0 40px #ff00a8']}} transition={{repeat:Infinity,duration:2}} className='w-52 h-52 rounded-full bg-gradient-to-br from-fuchsia-500 to-lime-400 p-1'>
    <div className='w-full h-full rounded-full bg-black flex items-center justify-center text-7xl'>🧠</div>
   </motion.div>
   <div className='mt-8 font-mono text-green-300'>{msg}</div>
   <div className='w-80 h-3 bg-white/10 rounded mt-4 overflow-hidden'><motion.div animate={{width:`${pct}%`}} className='h-full bg-gradient-to-r from-fuchsia-500 to-lime-400' /></div>
   <div className='mt-4 text-fuchsia-400'>BRAIN CELLS LOST: {999000000+pct*18231}</div>
 </motion.div>
}

export default function RotSite(){
 const [showLoader,setShowLoader]=useState(true);
 const [chat,setChat]=useState(CHAT.slice(0,3));
 const [tweet,setTweet]=useState(0);
 const [brain,setBrain]=useState(999382221);
 const [terminal,setTerminal]=useState('');
 useEffect(()=>{const t=setTimeout(()=>setShowLoader(false),3200); return ()=>clearTimeout(t)},[]);
 useEffect(()=>{const t=setInterval(()=>setChat(prev=>[...prev.slice(1), CHAT[Math.floor(Math.random()*CHAT.length)]]),2200); return ()=>clearInterval(t)},[]);
 useEffect(()=>{const t=setInterval(()=>setTweet(v=>(v+1)%TWEETS.length),3000); return ()=>clearInterval(t)},[]);
 useEffect(()=>{const t=setInterval(()=>setBrain(v=>v+Math.floor(Math.random()*12)+1),900); return ()=>clearInterval(t)},[]);
 useEffect(()=>{const lines='> SIGNAL LOCKED\n> COMMUNITY ONLINE\n> NO CURE FOUND\n> LAUNCH PENDING'; let i=0; const t=setInterval(()=>{setTerminal(lines.slice(0,i)); i=(i+1)%(lines.length+1)},30); return ()=>clearInterval(t)},[]);
 const copyMsg=()=>alert('TOKEN ADDRESS READY — JOIN TELEGRAM FOR EARLY ACCESS');
 return <div className='min-h-screen text-white overflow-hidden relative bg-black'>
   <AnimatePresence>{showLoader && <Loader done={false} />}</AnimatePresence>
   <DataBg />
   <div className='relative z-10 min-h-screen p-4 md:p-8'>
     <div className='flex flex-wrap gap-4 justify-between items-center border border-fuchsia-500/30 bg-black/40 backdrop-blur rounded-2xl p-4'>
       <div className='text-lime-400 font-mono text-sm'>SYSTEM CORE v3.7.1</div>
       <div className='flex gap-4 text-sm md:text-base'><span>HOME</span><span>ABOUT</span><span>TOKENOMICS</span><span>COMMUNITY</span><span>LAUNCH STATUS</span></div>
       <div className='flex gap-3'><a href='https://t.me/jointherot' className='px-4 py-2 rounded-xl bg-lime-400 text-black font-bold'>JOIN TELEGRAM</a><a href='https://t.me/jointherot' className='px-4 py-2 rounded-xl bg-fuchsia-600 font-bold'>FOLLOW UPDATES</a></div>
     </div>

     <div className='grid lg:grid-cols-4 gap-6 mt-8'>
       <div className='space-y-6'>
         <div className='border border-cyan-400/40 bg-black/50 rounded-2xl p-4'><div className='text-cyan-300 mb-3'>LIVE FEED</div>{chat.map((m,i)=><div key={i} className='text-sm border-b border-white/10 py-2'>{m}</div>)}</div>
         <div className='border border-fuchsia-500/40 bg-black/50 rounded-2xl p-4'><div className='text-fuchsia-300 mb-3'>LIVE X</div><div>{TWEETS[tweet]}</div></div>
       </div>

       <div className='lg:col-span-2 flex flex-col items-center justify-center text-center'>
         <div className='text-5xl md:text-7xl font-black'>THE MOST <span className='text-fuchsia-500'>TERMINALLY ONLINE</span> COIN EVER MADE</div>
         <motion.div animate={{y:[0,-10,0], rotate:[0,1,0]}} transition={{repeat:Infinity,duration:4}} className='mt-8 relative'>
           <motion.div animate={{boxShadow:['0 0 60px #ff00a8','0 0 120px #7cff00','0 0 60px #ff00a8']}} transition={{repeat:Infinity,duration:2}} className='w-72 h-72 md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-br from-yellow-300 via-fuchsia-500 to-lime-400 p-2'>
             <div className='w-full h-full rounded-full bg-black flex items-center justify-center text-8xl md:text-9xl'>🧠</div>
           </motion.div>
           <motion.div animate={{scaleY:[1,1.4,1]}} transition={{repeat:Infinity,duration:1.8}} className='absolute bottom-12 right-28 w-3 h-10 bg-cyan-300 rounded-full blur-[1px]' />
         </motion.div>
         <div className='mt-6 text-lime-300 font-mono'>TOKEN ADDRESS READY • JOIN TELEGRAM FOR EARLY ACCESS • LAUNCH PENDING</div>
         <button onClick={copyMsg} className='mt-5 px-6 py-3 rounded-xl border border-lime-400 text-lime-400 flex items-center gap-2'><Copy size={16}/> COPY ACCESS INFO</button>
       </div>

       <div className='space-y-6'>
         <div className='border border-lime-400/40 bg-black/50 rounded-2xl p-4'><div className='flex items-center gap-2 text-lime-300'><Activity size={16}/>PUMP SIGNAL</div><motion.div animate={{height:[40,120,70,150]}} transition={{repeat:Infinity,duration:3}} className='mt-4 w-full bg-lime-400 rounded' /></div>
         <div className='border border-fuchsia-500/40 bg-black/50 rounded-2xl p-4'><div className='flex items-center gap-2 text-fuchsia-300'><Brain size={16}/>BRAIN CELLS LOST</div><div className='text-4xl mt-3 font-black text-lime-400'>{brain.toLocaleString()}</div></div>
       </div>
     </div>

     <div className='grid lg:grid-cols-2 gap-6 mt-8'>
       <div className='border border-green-400/30 bg-black/50 rounded-2xl p-5'><div className='flex items-center gap-2 text-green-300'><Terminal size={16}/>TERMINAL</div><pre className='mt-4 text-green-300 whitespace-pre-wrap font-mono'>{terminal}█</pre></div>
       <div className='border border-cyan-400/30 bg-black/50 rounded-2xl p-5'><div className='flex items-center gap-2 text-cyan-300'><Rocket size={16}/>ROT TO THE MOON</div><div className='mt-4 text-gray-300'>Community node synchronization active.</div></div>
     </div>
   </div>
 </div>
}
