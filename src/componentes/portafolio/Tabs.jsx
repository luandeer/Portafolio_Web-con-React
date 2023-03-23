import React from 'react'
import { useState } from 'react'
import ItemsTab1 from './ItemsTab1'
import ItemsTab2 from './ItemsTab2'
import ItemsTab3 from './ItemsTab3'
const Tabs = () => {
    const [currentTab, setCurrentTab] = useState(1);

    const tabs = [
        {
            id: 1,
            tabTitle: 'Todos',
            title: 'Html5 | Css3 | JavaScript | React Js | Next Js | Node Js',
            content: <ItemsTab1/>
        },
        {
            id: 2,
            tabTitle: 'Frontend',
            title: 'Html5 | Css3 | JavaScript | React Js | Next Js',
            content: <ItemsTab2/>
        },
        {
            id: 3,
            tabTitle: 'Backend',
            title: 'Node Js | JavaScript',
            content: <ItemsTab3/>
        }
    ]

    const handleTabClick = (e) => {
        setCurrentTab(parseInt(e.target.id));
    }

    return (
        <> 
        <div className="container-tabs">
            <div className="tabs">
                {tabs.map((tab, i) =>
                    <button key={i} id={tab.id} disabled={currentTab === tab.id} onClick={(handleTabClick)}>
                        {tab.tabTitle}
                    </button>
                )}
            </div>
            <div className="content-tabs">
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === tab.id &&
                            <div className="content-tabs-text">
                                <p className="content-tabs-text_1">{tab.title}</p> 
                                <p>{tab.content}</p>
                            </div>
                        }
                    </div>
                )}
            </div>
        </div>
        </>
    )
}

export default Tabs