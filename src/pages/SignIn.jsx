import React from 'react'
import { auth, database} from '../misc/firebase'
import { getAdditionalUserInfo, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { ref, serverTimestamp, set } from 'firebase/database'
import { SignSt } from '../main.styled'
import cheese from'../images/cheese.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

const SignIn=()=> {
    const signInWithProvider = async provider=>{
        try{
            const credential= await signInWithPopup(auth, provider);
            const userMeta = getAdditionalUserInfo(credential);

            if(userMeta.isNewUser){
                await set(ref(database, `/profiles/${credential.user.uid}`),{
                    name : credential.user.displayName,
                    createdAt: serverTimestamp(),
                });
            }
            alert("signed in");
        }catch{
           alert("error");
        }
    }

    const onGithubSignIn = ()=>{
        signInWithProvider(new GithubAuthProvider()); 
    }
    const onGoogleSignIn = ()=>{
        signInWithProvider (new GoogleAuthProvider());
    }



    
    return (<SignSt>
        <div className='logoName'>
            <h1>Cheese</h1> <h2>chat</h2>
        </div>
       <div className='signContainer'>
            <img src={cheese} className='cheese' alt='cheeselogo'/>
             <div className='signBtn'>
                <button onClick={onGithubSignIn}>Continue with github <FontAwesomeIcon icon={faGithub} /></button>
                <h5><span>or</span></h5>
                <button className='googleBtn' onClick={onGoogleSignIn}>Continue with google <FontAwesomeIcon icon={faGoogle} /></button>
            </div>
       </div>
            </SignSt>
    )
}

export default SignIn
