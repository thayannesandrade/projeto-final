import { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import { FiTrash2, FiPlus } from 'react-icons/fi'

import image from '../../assets/coments.svg'
import './contato.css'


function Contato() {
    const getLocalList = () => {
        let items = localStorage.getItem('list')

        if(items) {
            return JSON.parse(localStorage.getItem('list'))
        }else {
            return []
        }
    }

    const [list, setList] = useState(getLocalList)
    const [newItem, setNewItem] = useState ('')

    function handleCreateNewItem() {
        const item = {
            id: Math.random(),
            title: newItem
        } 
        if (item.title === '') {
        return
        } 
        setList([...list, item])
        setNewItem
    }

    function handleRemoveItem(id) {
        const itemsFiltered = list.filter(item => item.id !== id)
        setList(itemsFiltered)
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])

    return(
        <>
            <Header image={image} description="">
               Contato
            </Header>
            <section className="list">
                <header>
                    <div className='input-container'>
                        <input 
                            type="text"
                            placeholder="Digite seu nome" 
                            onChange={(e) => setNewItem(e.target.value)}
                            value = {newItem}
                        />
                        <input 
                            type="email"
                            placeholder="Digite seu e-mail" 
                            onChange={(e) => setNewItem(e.target.value)}
                            value = {newItem}
                        />
                        <input 
                            type="text"
                            placeholder="Digite sua mensagem" 
                            onChange={(e) => setNewItem(e.target.value)}
                            value = {newItem}
                        />
                        <div className='add-container'>
                            <button className='add-task' type="submit" onClick={handleCreateNewItem}>
                                Enviar mensagem
                            </button></div>
                    </div>
                </header>
                <main>
                    <ul className='list-items'>
                    {
                        list.map(item => {
                            return(
                                <li key={item.id}>
                                    <div>
                                        <p>{item.title}</p>
                                    </div>
                                    <div>
                                        <button className='remove-task' type='button' onClick={() => handleRemoveItem(item.id)}>
                                        <FiTrash2 size={16} />
                                        </button>
                                    </div>
                                </li>
                            )
                        })
                    }
                    </ul>

                </main>
            </section>
        </>
    )
}

export default Contato 