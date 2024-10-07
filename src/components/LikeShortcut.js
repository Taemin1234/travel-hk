import React, { useState } from 'react';
import * as TH from '../style/style';

function LikeShortcut({likeLeng}) {
    const [likes, setLikes] = useState(likeLeng.length)

    const handleHeartClick = (e) => {
        const like = e.target.checked

        if(like) {
            setLikes(prevLikes => prevLikes + 1)
        } else {
            setLikes(prevLikes => prevLikes - 1)
        }
    }

    return (
        <TH.LikeShortcutWrap>
            <TH.LikeBtn>
                <input type="checkbox" onChange={handleHeartClick}/>
                <span className='icon'>좋아요</span>
            </TH.LikeBtn>
            <TH.LikeCount>
                {likes}
            </TH.LikeCount>
        </TH.LikeShortcutWrap>
    )
}

export default LikeShortcut