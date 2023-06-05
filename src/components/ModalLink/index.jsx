import './styles.scss';
import { FiX, FiClipboard } from 'react-icons/fi';

function ModalLink({ closeModal }){
    return(
        <div className='modal_container'>

            <div className="modal_header">
                <h2>Link encurtado</h2>
                <button onClick={closeModal} >
                    <FiX size={28} color='#000' />
                </button>
            </div>

            <span>
                https://github.com/devfrontwill
            </span>

            <button className='modal_link' >
                https://bit.ly/3303
                <FiClipboard size={20} color='#FFF' />
            </button>
        
        </div>
    )
}

export default ModalLink;