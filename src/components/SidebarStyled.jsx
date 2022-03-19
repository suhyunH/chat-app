import styled from 'styled-components';


export const SidebarSt = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
font-weight: 200;
font-family: 'Noto Sans', sans-serif; 
// width : 30%;
align-items:left;
max-width: 400px;
min-width: 300px;
heigth: 100%;
margin : 60px 0 40px 20px;
button{
  border:none;
  text-align: center;
  cursor: pointer;
}
&first-child, nth-child(2){
    width: 100%;
}

`

export const CreateRoomSt = styled.div`
    .createBtn{
    margin: 20px auto 20px;
    justify-content: center;
    font-size: 16px;
    border-radius: 12px;
    background-color: #ffe812;
    // background-color: #1DA1F2;
    // color: 	#f8f8ff;
    font-weight: bold;
    cursor: pointer;
    width: 100%;
    padding: 10px 15px;
    transition: 200ms;
    touch-action: manipulation;
    &:hover{
        box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);
    }
}
`
export const CreateRoomModalSt = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
    font-weight: 200;
    font-family: 'Noto Sans', sans-serif; 
    text-align:center;

    justify-content: center
    width: 100%;
    margin-left: 10px;
    input, textarea{
        width: 60%;
        height: 30px;
        border: none;
        border-bottom : 1px solid black;
        margin: 30px 20px;
    }
    button{
        border:none;
        text-align: center;
        cursor: pointer;
        margin: 60px auto 20px;
        font-size: 16px;
        font-weight: bold;
        border-radius: 12px;
        background-color: #ffe812;
        width: 80%;
        padding: 10px 15px;
        transition: 200ms;
        touch-action: manipulation;
        &:hover{
            box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);
        }
      }

`



export const RoomItemSt = styled.div`
color: black;
margin-left: 10px;
padding-bottom: 5px;
 .roomIntro{
     display: flex;
    h3{
        margin-bottom : 0;
    } 
    .roomListTime{
        width:100%;
        display: inline-block;
        color : #bfbfbf;
        margin : 9px 0 0 10px;
        font-size: 13px
    } 

}

.roomList{
    margin: -5px 0 5px 5px;
}
.roomListContent{
    display:flex;
    .roomListProfile{
        img{
            width: 50px;
            border-radius: 20%
        }
    }
    .roomListText{
        margin: 5px 0 0 20px;
       span{
           font-size: 14px
       }
    }
}
`
export const HomeSt = styled.div`
display: flex;


`

export const ChatRoomListSt = styled.div`
h5 {
    width: 75%; 
    border-bottom: 1px solid #000; 
    line-height: 0.1em;
    margin: 15px 0 10px;
    padding-left: 10px; 
 } 
 
 h5 span { 
     background:#fff; 
     padding:0 10px; 
 }

 .chatContainer{
    overflow: auto;
    height: 400px;
 }

 .active{
    .chat{
        //  background-color: 	#F0F0F0;
         background-color: #fffcea;
         border-radius: 12px;
         box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; }
         width: 80%;

`
export const ChatSt = styled.div`
width:70%;
max-width: 940px;
min-width: 480px;
height:100%;
flex-direction: column;
margin : 60px auto;
position:relative;

.chatTitle{
    display: flex
}
.showDes{
    display: inline-block;
    margin-left : 10px
}
.nonDes{
    display: none;
   
}
@media only screen and (max-width:1400px){
    margin-left: 20px;
}
`

//loading
export const LoadingSt = styled.div`

.loadingContainer{
    width:100%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    animation: spin 3s linear infinite;

}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

`

//profile - modal

export const ProfileImg=styled.div`
img{
    border: none;
    border-radius : 50%;
    width: 120px;
}
`

export const EditableSt = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
   font-weight: 200;
  font-family: 'Noto Sans', sans-serif;  
margin : 30px 0 40px;     
text-align: center;
display: flex;
justify-content:center;
input{
    width: 200px;
    padding: 10px 5px;
    margin-bottom: 5px;
    text-align: center;
    &:hover{
        box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
    }
}
button{
         border: none;
         margin-top: 6px; 
         background: none;
         font-size : 18px;
         cursor: pointer;
         &:hover{
             color: skyblue;
         }

     }
`


export const modalStyle ={
    content:{
        margin : 'auto',
        width: '400px',
        height: '400px',
        borderRadius: '3%',
        boxShadow:'0 3px 7px rgba(0, 0, 0, 0.3)',
    },
}
export const smModalStyle ={
    content:{
        margin : 'auto',
        width: '300px',
        height: '250px',
        borderRadius: '3%',
        boxShadow:'0 3px 7px rgba(0, 0, 0, 0.3)',
    },
}

