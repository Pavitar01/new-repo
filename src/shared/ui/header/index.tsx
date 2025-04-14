'use client'
import { Box, InputBase } from "@mui/material"
import { actionList } from "./config"
import Link from "next/link"
import SearchIcon from '@mui/icons-material/Search';
import "./styles.scss"

const Header = () => {
    return (
        <Box className='app-header-container'>
            <Box className="action-links">
                {actionList.map((action, index) => {
                    return action.type === "link" ? <Link className="app-header-link" href={action.href as string} key={index}>{action.name}</Link> :
                        <Box className="input-field-wrapper">
                            <InputBase
                                className="input-base" inputProps={{
                                    className: "input-field"
                                }} placeholder="Search ..." />
                            <SearchIcon fontSize="small" className="search-icon" />
                        </Box>
                })}
            </Box>
        </Box>
    )
}

export default Header
