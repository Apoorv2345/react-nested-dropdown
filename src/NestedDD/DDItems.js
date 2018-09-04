import React from 'react';

/**
 * [DDItems stateless component for dropdown items]
 * @param  {[type]} options.dropdownData    [description]
 * @param  {[type]} options.selectItem      [description]
 * @param  {[type]} options.openSubItemList [description]
 * @param  {[type]} options.checkboxes      [description]
 * @param  {[type]} options.selId           [description]
 * @return {[type]}                         [description]
 */
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

/**
 * [Item stateless component for item]
 * @param  {[type]} options.title             [description]
 * @param  {[type]} options.selectItem        [description]
 * @param  {[type]} options.openSubItemList   [description]
 * @param  {[type]} options.children          [description]
 * @param  {[type]} options.className         [description]
 * @param  {[type]} options.itemChbk          [description]
 * @param  {[type]} options.id                [description]
 * @param  {String} options.checkBoxClassName [description]
 * @param  {[type]} options.status            [description]
 * @return {[type]}                           [description]
 */
const Item = ({ title, selectItem, openSubItemList, children, className, itemChbk, id, checkBoxClassName = "", status }) => {
    return <li className={className} onClick={openSubItemList} title={title}>
        {itemChbk && <Checkbox className={checkBoxClassName} status={status} selectItem={selectItem} />}
        <a>
            <label>{title}</label>
        </a>
        {children}
    </li>
}

/**
 * [SubDDItems stateless component for subItems]
 * @param  {[type]} options.subItemsHeading  [description]
 * @param  {[type]} options.subItems         [description]
 * @param  {[type]} options.selectSubItem    [description]
 * @param  {[type]} options.checkboxes       [description]
 * @param  {[type]} options.clearSubItemList [description]
 * @param  {[type]} options.multiSelect      [description]
 * @param  {Array}  options.metaTagList      [description]
 * @param  {[type]} options.selSubItemId     [description]
 * @return {[type]}                          [description]
 */
export const SubDDItems = ({ 
    subItemsHeading, 
    subItems, 
    selectSubItem, 
    checkboxes, 
    clearSubItemList,
    multiSelect,
    metaTagList=[],
    selSubItemId }) => {
    return <div className="subItems-cnt">
        <span className="cnlRsec" onClick={clearSubItemList} >X</span>
        <h4>{subItemsHeading}</h4>
        <ul className="subItems">
            {!multiSelect && subItems.map(({ id, label }) => {
                return <SubItem className={`item ${selSubItemId === id ? 'active' : ''}`} id={id} key={id} title={label} selectItem={()=>{selectSubItem(id)}} itemChbk={checkboxes}/>;
            })}

            {multiSelect && subItems.map(({ id, label }) => {
                return <SubItem className={`item`} id={id} key={id} title={label} selectItem={()=>{selectSubItem(id)}} metaTagList={metaTagList} multiSelect itemChbk={checkboxes}/>;
            })}
        </ul>
    </div>;
}


/**
 * [SubItem stateless component for sub-item]
 * @param  {[type]} options.title             [description]
 * @param  {[type]} options.selectItem        [description]
 * @param  {[type]} options.children          [description]
 * @param  {[type]} options.className         [description]
 * @param  {[type]} options.itemChbk          [description]
 * @param  {[type]} options.id                [description]
 * @param  {String} options.checkBoxClassName [description]
 * @param  {String} options.status            [description]
 * @param  {Array}  options.metaTagList       [description]
 * @param  {[type]} options.multiSelect       [description]
 * @return {[type]}                           [description]
 */
const SubItem = ({title, selectItem, children, className, itemChbk, id, checkBoxClassName="", status="", metaTagList=[], multiSelect }) => {
    if(multiSelect) {
        let isActive= metaTagList.find(({id:selId})=>{
            return selId===id;
        })

        if(isActive) {
            className+=' active';
            status='checked';
        }
    }
    return <li className={className} onClick={selectItem} title={title}>
                {itemChbk && <Checkbox className={checkBoxClassName} status={status} selectItem={selectItem}/>}
                <a>
                    <label>{title}</label>
                </a>
                {children}
            </li>
}

/**
 * [Checkbox stateless component for checkbox]
 * @param  {[type]} options.className  [description]
 * @param  {[type]} options.status     [description]
 * @param  {[type]} options.selectItem [description]
 * @return {[type]}                    [description]
 */
const Checkbox= ({className, status, selectItem})=>{
    return <span className={`itemChbk ${className} ${status}`} onClick={selectItem}></span>
}
