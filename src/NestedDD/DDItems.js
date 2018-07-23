import React from 'react';


export const DDItems = ({ dropdownData, selectItem, openSubItemList, checkboxes, selId }) => {
    return <ul className={`items`}>
        {dropdownData.map(({ id, label }) => {
            if (selId === id) {
                return <Item className={'item active'} id={id} key={id} title={label} itemChbk={checkboxes} selectItem={() => { selectItem(id) }} openSubItemList={() => { openSubItemList(id) }}></Item>;
            } else {
                return <Item className={'item'} id={id} key={id} title={label} itemChbk={checkboxes} selectItem={() => { selectItem(id) }} openSubItemList={() => { openSubItemList(id) }}></Item>;
            }
        })}
    </ul>
}

const Item = ({ title, selectItem, openSubItemList, children, className, itemChbk, id, checkBoxClassName = "", status }) => {
    return <li className={className} onClick={openSubItemList} title={title}>
        {itemChbk && <Checkbox className={checkBoxClassName} status={status} selectItem={selectItem} />}
        <a>
            <label>{title}</label>
        </a>
        {children}
    </li>
}


export const SubDDItems = ({ 
    subItemsHeading, 
    subItems, 
    selectSubItem, 
    checkboxes, 
    clearSubItemList,
    selSubItemId }) => {
    return <div className="subItems-cnt">
        <span className="cnlRsec" onClick={clearSubItemList} >X</span>
        <h4>{subItemsHeading}</h4>
        <ul className="subItems">
            {subItems.map(({ id, label }) => {
                return <SubItem className={`item ${selSubItemId == id ? 'active' : ''}`} id={id} key={id} title={label} selectItem={()=>{selectSubItem(id)}} itemChbk={checkboxes}/>;
            })}
        </ul>
    </div>;
}



const SubItem = ({title, selectItem, children, className, itemChbk, id, checkBoxClassName="", status="" }) => {
    return <li className={className} onClick={selectItem} title={title}>
                {itemChbk && <Checkbox className={checkBoxClassName} status={status} selectItem={selectItem}/>}
                <a>
                    <label>{title}</label>
                </a>
                {children}
            </li>
}

const Checkbox= ({className, status, selectItem})=>{
    return <span className={`itemChbk ${className} ${status}`} onClick={selectItem}></span>
}
