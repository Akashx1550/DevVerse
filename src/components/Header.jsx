
import { AppBar, Toolbar, styled , Typography} from "@mui/material"
import Diversity2SharpIcon from '@mui/icons-material/Diversity2Sharp';

const Container = styled(AppBar)`
    background: #060606;
    position: static;
    border-bottom: 1px solid #2f2f2f;
    height: 9vh;
`

const head = 'DevVerse';

const Header = () => {
    return (
        <Container>
            <Toolbar>
                <Diversity2SharpIcon fontSize="large"/>
                <Typography fontSize='20px' fontWeight='700' paddingLeft='5px' fontFamily='cursive'>
                    {head}
                </Typography>
            </Toolbar>
        </Container>
    )
}

export default Header