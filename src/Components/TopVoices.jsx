import {useState} from 'react'

const TopVoices = () => {

    const [follow, setFollow] = useState(false)

    const handleClick = () => {
        setFollow(!follow)
    }
    
    return (
        <div className="group-div">
            <img className="user-img" src="https://media.licdn.com/dms/image/C4E03AQFGzKboo0ZmHA/profile-displayphoto-shrink_100_100/0/1572585145860?e=1683763200&v=beta&t=U3wYM9rg7oOyK3HNRgIuFazttZdISAq2oBovplme-mM"/>
            <div className="group-content">
                <div className="group-title">
                    <div className="group-name">Clement Mihailescu</div>
                    <img className="title-img" src="https://myclouddoor.com/wp-content/uploads/2019/11/Linkedin-logo.png"/>
                </div>
                <div className="user-headline">Co-Founder & CEO of AlgoExpert | Ex-Google & Ex-Facebook Software Engineer | LinkedIn Top Voice</div>
                <div className="group-followers">{follow ? '468,837 followers' : '468,836 followers'}</div>
                <button className="group-btn" onClick={handleClick}>{follow ? 'Following' : '+ Follow'}</button>
            </div>
        </div>
    )
}

export default TopVoices