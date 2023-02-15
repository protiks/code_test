import { styled, useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    //   paddingTop: theme.spacing(1),
    //   paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 12,
    },
}));

const TopNavBar = () => {
    const { palette } = useTheme()
    palette.mode = 'dark'
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <StyledToolbar>
                    <Typography
                        variant="h6"
                        sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
                    >
                        Quartr
                    </Typography>

                    <IconButton
                        edge="end"
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                </StyledToolbar>
            </AppBar>
        </Box>
    );
}

export default TopNavBar;