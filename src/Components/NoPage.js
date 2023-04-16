export default function NoPage() {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-[500px] h-[500px]">
                <div style={{width:'100%', height:0, paddingBottom:'100%', position: 'relative'}}>
                    <iframe src="https://giphy.com/embed/9J7tdYltWyXIY" title="gif" width="100%" height="100%" style={{position: 'absolute'}} frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
}