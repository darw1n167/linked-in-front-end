import './Interests.css'
import { useState } from 'react'
import TopVoices from './TopVoices'
import Companies from './Companies'
import Groups from './Groups'
import Schools from './Schools'

const Interests = () => {

    const [activeTab, setActiveTab] = useState('Top Voices')

    const topVoicesClick = () => {
        setActiveTab('Top Voices')
    }

    const companiesClick = () => {
        setActiveTab('Companies')
    }

    const groupsClick = () => {
        setActiveTab('Groups')
    }

    const schoolsClick = () => {
        setActiveTab('Schools')
    }

    return (
        <div className='component Interests-div'>
            <div className='Interests-title'>Interests</div>
                <div className='Interests-tabs'>
                    <div style={activeTab === 'Top Voices' ? {color: 'green', borderBottom: '2px solid green'} : {color: 'rgb(106, 106, 106)', borderBottom: 'transparent'}} className='tab-item1' onClick={topVoicesClick}>Top Voices</div>
                    <div style={activeTab === 'Companies' ? {color: 'green', borderBottom: '2px solid green'} : {color: 'rgb(106, 106, 106)', borderBottom: 'transparent'}} className='tab-item' onClick={companiesClick}>Companies</div>
                    <div style={activeTab === 'Groups' ? {color: 'green', borderBottom: '2px solid green'} : {color: 'rgb(106, 106, 106)', borderBottom: 'transparent'}} className='tab-item' onClick={groupsClick}>Groups</div>
                    <div style={activeTab === 'Schools' ? {color: 'green', borderBottom: '2px solid green'} : {color: 'rgb(106, 106, 106)', borderBottom: 'transparent'}} className='tab-item' onClick={schoolsClick}>Schools</div>
                </div>
            <div className='outlet'>
                {activeTab === 'Top Voices' ? <TopVoices />
                : activeTab === 'Companies' ? <Companies />
                : activeTab === 'Groups' ? <Groups />
                : activeTab === 'Schools' ? <Schools />
                : <TopVoices />}
                
            </div>
        </div>
    )
}

export default Interests