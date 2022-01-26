import React,{useState,  useRef} from 'react'
import AvatarEditor from 'react-avatar-editor';
import {
    getDownloadURL,
    ref as storageRef,
    uploadBytes,
  } from 'firebase/storage';
  import{ref, update} from "firebase/database"

  import { storage, database } from '../../misc/firebase';
import { useProfile } from '../../context/profile.context';
import ProfileAvatar from '../ProfileAvatar';
import { getUserUpdate } from '../../misc/helpers';
import {UploadAvatarSt} from './dashboard.styled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const fileInputTypes  =".png, .jpeg, .jpg";
const acceptedFileTypes = ['image/png', 'image/jpeg', 'image/pjpeg'];

const isValidFile = file=> acceptedFileTypes.includes(file.type);
const getBlob = canvas => {
    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('File process error'));
        }
      });
    });
  };
const AvatarUploadBtn =()=> {
    const [img, setImg] = useState(null);
    const {profile} = useProfile();
    const [isValid, setIsValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const avatarEditorRef = useRef();

    const onFileInputChange=(ev)=>{
        const currFiles = ev.target.files;
        if (currFiles.length === 1) {
            const file = currFiles[0];
            if (isValidFile(file)) {
              setImg(file);
                setIsValid(true);
            }else{
                alert(`Wrong file type ${file.type}`)
                setIsValid(false);
            }
        }
    };

    const onUploadClick= async()=>{
        const canvas = avatarEditorRef.current.getImageScaledToCanvas();
       setIsLoading(true);
        try{
           
           const blob = await getBlob(canvas);
           const avatarFileRef = storageRef(storage, `/profiles/${profile.uid}/avatar`);
           await uploadBytes(avatarFileRef, blob,{
            cacheControl: `public, max-age=${3600 * 24 * 3}`,
           });
           const downloadUrl = await getDownloadURL(avatarFileRef);


           const updates = await getUserUpdate(
            profile.uid, 
            'avatar', 
            downloadUrl, 
            database
            );  
            await update(ref(database), updates);
           setIsLoading(false);
           alert("avatar has been uploaded");
           setIsValid(false);
       }catch(err){
           setIsLoading(false);
           alert(err.message);

       }
    }

    return (
        <UploadAvatarSt>
            <div>
              <label htmlFor="avatar-upload">
                 <ProfileAvatar src={profile.avatar} name={profile.name} />
              </label>
                <input className="SearchAvatarBtn" id="avatar-upload" type="file" accept={fileInputTypes} onChange={onFileInputChange} style={{display:"none"}} />
         {isValid &&  
                <div >
                    <header>
                        <h3>Upload new Profile</h3>
                    </header>
                    <main>
                        {img&&
                            (<AvatarEditor
                            ref={avatarEditorRef}
                            image={img}
                            width={200}
                            height={200}
                            border={10}
                            borderRadius={100}
                            rotate={0}
                            />)
                        }
                    </main>
                    <footer>
                    <button onClick={onUploadClick} disabled={isLoading}>
                    <FontAwesomeIcon icon={faUpload}/>
                    </button>
                    <button onClick={()=>{setIsValid(false)}}> <FontAwesomeIcon icon={faTimes}/> </button>
                    </footer>
                </div>
         }
            </div>
            
        </UploadAvatarSt>
    )
}

export default AvatarUploadBtn;
