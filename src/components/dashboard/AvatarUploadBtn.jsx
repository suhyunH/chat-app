import React,{useState} from 'react'
import AvatarEditor from 'react-avatar-editor';


const fileInputTypes  =".png, .jpeg, .jpg";
const acceptedFileTypes = ['image/png', 'image/jpeg', 'image/pjpeg'];

const isValidFile = file=> acceptedFileTypes.includes(file.type);
    


const AvatarUploadBtn =()=> {
    const [img, setImg] = useState(null);
    const [isValid, setIsValid] = useState(false);

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
    }

    return (
        <div>
            <div>
                <label htmlFor='avatar-upload'>
                    Select new avatar
                <input id="avatar-upload" type="file" accept={fileInputTypes} onChange={onFileInputChange}></input>
                </label>

{/* 새창에서 열리는 놈들 */}
         {isValid &&  
                <div >
                    <header>
                        <h3>Adjust and upload new avatar</h3>
                    </header>
                    <main>
                        {img&&
                            (<AvatarEditor
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
                    <button>
                            upload new avatar
                        </button>
                    </footer>
                </div>
         }
{/*  */}

            </div>
            
        </div>
    )
}

export default AvatarUploadBtn;
