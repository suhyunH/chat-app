import styled from 'styled-components';



export const MessageItemSt = styled.div`
padding: 0px;

clear: both;
button{
    border: none;
    background: none;
    cursor: pointer;
}

li{
    list-style: none;
    margin-left: -40px;
    display: flex;
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
    .modalBtnName{
        margin-left: 5px;
    }
    .msgText{
        margin-left: 10px;
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
padding-right: 30px;

}
.msgMain_ad{
    .modalBtnName{
        margin-right:-10px
    }
    .msgText_Ad{
        margin-right: 10px;
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

`