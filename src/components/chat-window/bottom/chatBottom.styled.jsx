import styled from'styled-components'

export const AudioSt = styled.div`
.mic{
    display: none;
}
`
export const ChatBottomSt = styled.div`

.bottomInputs{
    position: fixed;
    bottom: 0; 
    width: 75%;
    min-width: 500px;
 
    margin-bottom: 100px;
}
button{
    border: none;
    font-size: 20px;
    color: #452007;
    background-color: white;
    cursor: pointer;
}
.textInput{
    width: 65%;
    padding: 4px 3px;
}
.inputBtn{
    border:none;
    padding: 6px 4px;
    margin-left: 5px;
    cursor: pointer;
    background-color: #ffe812;
    width: 55px;


}
`

export const AttachModalSt= styled.div`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
font-weight: 200;
font-family: 'Noto Sans', sans-serif;  

text-align: center;
input{
    margin: 20px 0 50px 40px;
}
button{
    border: none;
    border-radius: 12px;
    padding: 10px 15px;
    background-color: #452007;
    color: white;
    transition: 200ms;
    touch-action: manipulation;
    &:hover{
        box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);
    }
    
}



`