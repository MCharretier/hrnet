import { useState } from 'react'
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import Modal from 'react-modal'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './styles.module.css'

Modal.setAppElement('#root')

function CreateEmployee() {
    const [birthDate, setBirthDate] = useState(new Date())
    const [startDate, setStartDate] = useState(new Date())
    const [modalIsOpen, setModalIsOpen] = useState(false)

    function openModal() {
        setModalIsOpen(true)
    }

    function closeModal() {
        setModalIsOpen(false)
    }

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
                    <DatePicker
                        id="date-of-birth"
                        selected={birthDate}
                        onChange={(date) => setBirthDate(date)}
                    />

                    <label htmlFor="start-date">Start Date</label>
                    <DatePicker
                        id="start-date"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                    />

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
                <button onClick={openModal}>Save</button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Confirmation Modal"
                className={styles.modal}
            >
                <div className={styles.modalContent}>
                    <button className={styles.modalClose} onClick={closeModal}>
                        X
                    </button>
                    <p>Employee Created!</p>
                </div>
            </Modal>
        </main>
    )
}

export default CreateEmployee
