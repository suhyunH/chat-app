import styled from 'styled-components';

export const SignSt = styled.div`
.logoName{
  display: flex;
  position: absolute;
  left: 34%;
  right: 34%;
  top: 7%;
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



  .cheese{
    position:absolute;
    left : 32%;
    top: 300px;
    width: 300px;
    animation:cheeze  1s ease-in Infinite Alternate;
  }

  @keyframes cheeze {
    0% {
     margin-top : 10;
    }
    100% {
      margin-top : 60px;
    }

   
  }
  
  // div{
  //   position:relative;
  //   left: 100px;
  //   top:0;
  //   width:100px;
  //   height:100px;
  //   border-radius:50%;
  //   background:#000;
  //   animation:ball cubic-bezier(0.16, 1, 0.3, 1) 1s ease-in Infinite Alternate;
  // }

.signBtn{
  max-width: 250px;
  position: absolute;
  left: 60%;
  right: 10%;
  top: 25%;
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

// font-size: 25px;
//       .signBtn{
//         position : absolute;
//         left: 50%;
//         top: 70%;
//         transform: translate(-50%, -20%);
//         border: none;
//         border-radius: 12px;
//         font-size: 18px;
//         padding : 10px 15px;
        
//       }

//       *{
//         margin:0;
//         padding:0;
//       }
//       .container {
//         background: #f0f0f0;
//         box-sizing: border-box;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         width: 100vw;
//         height: 100vh;
//       }
//       .box {
//         border-radius: 20px;
//         width: 480px;
//         height: 200px;
//         text-align: center;
//         background: #f0f0f0;
//         box-shadow:  10px 10px 10px #cccccc,
//         10px 10px 10px #ffffff,
//         0 0 0 #cccccc inset,
//         0 0 0 #ffffff inset;
//         animation: anime 4s cubic-bezier(0.16, 1, 0.3, 1) 1s ;
//       }
  
//       @keyframes anime {
//         0% {
//           width: 60px;
//           height: 60px;
//           background: #f0f0f0;
//           box-shadow:  0 0 0 #cccccc,
//                        0 0 0 #ffffff,
//                         10px 10px 10px #cccccc inset,
//                         -10px -10px 10px #ffffff inset;
//         }
//         25% {
//           width: 60px;
//           height: 60px;
//           background: #f8f8f8;
//           box-shadow:  10px 10px 10px #cccccc,
//                        10px 10px 10px #ffffff,
//                        0 0 0 #cccccc inset,
//                        0 0 0 #ffffff inset;
//         }
//         50% {
//           width: 60px;
//           height: 240px;
//           background: #f8f8f8;
//           box-shadow:  10px 10px 10px #cccccc,
//                        10px 10px 10px #ffffff,
//                        0 0 0 #cccccc inset,
//                        0 0 0 #ffffff inset;
//         }
//         100% {
//           width: 480px;
//           height: 240px;
//           background: #fafafa;
//           box-shadow:  40px 40px 40px #cccccc,
//                        0 0 0 #ffffff,
//                        0 0 0 #cccccc inset,
//                        2px 2px 2px #ffffff inset;
//         }

`


export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
   font-weight: 200;

  font-family: 'Noto Sans', sans-serif;  
  text-decoration : none;

`;

