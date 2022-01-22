import React, { useState } from 'react';
import Modal from 'react-modal';
import { useModalState } from '../../../misc/custom-hooks';
import { storage } from '../../../misc/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useParams } from 'react-router';


const AttachmentBtnModal = ({afterUpload}) => {
    const { chatId } = useParams();
  const{isOpen, open, close}= useModalState()
  const[file, setFile]= useState('');
  const [imageSrc, setImageSrc] = useState(''); 
  const [isLoading, setIsLoading] = useState(false);

 
const onChange =(e)=>{
      const fileArr = e.target.files[0];
      setFile(fileArr);
      const reader = new FileReader(); 
      reader.readAsDataURL(fileArr); 
      return new Promise((resolve) => { 
          reader.onload = () => { 
              setImageSrc(reader.result); 
              resolve(); 
            }; 
        });
  }

const onUpload = async()=>{
    console.log(file.name);
    try{
        const uploadPromises =  file.map(f =>{
            uploadBytes(
               ref(storage, `/chat/${chatId}/${Date.now() + f.name}`),
                f.blobFile,
                {
                  cacheControl: `public, max-age=${3600 * 24 * 3}`,
                }
            );
        });
            
            const uploadSnapshots = await Promise.all(uploadPromises);
            const shapePromises = uploadSnapshots.map(async snap =>{
                return {
                    contentType: snap.metadata.contentType,
                    name: snap.metadata.name,
                    url: await getDownloadURL(snap.ref),
                  };
                });
                const files = await Promise.all(shapePromises);
                await afterUpload(files);
                setIsLoading(false);
                close();
    }catch(err){
        setIsLoading(false);
        alert(err.message);

    }
}
  
  return <>
      <button onClick={open}>fileupload</button>
    <Modal isOpen={isOpen} ariaHideApp={false}>
        <h4>Upload files</h4>
        <input type="file" onChange={onChange}/>
      <img src={imageSrc}/>
        <button onClick={onUpload}>Send to Chat</button>
        <footer>
            <button onClick={close}>close</button>
        </footer>
    </Modal>
  </>;
};

export default AttachmentBtnModal;
