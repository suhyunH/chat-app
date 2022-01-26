import styled from 'styled-components';

export const SidebarSt = styled.div`

width : 30%;
heigth: 100%;
margin : 60px 40px 40px 40px;
button{
  border:none;
  text-align: center;
  cursor: pointer;
}

`
export const SideProfileSt = styled.div`
.sideProfile{
    display: flex;
    width: 100%;
    margin: auto
    
    .toggleBtn{
            border: none;
            border-radius : 50%;
            transition: all 0.3s;
            &:hover{
                opacity: 0.8;
             }
    }
    button{
background-color: white;
    }
    h2,h3{
        width:100%;
       margin: 20px
    }
}
`

export const CreateRoomSt = styled.div`
.createBtn{
    margin: 20px auto 20px;
    font-size: 16px;
    border-radius: 12px;
    background-color: #1DA1F2;
    color: 	#f8f8ff;
    // font-weight: bold;
    cursor: pointer;
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
export const ChatSt = styled.div`
width:70%;
height:100%;
flex-direction: column;
margin : 60px auto;

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
margin : 30px 0 40px;     
button{
         border: none;
         background: none;
         font-size : 15px;
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
        boxShadow:'0 3px 7px rgba(0, 0, 0, 0.3)'
    }
}

