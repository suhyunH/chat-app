import React, { useState } from 'react';
import Modal from 'react-modal';
import { useModalState } from '../../../misc/custom-hooks';
import { storage } from '../../../misc/firebase';
import { ref, uploadBytes, getDownloadURL, uploadString } from 'firebase/storage';
import { useParams } from 'react-router';
import { serverTimestamp } from 'firebase/database';
import { modalStyle } from '../../SidebarStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
const MAX_FILE_SIZE = 1000 * 1024 * 5;

const AttachmentBtnModal = ({afterUpload}) => {
  const { chatId } = useParams();
  const{isOpen, open, close}= useModalState()
  const[fileList, setFileList]= useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const MAX_FILE_SIZE = 1000 * 1024 * 5;


const onChange = e => {
  const files = e.target.files;
  const fileArr = [...files];
  const filtered = fileArr
  .filter(el => el.size <= MAX_FILE_SIZE)
  .slice(0, 5);
   setFileList(filtered);
};

const onUpload = async()=>{
   try {
      const uploadPromises = fileList.map(f => 
        uploadBytes(
        ref(storage, `/chat/${chatId}/${Date.now()+f.name}`),
        f
        // {
        //   cacheControl: `public, max-age=${3600 * 24 * 3}`,
        // }
        )
      );

    const uploadSnapshots = await Promise.all(uploadPromises);
 
    const shapePromises = uploadSnapshots.map(async snap => {
        return {
          contentType: snap.metadata.contentType,
          name: snap.metadata.name,
          url: await getDownloadURL(snap.ref),
        };
      });

      const resultFile = await Promise.all(shapePromises);
      
      await afterUpload(resultFile);
      setIsLoading(false);
      close();
    } catch (err) {
      setIsLoading(false);
      alert(err.message);
    }
   
}

  
  return <>
      <button onClick={open}><FontAwesomeIcon icon={faFileUpload}/></button>
     <Modal isOpen={isOpen} ariaHideApp={false} style={modalStyle}>
        <h4>Upload files</h4>
        <input type="file" onChange={onChange} multiple/>
        <button disabled={isLoading} onClick={onUpload}>Send to Chat</button>
        <footer>
        </footer>
    </Modal>
  </>;
};

export default AttachmentBtnModal;
