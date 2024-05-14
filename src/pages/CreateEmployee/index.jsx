import { useState } from 'react'
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import Modal from 'react-modal'
import SelectMenu from '../../components/SelectMenu'
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
                        <SelectMenu
                            options={[
                                {
                                    label: 'Alabama',
                                    value: 'AL'
                                },
                                {
                                    label: 'Alaska',
                                    value: 'AK'
                                },
                                {
                                    label: 'American Samoa',
                                    value: 'AS'
                                },
                                {
                                    label: 'Arizona',
                                    value: 'AZ'
                                },
                                {
                                    label: 'Arkansas',
                                    value: 'AR'
                                },
                                {
                                    label: 'California',
                                    value: 'CA'
                                },
                                {
                                    label: 'Colorado',
                                    value: 'CO'
                                },
                                {
                                    label: 'Connecticut',
                                    value: 'CT'
                                },
                                {
                                    label: 'Delaware',
                                    value: 'DE'
                                },
                                {
                                    label: 'District Of Columbia',
                                    value: 'DC'
                                },
                                {
                                    label: 'Federated States Of Micronesia',
                                    value: 'FM'
                                },
                                {
                                    label: 'Florida',
                                    value: 'FL'
                                },
                                {
                                    label: 'Georgia',
                                    value: 'GA'
                                },
                                {
                                    label: 'Guam',
                                    value: 'GU'
                                },
                                {
                                    label: 'Hawaii',
                                    value: 'HI'
                                },
                                {
                                    label: 'Idaho',
                                    value: 'ID'
                                },
                                {
                                    label: 'Illinois',
                                    value: 'IL'
                                },
                                {
                                    label: 'Indiana',
                                    value: 'IN'
                                },
                                {
                                    label: 'Iowa',
                                    value: 'IA'
                                },
                                {
                                    label: 'Kansas',
                                    value: 'KS'
                                },
                                {
                                    label: 'Kentucky',
                                    value: 'KY'
                                },
                                {
                                    label: 'Louisiana',
                                    value: 'LA'
                                },
                                {
                                    label: 'Maine',
                                    value: 'ME'
                                },
                                {
                                    label: 'Marshall Islands',
                                    value: 'MH'
                                },
                                {
                                    label: 'Maryland',
                                    value: 'MD'
                                },
                                {
                                    label: 'Massachusetts',
                                    value: 'MA'
                                },
                                {
                                    label: 'Michigan',
                                    value: 'MI'
                                },
                                {
                                    label: 'Minnesota',
                                    value: 'MN'
                                },
                                {
                                    label: 'Mississippi',
                                    value: 'MS'
                                },
                                {
                                    label: 'Missouri',
                                    value: 'MO'
                                },
                                {
                                    label: 'Montana',
                                    value: 'MT'
                                },
                                {
                                    label: 'Nebraska',
                                    value: 'NE'
                                },
                                {
                                    label: 'Nevada',
                                    value: 'NV'
                                },
                                {
                                    label: 'New Hampshire',
                                    value: 'NH'
                                },
                                {
                                    label: 'New Jersey',
                                    value: 'NJ'
                                },
                                {
                                    label: 'New Mexico',
                                    value: 'NM'
                                },
                                {
                                    label: 'New York',
                                    value: 'NY'
                                },
                                {
                                    label: 'North Carolina',
                                    value: 'NC'
                                },
                                {
                                    label: 'North Dakota',
                                    value: 'ND'
                                },
                                {
                                    label: 'Northern Mariana Islands',
                                    value: 'MP'
                                },
                                {
                                    label: 'Ohio',
                                    value: 'OH'
                                },
                                {
                                    label: 'Oklahoma',
                                    value: 'OK'
                                },
                                {
                                    label: 'Oregon',
                                    value: 'OR'
                                },
                                {
                                    label: 'Palau',
                                    value: 'PW'
                                },
                                {
                                    label: 'Pennsylvania',
                                    value: 'PA'
                                },
                                {
                                    label: 'Puerto Rico',
                                    value: 'PR'
                                },
                                {
                                    label: 'Rhode Island',
                                    value: 'RI'
                                },
                                {
                                    label: 'South Carolina',
                                    value: 'SC'
                                },
                                {
                                    label: 'South Dakota',
                                    value: 'SD'
                                },
                                {
                                    label: 'Tennessee',
                                    value: 'TN'
                                },
                                {
                                    label: 'Texas',
                                    value: 'TX'
                                },
                                {
                                    label: 'Utah',
                                    value: 'UT'
                                },
                                {
                                    label: 'Vermont',
                                    value: 'VT'
                                },
                                {
                                    label: 'Virgin Islands',
                                    value: 'VI'
                                },
                                {
                                    label: 'Virginia',
                                    value: 'VA'
                                },
                                {
                                    label: 'Washington',
                                    value: 'WA'
                                },
                                {
                                    label: 'West Virginia',
                                    value: 'WV'
                                },
                                {
                                    label: 'Wisconsin',
                                    value: 'WI'
                                },
                                {
                                    label: 'Wyoming',
                                    value: 'WY'
                                }
                            ]}
                            defaultValue={{
                                label: 'Alabama',
                                value: 'AL'
                            }}
                        ></SelectMenu>

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number"></input>
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <SelectMenu
                        options={[
                            {
                                label: 'Sales',
                                value: 'Sales'
                            },
                            {
                                label: 'Marketing',
                                value: 'Marketing'
                            },
                            {
                                label: 'Engineering',
                                value: 'Engineering'
                            },
                            {
                                label: 'Human Resources',
                                value: 'Human Resources'
                            },
                            {
                                label: 'Legal',
                                value: 'Legal'
                            }
                        ]}
                        defaultValue={{
                            label: 'Sales',
                            value: 'Sales'
                        }}
                    ></SelectMenu>
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
