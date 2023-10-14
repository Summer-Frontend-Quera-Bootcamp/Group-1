interface IProjectItem {
    children: JSX.Element | JSX.Element[]
}

export const ProjectItem: React.FC<IProjectItem> = ({children}): JSX.Element => {
    return(
        <>
            {children}
        </>
    )
}