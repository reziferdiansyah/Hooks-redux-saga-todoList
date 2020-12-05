import React from 'react'
import SearchInput from './SearchInput'

export default function Header() {
    return (
        <header className="header">
            <h1 className="header__title">Welcome to todo Apps!</h1>
            <div className="filter">
                <SearchInput />
            </div>
        </header>
    )
}