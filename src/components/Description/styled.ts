import styled from 'styled-components';


export const Container = styled.div`

width:100%;
box-sizing: border-box;
display: flex;
flex-direction:column;
align-items: center;
transform-style:preserve-3d;

div{
    display: flex;
    margin-bottom: 15px;
    background-color: #FFF;
    border-radius: 15px;
    width:280px;
    justify-content: space-between;
    padding: 5px 20px 5px 20px;
   

    @media (min-width: 320px) and (max-width:400px){

        width: 150px;
        padding: 0px 10px 0px 10px;
        height: 30px;
        font-size:12pt;
    }
    @media (min-width: 401px) and (max-width:480px){

         width: 150px;
         padding: 0px 10px 0px 10px;
         font-size:14pt;
}
}

label{

    display:flex;
    
}

span{ 
}


`;