import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Navbar from './Navbar';
import NewArtifact from './NewArtifact';
import HomeContent from './HomeContent';
import Artifact from './Artifact'
import Objects from './Objects'
import Timelines from './Timeline'
import ArtifactNav from './ArtifactNav'
import Homepage from './Homepage'


const App = () => {
    return (
        <div>
            {/* Only one child in a router */}
            <BrowserRouter>
                <div>
                    {/* Use exact keyword to provide strict path*/}
                    <Navbar />
                    <Route exact path = "/" component={Homepage}/>
                    <Route exact path = "/timeline" component={Timelines}/>
                    <Route path = "/artifacts" component = {ArtifactNav}/>
                    <Route exact path = "/artifacts" component = {Artifact}/>
                    <Route exact path = "/artifacts/photos" component = {Artifact}/>
                    <Route exact path = "/artifacts/letters" component = {Artifact}/>
                    <Route exact path = "/artifacts/objects" component = {Objects}/>
                    <Route path = "/artifacts/new" component = {NewArtifact}/>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;





