/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({ content }) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/allef-Reis.png' />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime} >
                            <strong> Allef Reis </strong>
                            <time title='Publicado em 6 de julho de 2022' dateTime='2022-07-06 18:21:00'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar Comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p> {content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20} /> Aplaudir <span> 20 </span>
                    </button>
                </footer>
            </div>
        </div>
    )
}