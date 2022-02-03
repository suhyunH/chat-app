import styled from 'styled-components';

export const SignSt = styled.div`
.logoName{
  display: flex;
  position: absolute;
  left: 34%;
  right: 34%;
  top: 12%;
  h1{
    font-size: 110px;
    color: #ffe812;
    margin-top: 20px;
  }
  h2{
    font-size: 90px;
    color: #452007;
    margin-right: 10px;
  }
}
.signContainer{
  display: flex;
  min-width: 1000px;
  position:absolute;  
   left : 32%;
   top: 370px;


  .cheese{
     top: 300px;
     width: 300px;
     margin-right: 40px;
    animation:cheeze  1s ease-in Infinite Alternate;
  }

  @keyframes cheeze {
    0% {
     margin-top : 10;
    }
    100% {
      margin-top : 20px;
    }

   
  }


.signBtn{
  max-width: 250px;
  margin-top: -100px;
  h5 {

    border-bottom: 1px solid darkgray; 
    margin: 30px 0; 
    color: darkgray;
    line-height: 0.1em;
    text-align: center;
  } 
  
  h5 span { 
     background:#fff; 
     padding:0 10px; 
     color: darkgray;
     
  }
    & button{
      cursor: pointer;
      margin-top: 150px;
      font-size: 25px;
      border: none;
      padding: 10px 12px;
      border-radius: 10px;
      display: block;
      box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;    
  
      &:last-child{
        margin-top: 30px;
        background-color: #0F9D58;
        color: white;
      }
    }
}

}



`


export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
   font-weight: 200;

  font-family: 'Noto Sans', sans-serif;  
  text-decoration : none;

`;

