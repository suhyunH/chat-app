import styled from 'styled-components';



export const ProfileInfoSt = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
font-weight: 200;
font-family: 'Noto Sans', sans-serif; 
text-align: center;




`
export const MessageContainerSt = styled.div`
 .ulContainer{
    //  width: 90%;
     height: 50vh;
     overflow: auto;
     padding: 20px 20px 40px 20px;
    background-color: #F0F0F0;
     border-radius: 12px;
     box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
 
    .dateLine{
        list-style: none;
        font-size: 10px;
        color: darkgray;
        text-align: center;
        clear:both;
    }
 }

`

export const MessageItemSt = styled.div`
clear: both;


button{
    border: none;
    background: none;
    cursor: pointer;
}
li{
    list-style: none;
    margin-left: -15px;
    display: flex;
    padding: 5px;
}

.msgIntro{
    display: flex;
    font-size: 10px;
    img{
        width: 40px;
        border-radius: 20%;
    }
}
.msgMain{
   margin-top: -5px;
    .msgText{
        margin-left: 10px;
        span{
            background-color: #EEE;
            padding: 2px 10px;
            border-radius: 10px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        }
    }
    .timeAgo{
        margin-left: 10px;
        font-size: 10px;
        color: darkgray;
    }
    .deleteMsgBtn{
        padding-left : 20px;
    }
}
.li_ad{
    text-align: right;
    float: right;
    margin-right: -14px;
    .msgMain_ad{
        margin-top: -5px;
        .modalBtnName{
            margin-bottom: 20px;
        }
        .msgText_Ad{
            margin-right: 10px;
            span{
                background-color:  rgb(0, 120, 254);
                color: white;
                padding: 2px 12px;
                border-radius: 10px;
                box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
            }
        }
        .deleteMsgBtn{
            padding-right : 20px;
            color: darkgray;
        }
        .timeAgo{
            font-size: 10px;
            color: darkgray;
        }
    }
}
`