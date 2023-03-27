import { useState } from "react"

const Groups = () => {

    const [join, setJoin] = useState(false)
    const [join2, setJoin2] = useState(false)

    const handleClick = () => {
        setJoin(!join)
    }

    const handleClick2 = () => {
        setJoin2(!join2)
    }

    return (
        <>
        <div className="group-div">
            <div className="content-div">
                <img className="group-img" src="https://media.licdn.com/dms/image/C4E07AQEaHEKoGE1wyQ/group-logo_image-shrink_48x48/0/1631371035400?e=1678834800&v=beta&t=VmYvz0e0eVRY9kXW7CCy3LB3f-uF-ECNLjwMaJ9mb3k"/>
                <div className="group-content">
                    <div className="group-title">Internship, Apprenticeship, Summer Training and Winter Training Opportunities around the Globe :-)</div>
                    <div className="group-followers">{join ? '39,814 members' : '39,813 members'}</div>
                    <button className="join-btn" onClick={handleClick}>{join ? 'Joined' : 'Join'}</button>
                </div>
            </div>
            <div className="group2-div">
                <img className="group-img" src="https://media.licdn.com/dms/image/D4E07AQHTWNjGyymQfQ/group-logo_image-shrink_48x48/0/1667775659973?e=1678834800&v=beta&t=N13Sj07Zd8BpCppFrspSoXegcnpYYSvm44RAbmdW2s8"/>
                <div className="group-content">
                    <div className="group-title">Developers, Engineers & Techies: Solidity, Rust, C++, C#, Python, Java, Javascript | Blockchain</div>
                    <div className="group-followers">{join2 ? '313,238 members' : '313,237 members'}</div>
                    <button className="join-btn2" onClick={handleClick2}>{join2 ? 'Joined' : 'Join'}</button>
                </div>
            </div>
        </div>
        <div className="show-all-div">Show all 4 groups &#8594;</div>
        </>
    )
}

export default Groups