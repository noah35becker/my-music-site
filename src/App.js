
// IMPORTS
import ComingSoon from './components/ComingSoon';

import 'bootstrap';  // Bootstrap JS

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


// COMPONENT
function App() {
    return (
        <main className='min-vh-100 d-flex flex-column justify-content-center align-items-center'>
            <ComingSoon />
        </main>
    );
}


// EXPORT
export default App;