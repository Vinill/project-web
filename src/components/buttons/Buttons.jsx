import Stack from '@mui/material/Stack';
import Button from '@material/react-button'


export const ButtonNav = () => {
    return (
        <Stack className="button-nav">
            <Button variant="outlined">
                Primary
            </Button>
            <Button variant="outlined" disabled>
                Disabled
            </Button>
            <Button variant="outlined" href="#outlined-buttons">
                Link
            </Button>
        </Stack>
    );
}