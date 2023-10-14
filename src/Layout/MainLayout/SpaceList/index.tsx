import { SpaceItem } from "./SpaceItem"

interface ISpaceList {
    children?: JSX.Element | JSX.Element[]
}

export const SpaceList: React.FC<ISpaceList> = () =>{
    return(
        <>
            <SpaceItem><h1>SpaceItem 1</h1></SpaceItem>
            <SpaceItem><h1>SpaceItem 2</h1></SpaceItem>
            <SpaceItem><h1>SpaceItem 3</h1></SpaceItem>
            <SpaceItem><h1>SpaceItem 4</h1></SpaceItem>
        </>
    )
}