import React from 'react';
import styles from './styles.module.scss';

export default class KamePlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stopped: true,
            progress: 0,
            mute: false,
            volume: 0,
            fullscreen: false 
        }
    }

    render() {
        return (
            <div className={styles.videoContainer}>
                <video className={styles.video} preload="auto" poster={(this.props.poster) ? this.props.poster : ""}> 
                    {(this.props.sources) ? 
                    this.props.sources.map((source) => {
                        return <source src={source.src} type={source.type} key={source.src}/>
                    }) : null}
                    {
                        (this.props.download) ?
                        <a href={this.props.download}>Download</a> 
                        : null
                    }

           
                </video>
                <div className={styles.videoControls}>
                    {(this.state.stopped) ? 
                    <button className={`${styles.videoControl} ${styles.videoPlay}`}>Play</button> 
                    :
                    <button className={`${styles.videoControl} ${styles.videoPause}`}>Pause</button>
                    }
                </div>
                
            </div>
        )
    }
}