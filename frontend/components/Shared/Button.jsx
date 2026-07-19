import {motion } from "motion/react"
 

export const Button = ({text, className ,handler= () => {}   }) => {
  
    return(
        <motion.button animate={{opacity:1}} onClick={handler} className={` ${className} 
        
        cursor-pointer hover:scale-105 duration-300 py-2  rounded-3xl relatve z-10 opacity-1`}>
            {text}

        </motion.button>

    )

}