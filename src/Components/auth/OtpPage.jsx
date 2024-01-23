import {useParams } from 'react-router-dom'
const OtpPage = () => {
    // console.log(Email)
    const {email} = useParams ()
    console.log(email)
  return (
    <div>OtpPage</div>
  )
}

export default OtpPage