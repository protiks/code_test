import React, { useState, useEffect } from "react";
import List from '@mui/material/List';
import { ListItemButton, ListItemText } from '@mui/material'
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { Container } from '@mui/material';
import CustomIcon from "./CustomIcon";
import LimitStringLength from "../../utility/LimitStringLength";


interface Props {
    stuff: {
        liveUrl: string
        logoLightUrl: string
        description: string
        companyName: string
        companyId: number
        colorSettings: {
            brandColor: string
        }
        events: [
            {
                pdfUrl: string,
                reportUrl: string
            }
        ]

    }
}

const CustomList = ({ ...stuff }: Props) => {
    const [open, setOpen] = React.useState(false)
    const [r, setR] = React.useState('')
    const { logoLightUrl, companyName, liveUrl, description, events } = stuff.stuff

    useEffect(() => {
        if (events) {
            const [{ reportUrl }] = events
            setR(reportUrl)
        }
    }, events)

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <Container>
            <List >
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <img src={logoLightUrl} width={50} />
                    </ListItemIcon>
                    <ListItemText
                        primary={companyName}
                        secondary={LimitStringLength(description, !open)}
                    />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List>
                        <ListItemIcon style={{ marginLeft: 50 }}>
                            <CustomIcon url={r} icon="pdf" />
                            <CustomIcon url={liveUrl} icon="info" />
                        </ListItemIcon>
                    </List>
                </Collapse>
                <Divider />
            </List>
        </Container>
    )
}


export default CustomList 