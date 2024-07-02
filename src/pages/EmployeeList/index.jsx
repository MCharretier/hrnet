import { lazy, Suspense, useMemo } from 'react'
import { Link } from 'react-router-dom'
import Title from '../../components/Title'
import { useSelector } from 'react-redux'
import styles from './styles.module.css'

const Table = lazy(() => import('../../components/Table'))

function EmployeeList() {
    const employees = useSelector((state) => state.employee.list)
    const memoizedEmployees = useMemo(() => employees, [employees])

    return (
        <main>
            <Title>Current Employees</Title>
            <div className={styles.container}>
                <Suspense fallback={null}>
                    <Table data={memoizedEmployees} />
                </Suspense>
                <Link to="/">Home</Link>
            </div>
        </main>
    )
}

export default EmployeeList
