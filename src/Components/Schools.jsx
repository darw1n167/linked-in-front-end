import { useState } from "react"

const Schools = () => {

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
                <img className="group-img" src="https://media.licdn.com/dms/image/C560BAQHrP1umKnHBrg/company-logo_100_100/0/1671479990719?e=1686182400&v=beta&t=5jeIXL_CmoBmcRxzox-BF2lv5PBQeQr__iC1xU4ZKQU"/>
                <div className="group-content">
                    <div className="group-title">Hack Reactor</div>
                    <div className="group-followers">{follow ? '24,782 followers' : '24,781 followers'}</div>
                    <button className="school-btn" onClick={handleClick}>{follow ? 'Following' : '+ Follow'}</button>
                </div>
            </div>
            <div className="school-div">
                <img className="group-img" src="https://media.licdn.com/dms/image/C560BAQFKNxOZ4X0g8Q/company-logo_100_100/0/1670610916338?e=1686182400&v=beta&t=xVibPYIeMo9ioMrLZ6IaktH1Y3cyyIX32ZRHGTx7Ju8"/>
                <div className="group-content">
                    <div className="group-title">Galvanize</div>
                    <div className="group-followers">{follow2 ? '18,751 followers' : '18,750 followers'}</div>
                    <button className="school-btn" onClick={handleClick2}>{follow2 ? 'Following' : '+ Follow'}</button>
                </div>
            </div>
        </div>
        <div className="show-all-div">Show all 3 schools &#8594;</div>
        </>
    )
}

export default Schools