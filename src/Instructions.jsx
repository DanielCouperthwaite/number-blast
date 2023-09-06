import { Link } from "react-router-dom"

export default function Instructions () {

    const display1 = [0, 2]
    const display2 = [1, 2, 2, 9]
    const display4 = [5, 0]
    const display5 = [7, 8, 9, 6]

    return (
        <>
            <h3>Welcome to Number Blast!</h3>

            <p> Simply choose numbers from the grid that go up in value! </p>

            <div style={{border: '3px solid black', borderRadius: '10px', minHeight: '70px'}}>
                <div className='ansArr'>{display1.map((item, index) => { 
                    return ( 
                        <> 
                            <li key={index} style={{display: 'inline-block', border: '2px solid black', borderRadius: '10px', listStyle: 'none', padding: '5px', margin: '5px', minHeight: '20px', minWidth: '8px'}}>{item}</li>
                        </>) 
                    })}
                    <p style={{display: 'inline', color: 'green', fontSise: '50px'}}>✓</p>
                </div>
                <div className='ansArr'>{display2.map((item, index) => { 
                    return ( 
                        <> 
                            <li key={index} style={{display: 'inline-block', border: '2px solid black', borderRadius: '10px', listStyle: 'none', padding: '5px', margin: '5px', minHeight: '20px', minWidth: '8px'}}>{item}</li>
                        </>) 
                    })}
                    <p style={{display: 'inline', color: 'green', fontSise: '50px'}}>✓</p>
                </div>
                <div className='ansArr'>{display4.map((item, index) => { 
                    return ( 
                        <> 
                            <li key={index} style={{display: 'inline-block', border: '2px solid black', borderRadius: '10px', listStyle: 'none', padding: '5px', margin: '5px', minHeight: '20px', minWidth: '8px'}}>{item}</li>
                        </>) 
                    })}
                    <p style={{display: 'inline', color: 'red', fontSise: '50px'}}>X</p>
                </div>
                <div className='ansArr'>{display5.map((item, index) => { 
                    return ( 
                        <> 
                            <li key={index} style={{display: 'inline-block', border: '2px solid black', borderRadius: '10px', listStyle: 'none', padding: '5px', margin: '5px', minHeight: '20px', minWidth: '8px'}}>{item}</li>
                        </>) 
                    })}
                    <p style={{display: 'inline', color: 'red', fontSise: '50px'}}>X</p>
                </div>
                
            </div>

            <p>Sounds easy?</p>
            <p>As you progress you'll need to think fast to beat your high score and climb the global leaderboard!</p>
            
            {/* <Link className="link" style={{display: 'inline-block', border: '2px solid black', color:"black", margin: '10px', padding: "10px"}} to="/">Back   </Link> */}
            <Link className="link" style={{display: 'inline-block', border: '2px solid black', color:"black", margin: '10px', padding: "10px"}} to="/play">Let's Go!   </Link>

        </>
    )
}