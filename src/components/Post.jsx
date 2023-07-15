import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src='https://github.com/maykbrito.png' />
                    <div className={styles.authorInfo}>
                        <strong>Allef Reis</strong>
                        <span>Consult React</span>
                    </div>
                </div>
                <time title='Publicado em 6 de julho de 2022' dateTime='2022-07-06 18:21:00'> Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p> Fala galera! </p>
                <p> commmit de mais um post </p>
                <p> ♪ {' '}<a href='#' >github.allef.....</a> </p>
                <p> <a href='#' >#NLW</a> {' '}<a href='#' >#NLW</a>{' '}<a href='#' >#NLW</a></p>
            </div>
            <form className={styles.commentForm}>
                <strong> Deixe seu feedback!</strong>
                <textarea placeholder='Deixe um comentário!' />
                <footer>
                    <button type='submite'> Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}