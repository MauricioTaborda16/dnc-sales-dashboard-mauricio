import styled from 'styled-components'

const RegistrationArea = styled.div`
  background: #666;
`

const RegistrationImage = styled.div`
  background-image: url('/loginimage.svg');
  background-size: cover;
  height: 100vh;
  width: 50%;
`

const Registration = () => {
  return (
    <>
      <RegistrationArea>Registra</RegistrationArea>
      <RegistrationImage />
    </>
  )
}

export default Registration
