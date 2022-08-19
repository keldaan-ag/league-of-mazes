import { useState } from "react";
import { useAppSelector } from "../hooks";

export function Header(){
    const time = useAppSelector(state=>state.game.time)
    const phase = useAppSelector(state=>state.game.phase)
    return <p style={{marginTop:'0px'}}>Time {time} Phase {phase}</p>
}