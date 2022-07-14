import {useState} from 'react'
import ContainerList from './ContainerList';



function Container (props) {
const [giphy, setGiphy] = useState([])


const handleChange = async (event) => {
    event.preventDefault();
    const changedValue = event.target.value
    setGiphy(await props.giphs(changedValue))
}


return (
        <div>
            <form>
                <h1 className='Heading'>Giphy Search</h1>
                <input onChange={(event) => handleChange (event)}id='search' type ='text'></input>
                <ContainerList giphs={giphy} />


            </form>

        </div>
        
    )
}

export default Container