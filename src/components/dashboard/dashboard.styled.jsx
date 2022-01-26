import styled from'styled-components'


export const DashSt = styled.div`
 @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
 font-weight: 200;
 font-family: 'Noto Sans', sans-serif; 

text-align: center;


 header{
     margin-bottom : 10px
 }

 button{
    border:none;
    background-color: white;
    cursor:pointer;

    .signOutbtn{
        margin-top: 40px;
    }
 }
 `
 export const UploadAvatarSt = styled.div`
    label{
        cursor: pointer
    }
    button{
        font-size: 20px;
        margin: 10px
    }
 `

 export const ProviderSt =styled.div`
 margin : 10px 0 20px;
 .providerName{
     font-size : 20px
 }
 `