import { Link } from 'react-router-dom'
import styles from './styles.module.css'

function CreateEmployee() {
    return (
        <main>
            <div className={styles.title}>
                <h1>HRnet</h1>
            </div>
            <div className={styles.container}>
                <Link to="/list">View Current Employees</Link>
                <h2>Create Employee</h2>
                <form id="create-employee">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name"></input>

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name"></input>

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <input id="date-of-birth" type="text"></input>

                    <label htmlFor="start-date">Start Date</label>
                    <input id="start-date" type="text"></input>

                    <fieldset className={styles.address}>
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text"></input>

                        <label htmlFor="city">City</label>
                        <input id="city" type="text"></input>

                        <label htmlFor="state">State</label>
                        <select name="state" id="state"></select>

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number"></input>
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <select name="department" id="department">
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>
                </form>
                <button>Save</button>
            </div>
            <div id="confirmation" className="modal">
                Employee Created!
            </div>
        </main>
    )
}

export default CreateEmployee
