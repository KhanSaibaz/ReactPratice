import react from 'react'
import {useGetPhotosQuery} from "../redux/slices/Api"

const About =()=>{

     const { data: about, error: usersError, isLoading, isFetching, isSuccess, isError } = useGetPhotosQuery();
    
    return(
        <div>
            
            <h2>About</h2>
            {about?.map((about) => (
                <p key={about?.id}>{about?.id}   {about?.title}</p>
            ))}

        </div>
    )
}

export default About;