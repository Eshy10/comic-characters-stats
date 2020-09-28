import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 800,
    height: 1650,
    marginLeft: '14em',
    backgroundColor: 'rgb(0 0 0 / 84%)',
  },
  media: {
    height: 400,
    width: 500,
    marginLeft: '13em',
    marginTop: '3em',
  },
  intelligence: {
    background: '#22c1c3',
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',
    fontSize: '10px',
    paddingLeft: '1rem',
    fontWeight: 'bolder',
    color: '#000',
    backgroundColor: '#f4d03f',
    backgroundImage: 'linear-gradient(132deg,hsla(230,84%,63%,1),#16a085)',
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    marginLeft: '1em',
  },
  secondaryColor: {
    color: '#929eaa',
  },
  primaryColor: {
    color: '#f5f5dc',
  },
});

export default useStyles;
