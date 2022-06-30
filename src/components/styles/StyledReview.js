import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
body{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
    padding:5rem 10rem;
    background-color:rgba(200,200,200);
}
`
export const StyledReview = styled.div`
img{
    width:300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
}
background-color: #fff;
border-radius: 20px;
-webkit-box-shadow: 0px 3px 15px 7px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 3px 15px 7px rgba(0,0,0,0.75);
box-shadow: 0px 3px 15px 7px rgba(0,0,0,0.75);
max-width: 800px;
text-align: center;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
padding:1.8rem;
min-height: 700px;
h4{
    font-size: 1.5rem;
}
h3{
    font-size: 1.5rem;
    color:aqua
}
p{
    font-size: 1.3rem;
    color:#666;
}
`

export const Icons = styled.div`
color:#666;
svg{
    font-size: 2rem;
    cursor: pointer;
    margin-right: 10px;
    &:hover{
    transform: scale(1.2);
}
}

`

export const StyledBtn = styled.button`
color:aqua;
padding:0.6rem 1.9rem;
font-size: 1.5rem;
background-color: transparent;
border: 1px solid aqua;
cursor: pointer;
`