import { GithubAuthProvider, GoogleAuthProvider, linkWithPopup, unlink } from 'firebase/auth';
import React,{useState} from 'react'
import { auth} from '../../misc/firebase'

const ProviderBlock=()=> {
    const [isConnected, setIsConnected] = useState({ 
        "google.com": auth.currentUser.providerData.some((data)=>
        data.providerId==="google.com"),
        "github.com": auth.currentUser.providerData.some((data)=>
        data.providerId==="github.com"),
    });

    const updateIsConnected=(providerId, value)=>{
        setIsConnected(p=>{
            return{
                ...p,
                [providerId] : value,
            };
        });
    };
    
    const unlinkClick = async providerId =>{
        console.log(auth.currentUser.providerData.length);
        try{
            if(auth.currentUser.providerData.length ===1){
                throw new Error(`You can not disconnect from ${providerId}`)
            }
           await unlink(auth.currentUser, providerId);
           updateIsConnected(providerId, false);
           alert(`disconneted from ${providerId}`);
        }catch(err){
            alert(err.message);
        };
    };

    const link = async(provider)=>{
        try{
          await linkWithPopup(auth.currentUser, provider);
          alert(`Linked to ${provider.providerId}`);
          updateIsConnected(provider.providerId, true);
        }catch{
            alert("error");
        }
    };
    const unlinkGoogle=()=>{
        unlinkClick('google.com');
    };
    const unlinkGithub=()=>{
        unlinkClick('github.com');
    };

    const linkGoogle=()=>{
        link(new GoogleAuthProvider())
    };
    const linkGithub=()=>{
        link(new GithubAuthProvider());
    };
    return (
    <div>
        {isConnected["google.com"]&&
           (<span style={{color:"green"}} onClick={unlinkGoogle}>Google Connected</span>)
        }

        {isConnected["github.com"]&&
           (<span onClick={unlinkGithub}> GitHub Connected</span>)
        }

           <div>
               {!isConnected["google.com"] &&
              ( <button style={{backgroundColor:"green"}} onClick={linkGoogle}>Link to Google</button>)
              }
              {!isConnected["github.com"]&&
               (<button onClick={linkGithub}>Link to Github</button>)
              }
           </div>

    </div>)
    
}

export default ProviderBlock
