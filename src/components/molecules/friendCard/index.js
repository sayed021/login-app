import React from 'react';
import styled from "styled-components";
import { numberWithCommas } from '../../../services/global';

export const FriendCardHeader = styled.div `
    margin-bottom: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .fluid {
        &.label {
            color: #eee;
        }
        width: 100%;
    }
`
export const TotalFriendLabel = styled.div `
    text-align: left;
    margin-bottom: 15px;
`
export const FriendCardItems = styled.div `
    display: flex;
    flex-wrap: wrap;
    margin-left: -10px;
    margin-right: -10px;
`
export const FriendCardItem = styled.div `
    width: calc((100% / 3) - 20px);
    margin: 10px;
    margin-bottom: 5px;
    img {
        border-radius: 6px;
    }
    h5 {
        margin: 0;
        text-align: left;
        a {
            text-decoration: none;
            color: inherit;
            &:hover {
                text-decoration: underline;
            }
        }
    }
`
export const FriendCardWrapper = styled.div `
    padding: 15px;

    h4 {
        font-size: 20px;
        letter-spacing: 0.5px;
        margin: 0;
        a {
            text-decoration: none;
            color: inherit;
            &:hover {
                text-decoration: underline;
            }
        }
    }
`

const FriendCard = props => {
    const {
        priendPageLink, 
        linkLabel, 
        title,
        totalFriends,
        friends
    } = props;

    return (
        <FriendCardWrapper>
            <FriendCardHeader>
                <div>
                   {title?<h4><a href={priendPageLink||'#'}>{title||'no title'}</a></h4>:''} 
                </div>
                <div>
                    <a href={priendPageLink||'#'}>{linkLabel||"See All Friends"}</a>
                </div>
                <div className='fluid'>
                    <TotalFriendLabel>{numberWithCommas(totalFriends)||0} friends</TotalFriendLabel>
                </div>
            </FriendCardHeader>

            <FriendCardItems>
                {(friends||[]).length ? (
                    (friends||[]).map(friend=>{
                        return (
                          <FriendCardItem key={friend.id}>
                              <div>
                                  <a href={priendPageLink||'#'}>
                                    <img src={friend.profilePicUrl||''} />
                                  </a>
                              </div>
                              <div>
                                  <h5>
                                      <a href={priendPageLink||'#'}>{friend.name||'no name'}</a>
                                  </h5>
                              </div>
                          </FriendCardItem>  
                        )
                    })
                ):'No Friends'}
            </FriendCardItems>
                        
        </FriendCardWrapper>
    );
}

export default FriendCard;
