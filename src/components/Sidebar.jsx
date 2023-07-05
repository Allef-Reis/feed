import styles from './Sidebar.module.css'


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src='https://images.unsplash.com/photo-1538991383142-36c4edeaffde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40'></img>

            <div className={styles.profile}>
                <strong> Allef Reis</strong>
                <span> Consult react</span>
            </div>
            <footer>
                <a href='#'> Editar seu perfil</a>
            </footer>
        </aside>
    );
}