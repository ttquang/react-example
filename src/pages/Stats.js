import {Navigate} from 'react-router-dom';

export function Stats({user}) {

    if (!user.username) {
        return (
            <Navigate to="/login" replace/>
        );
    }

    return (
        <div style={{padding: 20}}>
            <h2>Stats View</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
        </div>
    );
}
