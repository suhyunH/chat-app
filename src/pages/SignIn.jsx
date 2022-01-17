import React from 'react'
import { auth, database} from '../misc/firebase'
import { getAdditionalUserInfo, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { ref, serverTimestamp, set } from 'firebase/database'

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
    return (
        <>
        <div>
            <h2>Welcome to chat</h2>
            <p>adklajdklasdj</p>
        </div>
        <div>
            <button onClick={onGithubSignIn}>Continue with github</button>
            <button onClick={onGoogleSignIn}>Continue with google</button>
        </div>
        </>
        
    )
}

export default SignIn
