import {useState} from 'react'

const Companies = () => {

    const [follow, setFollow] = useState(false)
    const [follow2, setFollow2] = useState(false)

    const handleClick = () => {
        setFollow(!follow)
    }

    const handleClick2 = () => {
        setFollow2(!follow2)
    }

    return (
        <>
        <div className="group-div">
            <div className="content-div">
                <img className="group-img" src="https://media.licdn.com/dms/image/C560BAQG-22OtXJPGpA/company-logo_100_100/0/1568751879393?e=1686182400&v=beta&t=PLEUp4q4nj6b5JOUVVTypSnVwo1ssurCJNzeo-ykL8Y"/>
                <div className="group-content">
                    <div className="group-title">Slack</div>
                    <div className="group-followers">{follow ? '1,229,647 followers' : '1,229,646 followers'}</div>
                    <button className="company-btn" onClick={handleClick}>{follow ? 'Following' : '+ Follow'}</button>
                </div>
            </div>
            <div className="content2-div">
                <img className="group-img" src="https://media.licdn.com/dms/image/C560BAQE88xCsONDULQ/company-logo_100_100/0/1618231291419?e=1686182400&v=beta&t=pjWer3NMH_eGx8Ot5KZkvIbP9ro5Jf-nMkWme6WAkL0"/>
                <div className="group-content">
                    <div className="group-title">Microsoft</div>
                    <div className="group-followers">{follow2 ? '19,127,254 followers' : '19,127,253 followers'}</div>
                    <button className="company-btn2" onClick={handleClick2}>{follow2 ? 'Following' : '+ Follow'}</button>
                </div>
            </div>
        </div>
        <div className="show-all-div">Show all 30 companies &#8594;</div>
        </>
    )
}

export default Companies