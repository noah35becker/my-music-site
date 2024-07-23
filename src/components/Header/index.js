
// IMPORT
import './index.css';


// COMPONENT
function Header(){
    const subtitles = [
        'alto saxophonist',
        'clarinetist',
        'composer',
        'copyist'
    ];

    return (
        <header>
            <div className='site-titles'>
                <h1 className="title">Noah Becker</h1>
                
                <div className='subtitles'>
                    {subtitles.map((name) => <h5 className='subtitle'>{name}</h5>)}
                </div>
            </div>
        </header>
    );
}


// EXPORT
export default Header;