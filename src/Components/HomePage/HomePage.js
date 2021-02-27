import React, { Component } from 'react';
import Tabs from './Tabs/Tabs';
import './HomePage.css';
import { 
    appMsg, 
    catalogMsg,
    messierMsg,
    astroMsg,
    wikiLinkCatalog,
    wikiLinkMessier,
    astroLeague,
    gitHubRepo,
    resourceMsg,
} from './Tabs/TabContent';

export default class HomePage extends Component {

    newLineText = (props) => {
        const newText = props.split('\n').map(str => <p>{str}</p>);

        return newText;
    }
    render() {
        return (
            <main className='home'>
                <Tabs>
                    <section label='Messier Observer'>
                        {this.newLineText(appMsg)}
                    </section>
                    <section label='Messier Catalog'>
                        {this.newLineText(catalogMsg)}
                    </section>
                    <section label='Charles Messier'>
                        {this.newLineText(messierMsg)}
                    </section>
                    <section label='Astronomical League'>
                        {this.newLineText(astroMsg)}
                    </section>
                    <p label='Resources' className='resourceLinks'>
                        Wiki: {wikiLinkCatalog}<br></br>
                        Wiki: {wikiLinkMessier}<br></br>
                        More Info: {astroLeague}<br></br>
                        Technical Bits: {gitHubRepo}
                    </p>
                </Tabs>

            </main>
        )
    }
}
