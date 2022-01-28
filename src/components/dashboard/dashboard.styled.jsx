import styled from'styled-components'


export const DashSt = styled.div`
 @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
 font-weight: 200;
 font-family: 'Noto Sans', sans-serif; 

text-align: center;


 header{
     margin : -23px 0 10px 0;
 }

 button{
    border:none;
    background-color: white;
    cursor:pointer;
   
}
.signOutbtn{
    background-color: #452007;
    color: white;
    margin-top: -20px;
    padding : 10px 15px;
    border-radius: 12px;
    width:75%;
    transition: 200ms ease-in;
    &:hover{
        box-shadow: 0 0 0 1px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);
        font-weight: bold;
    }
}
 `
 export const SideProfileSt = styled.div`
.sideProfile{
    display: flex;
    width: 100%;
    margin: auto
    }
    .toggleBtn{
            border: none;
            border-radius : 50%;
            transition: all 0.3s;
            &:hover{
                opacity: 0.8;
             }
    }
    h2,h3{
        width:100%;
       margin: 20px
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
 button{
     font-size: 15px;
 }
 .providerName{
     font-size : 20px
 }
 `