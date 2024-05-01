import styles from './ListWithBottomButtons.module.css'

export function ListWithBottomButtons({ children, buttonText, onClick }) {
    return (
        <div className={styles.listAndButtons}>
            <div className={styles.list}>
                {children}
            </div>
            <div className={styles.buttons}>
                <div className={styles.button} onClick={onClick}>
                    {buttonText}
                </div>
            </div>
        </div>
    )
}