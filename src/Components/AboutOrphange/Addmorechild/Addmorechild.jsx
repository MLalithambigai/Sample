import React, { useState } from 'react';
import upload_image from '../../Assets/upload_area.svg';
import './Addmorechild.css';

export const Addmorechild = () => {
  
    return (
      <>
        <div>
            <div className='Addmorechild-qusetion'>Education</div>
            <DisplayAll/>
        </div>

        <div>
            <div className='Addmorechild-qusetion'>Sports</div>
            <DisplayAll/>
        </div>

        <div>
            <div className='Addmorechild-qusetion'>Extra Activity</div>
            <DisplayAll/>
        </div>
        <div>
            <div className='Addmorechild-qusetion'>Medical Condition</div>
            <MedicalCondition/>
        </div>
      </>
    );
  };


const DisplayAll = ()=>{

    const [compatitions, setCompatitions] = useState([]);

    const handleAddCompatition = () => {
        setCompatitions([...compatitions, <Compatition key={compatitions.length} />]);
    };

    const handleDeleteCompetition = (index)=>{
        setCompatitions(compatitions.filter((_, i) => i !== index));
    } 
 
    return(
        <>
        <div className='Addmorechild-container'>
            <div className='q-and-a'>
                <div className='Addmorechild-answer'>
                    <div className='Addmorechild-description'>
                        <div><p>Description:</p></div>
                        <input type='text' />
                    </div>   
                
                    <div className='add-compatitions'>
                        <p>Add Do you participate any compatition{' '}
                            <button onClick={handleAddCompatition}>Add</button>
                        </p>
                    </div>

                    <div className='map-detilas'>
                        {compatitions.map((competition, index) => (
                            <div key={index}>
                                {<Compatition/>}
                                <button onClick={() => handleDeleteCompetition(index)} className='Remove-button'>Remove</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


const Compatition = () => {
  return (
    <div className='about-compation'>
        <div className='Addmorechild-compatition-input'>
                <div><p>Compatition:</p></div>
                <input type='text' />
        </div>

       <div className='certificates'>
            <p>Attach the Certificates Do you Have</p>

            <div className='Addcerfificate-image'>
            <label htmlFor='file-input'>
                <img src={upload_image} alt='' className='upload_image' />
            </label>

            <input type='file' name='image' id='file-input' hidden />
            </div>

            <button className='Addcertificate-button'>UPLOAD</button>
        </div>
    </div>
  );
};




const MedicalCondition = () => {
    const [hasMedicalIssue, setMedicalIssue] = useState(false);
    const [diseases, setDiseases] = useState([]);

    const handleAddMedical = () => {
        setDiseases([...diseases, <AddDiaseases key={diseases.length} />]);
    };

    return (
        <>
            <div className='about-MedicalCondition'>
                <div className='get_MedicalCondition'>
                    <div><p>She/He have medical issues</p></div>
                    <input
                        type='radio'
                        onChange={() => setMedicalIssue(true)}
                        checked={hasMedicalIssue}
                    />
                    <span>YES</span>
                    <input
                        type='radio'
                        onChange={() => setMedicalIssue(false)}
                        checked={!hasMedicalIssue}
                    />
                    <span>NO</span>
                </div>
                {hasMedicalIssue && (
                    <AttachMedical handleAddMedical={handleAddMedical} />
                )}
                {diseases}
            </div>
        </>
    );
};

const AttachMedical = ({ handleAddMedical }) => {
    return (
        <>
            <div className='Add-Diseases'>
                <p>Add The Diseases</p>
                <button onClick={handleAddMedical}>Add</button>
            </div>
        </>
    );
};

const AddDiaseases = () => {
    return (
        <div className='certificates'>
            <div className='diseases'>
                <p>Disease:</p>
                <input type="text" />
            </div>

            <div className='Addcerfificate-image'>
                <p>Attach Has the Medical cerdificate</p>
                <label htmlFor='file-input'>
                    <img src={upload_image} alt='' className='upload_image' />
                </label>
                <input type='file' name='image' id='file-input' hidden />
            </div>

            <button className='Addcertificate-button'>UPLOAD</button>
        </div>
    );
};

export default MedicalCondition;





