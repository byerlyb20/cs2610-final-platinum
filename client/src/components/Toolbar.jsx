import styles from './Toolbar.module.css'

export function Toolbar() {
    return (
        <div className={styles.toolbar}>
            <div>Platinum</div>
            <div>Action items go here</div>
        </div>
    )
}