import React from 'react'
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LineShareButton, LineIcon} from 'react-share';

const ShareButton = (props) => {
    return (
        <div>
            <FacebookShareButton url={[props.url]} className="mr-2 transform hover:-translate-y-2 transition duration-700" quote={props.title}>
                <FacebookIcon size={32} round/>
            </FacebookShareButton>
            <TwitterShareButton url={[props.url]} className="mr-2 transform hover:-translate-y-2 transition duration-700" title={props.title}>
                <TwitterIcon size={32} round/>
            </TwitterShareButton>
            <LineShareButton url={[props.url]} className="mr-2 transform hover:-translate-y-2 transition duration-700">
                <LineIcon size={32} round />
            </LineShareButton>
        </div>
    )
}

export default ShareButton
