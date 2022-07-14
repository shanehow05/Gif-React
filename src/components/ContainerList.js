function ContainerList (props) {


    if(!props.giphs.data) {
        return null
    } else {
        const list = props.giphs.data.data
        console.log(list)
    const mappedList = list.map((giph, index) => {
        return (
            <img key={index}src={giph.images.original.url} alt=''></img>
        )
    })
    return (
        <div>
            {mappedList}

        </div>
    )
}


    }



export default ContainerList