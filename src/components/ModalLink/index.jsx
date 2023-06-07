import './styles.scss';
import { FiX, FiClipboard } from 'react-icons/fi';

function ModalLink ({ closeModal, content }) {

    async function copyLink(){
        await navigator.clipboard.writeText(content.link)
        alert("URL Copiada com sucesso");
    }

    return(
        <div className='modal_container'>

            <div className="modal_header">
                <h2>Link encurtado</h2>
                <button onClick={closeModal} >
                    <FiX size={28} color='#000' />
                </button>
            </div>

            <span>
                {content.long_url}
            </span>

            <button className='modal_link' onClick={copyLink} >
                {content.link}
                <FiClipboard size={20} color='#FFF' />
            </button>
        
        </div>
    )
}

export default ModalLink;