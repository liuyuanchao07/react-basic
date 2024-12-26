import React, { memo, ReactNode, FC } from "react";

interface IProps {
    children?: ReactNode
}

const Recommend: FC<IProps> = () => {
    return <>recommed</>
}
export default memo(Recommend);