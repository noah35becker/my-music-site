
// IMPORTS
import ComingSoon from './components/ComingSoon';
import Header from './components/Header';

import 'bootstrap';  // Bootstrap JS

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


// COMPONENT
function App() {
    return (<>
        <Header></Header>

        <main className='flex-grow-1 d-flex flex-column justify-content-center align-items-center'>
            <ComingSoon />
        </main>
    </>);
}


// EXPORT
export default App;