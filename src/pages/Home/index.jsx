import { FiLink } from 'react-icons/fi';
import { useState } from 'react';
import './styles.scss';
import Menu from '../../components/Menu';
import ModalLink from '../../components/ModalLink';
import api from '../../services/api';

function Home() {
    const [link, setLink] = useState('');
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);

    async function shortLink() {
        try {
            const response = await api.post('/shorten', {
                long_url: link
            })

            setData(response.data);
            setShowModal(true);
            setLink('');
            
        } catch {
            alert("ops algo deu errado")
            setLink('');
        }
    }

    return (
        <div className="container_home">

            <div className='logo'>
                <img src='/logo.png' alt='Dev shortener logo' />
                <h1>DevLink Shortener</h1>
                <span> Digite ou Cole seu link abaixo para encurta-lo  👇 </span>
            </div>

            <div className="area-input">
                <div>
                    <FiLink size={24} color='#FFF' />
                    <input
                        placeholder='Insira o seu link aqui. . .'
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                </div>
                <button onClick={shortLink} > Encurtar Link</button>
            </div>
            <Menu />

            {showModal && (
                <ModalLink
                    closeModal={() => setShowModal(false)}
                    content={data}
                />
            )}
        </div>
    )
}


export default Home;