import React, { useState } from 'react'
import styles from './styles.module.css'

function SelectMenu({ options, defaultValue }) {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(defaultValue)

    const handleOptionClick = (option) => {
        setSelectedOption(option)
        setIsOpen(false)
    }

    return (
        <div className={styles.selectMenu}>
            <div
                className={`${styles.selectMenuHeader} ${
                    isOpen ? styles.open : ''
                }`}
                onClick={() => setIsOpen(!isOpen)}
                tabIndex="0"
            >
                {selectedOption ? selectedOption.label : 'Select an option'}
            </div>
            {isOpen && (
                <ul className={styles.selectMenuOptions}>
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className={styles.selectMenuOption}
                            onClick={() => handleOptionClick(option)}
                            tabIndex="0"
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
            <select
                style={{ display: 'none' }}
                value={selectedOption ? selectedOption.value : ''}
                onChange={(e) => {
                    const selectedValue = e.target.value
                    const selected = options.find(
                        (option) => option.value === selectedValue
                    )
                    setSelectedOption(selected)
                }}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default SelectMenu
