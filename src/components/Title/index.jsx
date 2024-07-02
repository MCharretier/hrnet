import styles from './styles.module.css'

function Title({ children }) {
    return (
        <div className={styles.title}>
            <h1>{children}</h1>
        </div>
    )
}

export default Title
