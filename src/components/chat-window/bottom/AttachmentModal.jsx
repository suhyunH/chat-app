import React ,{ useState }from 'react';
import { storage } from '../../../misc/firebase';
import { ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import { useParams } from 'react-router';
import { AttachModalSt } from './chatBottom.styled';
import { useModalState } from '../../../misc/custom-hooks';


const AttachmentModal = ({afterUpload}) => {
    const { chatId } = useParams();
    const[fileList, setFileList]= useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const{isOpen, open, close}= useModalState();

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
            
          } catch (err) {
            setIsLoading(false);
            alert(err.message);
          }
         
      }
  return <AttachModalSt>
      <h4>Upload files</h4>
        <input type="file" onChange={onChange} multiple/>
        <button disabled={isLoading} onClick={onUpload}>Send to Chat</button>
  </AttachModalSt>
};

export default AttachmentModal;
