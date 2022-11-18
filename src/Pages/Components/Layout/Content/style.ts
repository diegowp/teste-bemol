import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    height: 100%;
  }
`

export const Container = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`
