import "/src/styles/video_block.css"

export default function VideoBlock() {
    return (
        <div className={"video-block"}>
            <p className={"video-article"}>Ты трудолюбивый кисик, который устал сидеть на шее своего двуногого и хочешь сам обеспечивать себя вкусным рыбовым? Мы поможем тебе найти подработку и начать свою карьеру!</p>
            <video className={"player"} autoPlay={true} disablePictureInPicture={true} loop={true}>
                <source src={"/video.mp4"} type={"video/mp4"}/>
            </video>
        </div>
    );
}