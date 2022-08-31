import React from "react";
import ReactPlayer from 'react-player'
import styles from "../styles/videoplayer.module.css";

// HARDCODED LIST VIDEO, EXAMPLE FOR API RESPONSE OF VIDEO LIST
const ListVideo = {
    video1: {
        src: "https://cdn.videvo.net/videvo_files/video/free/video0454/large_watermarked/_import_6064a2d0ec2a62.28720221_preview.mp4",
        poster: "https://asset.kompas.com/crops/TjobwbVW8-KhRNy9ubgt9B-hml4=/93x46:658x423/750x500/data/photo/2021/08/23/612338d56e686.jpg"
    },
    video2: {
        src: "https://cdn.videvo.net/videvo_files/video/premium/getty_35/large_watermarked/istock-944723002_preview.mp4",
        poster: "https://img.okezone.com/content/2020/11/09/408/2306495/5-wisata-pantai-di-sukabumi-mana-favoritmu-Tm2zNfa3Lo.jpg"
    }
}

const VisualPlayer = () => {
    const [hasMounted, setHasMounted] = React.useState(false);
    const [video, setVideo] = React.useState(ListVideo.video1);
    const [isPlaying, setIsPlaying] = React.useState(false);

    React.useEffect(() => {
        setHasMounted(true);
        return (() => {
            setHasMounted(false);
        })
    }, []);

    return (
        <div className={styles.pageContainer}>
            <div className={styles.frame}>
                {
                    hasMounted ? (
                        <ReactPlayer
                            url={video.src}
                            playing={isPlaying}
                            light={video.poster}
                            width={"400px"}
                            height={"300px"}
                            onClickPreview={() => setIsPlaying(!isPlaying)}
                            pip={true}
                        />
                    ) : (
                        null
                    )
                }
                <div>
                    I am new version
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.buttonStyle} onClick={() => setIsPlaying(true)}>
                        Play
                    </button>
                    <button className={styles.buttonStyle} onClick={() => setIsPlaying(false)}>
                        Stop
                    </button>
                </div>
            </div>
        </div>
    )
}

export default VisualPlayer;