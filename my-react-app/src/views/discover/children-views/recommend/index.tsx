import React, { useState, useEffect, useRef, memo, ReactNode, FC, useMemo } from "react";

interface IProps {
    children?: ReactNode
}

const Recommend: FC<IProps> = () => {
    let [opp, setOpp] = useState(0);
    let [opp2, setOpp2] = useState(0);
    let [opp3, setOpp3] = useState(0);

    const handle = () => {
        setOpp(opp + 1);
    }

    const handle2 = () => {
        setOpp2(opp2 + 1);
    }

    const handle3 = () => {
        setOpp3(opp3 + 1);
    }
    
    const memo = useMemo(() => {
        console.log(1)
        return opp > 0 ? (opp / (opp + opp2) * 100).toFixed(2) + "%" : "--";
    }, [opp, opp2])

    return <>
      <div>{opp} | {opp2} | {memo}</div>
      <button onClick={() => handle()}>click1</button>
      <button onClick={() => handle2()}>click2</button>
      <button onClick={() => handle3()}>click3</button>
    </>
}
export default memo(Recommend);