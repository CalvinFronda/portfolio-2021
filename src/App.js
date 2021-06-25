import './App.scss';

import { makeStyles } from '@material-ui/core/styles';
import Header from './components/header/Header';
import Landing from './components/landing/Landing';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Contact from './components/contact/Contact';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    section: {
        marginLeft: '15%',
        marginRight: '15%',
    },
    spacing: {
        marginTop: '140px',
        marginBottom: '140px',
    },
});

function App() {
    const classes = useStyles();

    return (
        <div className="section">
            <Header />

            <Landing />

            <Projects />
            <About />
            <Contact />
        </div>
    );
}

export default App;
