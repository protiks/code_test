import React from 'react';
import { IconButton } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import InfoIcon from '@mui/icons-material/Info';
import OpenNewWindow from '../../utility/OpenNewWindow';

interface Props {
    url: string
    icon: string
}

const CustomIcon = ({ url, icon }: Props) => {
    const [hover, setHover] = React.useState(false)

    const handleColor = () => {
        return hover ? "info" : "action"
    }


    const renderSwitch = (param: string) => {
        switch (param) {
            case "pdf":
                return <PictureAsPdfIcon color={handleColor()} />
            case "info":
                return <InfoIcon color={handleColor()} />
            default:
                <div />
        }
    }

    return (
        <IconButton onClick={OpenNewWindow(url)} onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)}>
            {renderSwitch(icon)}
        </IconButton>
    )
}

export default CustomIcon;