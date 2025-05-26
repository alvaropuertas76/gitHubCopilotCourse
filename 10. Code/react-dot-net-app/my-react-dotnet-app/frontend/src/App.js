import React from 'react';
import './App.css';
import ExampleComponent from './components/ExampleComponent';

/**
 * Main application component.
 * Renders the header and main content area, including ExampleComponent.
 */
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to My React and .NET App</h1>
            </header>
            <main>
                <ExampleComponent />
            </main>
        </div>
    );
}

export default App;