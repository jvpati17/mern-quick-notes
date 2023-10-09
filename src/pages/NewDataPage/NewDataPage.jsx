import { checkToken } from '../../utilities/users-service';

export default function NewDataPage() {

    async function handleCheckToken() {
        const expDate = await checkToken()
        console.log(expDate) //rendering frontend console msg
    }

    return (
    <>
        <h1>New Data Page</h1>
        
        <button onClick={ handleCheckToken }>Check My Login Expiration</button>
    </>
    )

}