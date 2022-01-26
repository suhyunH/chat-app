import { GithubAuthProvider, GoogleAuthProvider, linkWithPopup, unlink } from 'firebase/auth';
import React,{useState} from 'react'
import { auth} from '../../misc/firebase'
import { ProviderSt } from './dashboard.styled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
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
        }catch(err){
            alert(err.message);
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
    <ProviderSt>
        {isConnected["google.com"]?
           (<span className="providerName" style={{color:"green"}} onClick={unlinkGoogle}><FontAwesomeIcon icon={faGoogle}/></span>)
        :  ( <button onClick={linkGoogle}>Link to Google</button>)

        }

        {isConnected["github.com"]?
           (<span className="providerName" onClick={unlinkGithub}> <FontAwesomeIcon icon={faGithub}/></span>)
           : (<button onClick={linkGithub}>Link to Github</button>)
        }

    </ProviderSt>)
    
}

export default ProviderBlock
