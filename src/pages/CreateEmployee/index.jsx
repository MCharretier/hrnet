import { useState, useCallback, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import Title from '../../components/Title'
import Modal from 'react-modal'
import SelectMenu from 'react-simple-select-menu'
import { useDispatch } from 'react-redux'
import { add } from '../../redux/features/employee/employee.slice'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './styles.module.css'

const DatePicker = lazy(() => import('react-datepicker'))

Modal.setAppElement('#root')

const initialFormData = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    department: '',
    street: '',
    city: '',
    state: '',
    zipCode: ''
}

const stateOptions = [
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
]

const departmentOptions = [
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
]

function CreateEmployee() {
    const [formData, setFormData] = useState(initialFormData)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const dispatch = useDispatch()

    const formatDate = useCallback((date) => {
        const day = date.getDate().toString().padStart(2, '0')
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const year = date.getFullYear()
        return `${month}/${day}/${year}`
    }, [])

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }, [])

    const handleDateChange = useCallback(
        (name, value) => {
            setFormData((prev) => ({
                ...prev,
                [name]: formatDate(value)
            }))
        },
        [formatDate]
    )

    const handleSelectChange = useCallback((name, value) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }, [])

    const handleFormSubmit = useCallback(
        (e) => {
            e.preventDefault()
            dispatch(add(formData))
            setModalIsOpen(true)
        },
        [dispatch, formData]
    )

    const closeModal = useCallback(() => {
        setModalIsOpen(false)
    }, [])

    return (
        <main>
            <Title>HRnet</Title>
            <div className={styles.container}>
                <Link to="/list">View Current Employees</Link>
                <h2>Create Employee</h2>
                <form id="create-employee" onSubmit={handleFormSubmit}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                    ></input>

                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                    ></input>

                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <Suspense fallback={null}>
                        <DatePicker
                            id="dateOfBirth"
                            name="dateOfBirth"
                            selected={formData.dateOfBirth}
                            onChange={(date) =>
                                handleDateChange('dateOfBirth', date)
                            }
                        />
                    </Suspense>

                    <label htmlFor="startDate">Start Date</label>
                    <Suspense fallback={null}>
                        <DatePicker
                            id="startDate"
                            name="startDate"
                            selected={formData.startDate}
                            onChange={(date) =>
                                handleDateChange('startDate', date)
                            }
                        />
                    </Suspense>

                    <fieldset className={styles.address}>
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input
                            type="text"
                            id="street"
                            name="street"
                            value={formData.street}
                            onChange={handleInputChange}
                        ></input>

                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                        ></input>

                        <label htmlFor="state">State</label>
                        <SelectMenu
                            options={stateOptions}
                            defaultValue={stateOptions[0]}
                            onChange={(selected) =>
                                handleSelectChange('state', selected)
                            }
                        ></SelectMenu>

                        <label htmlFor="zipCode">Zip Code</label>
                        <input
                            type="number"
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                        ></input>
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <SelectMenu
                        options={departmentOptions}
                        defaultValue={departmentOptions[0]}
                        onChange={(selected) =>
                            handleSelectChange('department', selected)
                        }
                    ></SelectMenu>
                    <button type="submit">Save</button>
                </form>
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
