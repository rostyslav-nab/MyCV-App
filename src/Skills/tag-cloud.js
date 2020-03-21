import React, { Component } from 'react';
import randomColor from 'randomcolor';
import TagCloud from 'react-tag-cloud';
import CloudItem from './CloudItem';

const styles = {
    large: {
        fontSize: 60,
        fontWeight: 'bold'
    },
    small: {
        opacity: 0.7,
        fontSize: 16
    }
};
class MyCloud extends Component {
    componentDidMount() {
        setInterval(() => {
            this.forceUpdate();
        }, 3000);
    }

    render() {
        return (
            <div className='app-outer'>
                <div className='app-inner'>
                    <TagCloud
                        className='tag-cloud'
                        style={{
                            fontFamily: 'sans-serif',
                            //fontSize: () => Math.round(Math.random() * 50) + 16,
                            fontSize: 20,
                            color: () => randomColor({
                                hue: 'blue'
                            }),
                            padding: 5,
                        }}>
                        <div
                            style={{
                                fontFamily: 'serif',
                                fontSize: 30,
                                fontStyle: 'italic',
                                fontWeight: 'bold',
                                color: randomColor()
                            }}>React</div>
                        <CloudItem text="JavaScript" />
                        <CloudItem text="GIT" />
                        <div style={styles.large}>React</div>
                        <div style={styles.large}>CSS3</div>
                        <div style={styles.large}>Redux</div>
                        <div style={styles.large}>JSX</div>
                        <div style={{ fontFamily: 'courier' }}>Bootstrap</div>
                        <div style={{ fontSize: 20 }}>Node.js</div>
                        <div style={{ fontStyle: 'italic' }}>WebPack</div>
                        <div style={{ fontWeight: 200 }}>npm</div>
                        <div style={{ color: 'green' }}>AJAX</div>
                        <div className="tag-item-wrapper">
                        </div>
                        <div>HTML5</div>
                        <div>GitHub</div>
                        <div>SCSS</div>
                        <div>SPA</div>
                        <div>OOP</div>
                        <div>SASS</div>
                        <div>HTML5</div>
                        <div>CSS3</div>
                        <div style={styles.small}>WebPack</div>
                        <div style={styles.small}>Node.js</div>
                        <div style={styles.small}>npm</div>
                    </TagCloud>
                </div>
            </div>
        );
    }
}
export default MyCloud;