import { useTheme } from '@mui/material/styles';
import { createMakeAndWithStyles } from 'tss-react/compat';

export const { makeStyles, withStyles } = createMakeAndWithStyles({
    useTheme,
});