import { Link } from 'react-router-dom'
import styles from './styles.module.css'

function EmployeeList() {
    return (
        <main>
            <div id="employee-div" className={styles.container}>
                <div className={styles.title}>
                    <h1>Current Employees</h1>
                </div>
                <table id="employee-table" className="display"></table>
                <Link to="/">Home</Link>
            </div>
        </main>
    )
}

export default EmployeeList
