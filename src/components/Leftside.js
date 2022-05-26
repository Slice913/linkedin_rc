import React from 'react';
import styled from 'styled-components';

const LeftSide = (props) => {
  return (
    <Container>
       <ArtCard>
           <UserInfo>
               <CardBackgound/>
               <a>
                 <Photo/>
                 <Link>Welcome, there!</Link>
               </a>
               <a>
                 <AddPhotoText>Add a Photo</AddPhotoText>
               </a>
           </UserInfo>
           <Widget>
               <a>
                 <div>
                   <span>Connections</span>
                   <span>Grow your Network</span>
                 </div> 
                 <img src="/images/widget-icon.svg" alt="" />
               </a>
           </Widget>
           <Item>
               <span>
                   <span>
                     <img src="/images/item-icon.svg"/>
                     My Items
                   </span>
               </span>
           </Item>
       </ArtCard>
       <CommunityCard>
           <a>
             <span>Groups</span>
           </a>
           <a>
             <span>
               Events 
               <img src="/images/plus-icon.svg" alt="" />
             </span>
           </a>
           <a>
             <span>Follow Hashtags</span>
           </a>
           <a>
             <span>Discover more</span>
           </a>
       </CommunityCard>
    </Container>
  )
}

export default LeftSide

 
const Container = styled.div`
    grid-area: leftside;
`

const ArtCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    transition: box-shawdow 83ms;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb( 0 0 0 / 20%);
`

const UserInfo = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding: 12px 12px 16px;
    word-wrap: break-word;
    word-break: break-word;


`

const CardBackgound = styled.div`
    background: url('/images/card-bg.svg');
    background-position: center;
    background-size: 462px;
    height: 54px;
    margin: -12px -12px 0;
`

const Photo = styled.div`
    box-shadow: none;
    background-image: url('/images/photo.svg');
    width: 72px;
    height: 72px;
    box-sizing: border-box;
    background-clip: content-box;
    background-color: white;
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
    border: 2px solid white;
    margin: -30px auto 12px;
    border-radius: 50%;
`

const Link = styled.div`
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.9);
    font-weight: 600;
`

const AddPhotoText = styled.div`
    color: #0a66c2;
    margin-top: 4px;
    font-size: 12px;
    line-height: 1.33;
    font-weight: 400;
`

const Widget = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding-top: 12px;
    padding-bottom: 12px;

    & > a {
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 12px;

        &:hover {
            background-color: rgba(0, 0, 0, 0.08);
        }
    }

    div {
        display: flex;
        flex-direction: column;
        text-align: left;
        span {
            font-size: 12px;
            line-height: 1.333;
            &:first-child {
                color: rgba(0, 0, 0, 0.6);
            }
            &:nth-child(2) {
                color: rgba(0, 0, 0, 0, 1);
            }
        }
    }

    img {
        color: rgba(0, 0, 0, 0, 1);
    }
`

const Item = styled.a`
    border-color: rgba(0, 0, 0, 0.8);
    text-align: left;
    padding: 12px;
    font-size: 12px;
    display: block;
    span {
      display: flex;
      align-items: center;
      color: rgba(0, 0, 0, 1);
        img {
          color: rgba(0, 0, 0, 0.6)
      }
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
        transition-duration: 167ms;
    }
        

`
const CommunityCard = styled(ArtCard)`
    padding: 8px 0 0;
    text-align: left;
    display: flex;
    flex-direction: column;
    a {
        color: black;
        padding: 4px 12px 4px 12px;
        font-size: 12px;

        &:hover {
            color: #0a66c2;
        }

        span {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        &:last-child{
            color: rgba(0, 0, 0, 0.6);
            text-decoration: none;

            border-top: 1px solid #d6cec2;
            padding: 12px;
            &:hover {
                background-color: rgba(0, 0, 0, 0.08);
                // * TS 2:33:42
            }
        }
    }
`

const Leftside = styled.div``