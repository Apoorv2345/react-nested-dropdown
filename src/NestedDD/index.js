import React, { PureComponent } from 'react';
import {DDItems, SubDDItems} from "./DDItems";
import "./NestedDD.css";


export default class NestedDropdown extends PureComponent {

    state= {
        selectedItem:'',
        selectedSubItem:'',
        showList: false,
        metaTagList:[],
        items:[this.props.dropdownData]
    }

    /**
     * [componentDidMount lifecycle function]
     * @return {[type]} [description]
     */
    componentDidMount() {
        document.addEventListener('mousedown', (event)=>{this.handleClickOutside(event)});
    }
    
    /**
     * [componentWillUnmount lifecycle function]
     * @return {[type]} [description]
     */
    componentWillUnmount() {
        document.removeEventListener('mousedown', (event)=>{this.handleClickOutside(event)});
    }
    

    /**
     * [searchInDropdown search for item in list with corresponding key]
     * @param  {[type]} selId [description]
     * @return {[type]}       [description]
     */
    searchInDropdown(selId) {
        const {dropdownData, dropdownData:{length}}= this.props;

        for (let index = 0; index < length; index++) {
            const {id, subItems, subItems:{length}=[]} = dropdownData[index];
            if(id === selId) {
                return dropdownData[index];
            } else {
                if(subItems) {
                    for (let index = 0; index < length; index++) {
                        const {id} = subItems[index];
                        
                        if(id === selId) {
                            return subItems[index];
                        }
                    }
                }
            }
        }

        return {id:'', label:''};
    }

    /**
     * [handleClickOutside triggered whenever user performs a click, to close dropdown when clicked on outside area]
     * @param  {[type]} options.target [description]
     * @return {[type]}                [description]
     */
    handleClickOutside({target}) {
        if (this.refs.nestedDD && !this.refs.nestedDD.contains(target)) {
            // close dropdown
            this.closeDropdown();
          }
    }

    /**
     * [closeDropdown to close dropdown]
     * @return {[type]} [description]
     */
    closeDropdown() {
        this.setState({
            ...this.state,
            showList:false, 
        })
    }

    /**
     * [selectItem select item in the list & populate corresponding subItems]
     * @param  {[type]} selId [description]
     * @return {[type]}       [description]
     */
    selectItem(selId) {
        const {dropdownData}= this.props,
        // let selectedItem= this.searchInDropdown(selId);
        selectedItem= dropdownData.find(({id})=>{ return id === selId;});
        
        this.setState({
            ...this.state,
            selectedItem,
            subItems: [...selectedItem.subItems]
        });
    }

    /**
     * [selectSubItem select subitem in list]
     * @param  {[type]} selId [description]
     * @return {[type]}       [description]
     */
    selectSubItem=(selId)=> {
        const {subItems, metaTagList}= this.state,
        {onSelectCallBack}= this.props,
            selectedSubItem= subItems.find(({id})=>{return id===selId;});
        let itemAlreadyPresent;

            if(this.props.multiSelect) {
                itemAlreadyPresent= metaTagList.find(({id})=>{ return id===selId});
                
                // If Item not present then add it to the list
                !itemAlreadyPresent && this.setState({
                    ...this.state,
                    metaTagList:[...metaTagList, selectedSubItem]
                },()=>{
                    onSelectCallBack && onSelectCallBack(this.state.metaTagList)
                });
            } else {
                this.setState({
                    ...this.state,
                    selectedSubItem
                },()=>{
                    onSelectCallBack && onSelectCallBack(selectedSubItem);
                    this.closeDropdown();
            });
            }
    }

    /**
     * [clearSubItemList clear subitem list]
     * @return {[type]} [description]
     */
    clearSubItemList=()=>{
        this.setState({
            ...this.state,
            selectedItem:{},
            subItems:[]
        })
    }

    /**
     * [toggleList show/hide list]
     * @return {[type]} [description]
     */
    toggleList() {
        this.setState({
            ...this.state,
            showList: !this.state.showList
        })
    }

    /**
     * [openSubItemList open subitem list with corresponding id]
     * @param  {[type]} selId [description]
     * @return {[type]}       [description]
     */
    openSubItemList(selId){
        const {dropdownData}= this.props,
        selectedItem= dropdownData.find(({id})=>{ return id === selId;}),
        {subItems, subItems:{length}}= selectedItem;
        if(length>0) {
            this.setState({
                ...this.state,
                selectedItem,
                subItems: [...subItems]
            });
        }
    };

    /**
     * [deleteMetaTag remove meta tag corresponding to the item(Multiple select DD)]
     * @param  {[type]} selId [description]
     * @return {[type]}       [description]
     */
    deleteMetaTag=(selId)=> {
        const {metaTagList}= this.state,
        element= metaTagList.find(({id})=>{return id===selId;}),
        index= metaTagList.indexOf(element);
        if (index > -1) {
            metaTagList.splice(index, 1);
        };

        this.setState({
            ...this.state,
            metaTagList:[...metaTagList]
        });
    }


    /**
     * [render render function of Nested Dropdown ]
     * @return {[type]} [description]
     */
    render() {
        const {
            selectedSubItem:{label:selLabel="", id:selSubItemId}={},
            metaTagList=[], 
            metaTagList:{length}, 
            selectedItem:{id:selId, label:subItemsHeading}={}, 
            showList, 
            subItems=[],
            items=[],
        }= this.state,
        {multiSelect, checkboxes}= this.props;

        return <div className="nestedDD" ref="nestedDD">
            {multiSelect && <MetaTags metaTagList={metaTagList} deleteMetaTag={this.deleteMetaTag}/>}
            <div className="srchTxt" title={multiSelect? `${length} items`:selLabel} onClick={()=>{this.toggleList()}}>
                {multiSelect? `${length} items`:selLabel}
                {!selLabel && !multiSelect && `Select Sub Category`}
                <i className="ligature-icons icon srchIc icon_DownArrow"></i>
            </div>
            <div className={`items-group  ${(showList?'show':'hide')}`}>
            <DDItems {...{
                dropdownData:items[0], 
                selectItem: id=>{this.selectItem(id)}, 
                openSubItemList:id=>{this.openSubItemList(id)}, 
                checkboxes, 
                selId,
                multiSelect
                }} />
            {(subItems.length>0) && <SubDDItems {...{subItemsHeading, subItems, 
                selectSubItem: this.selectSubItem,
                clearSubItemList: this.clearSubItemList, 
                checkboxes,
                multiSelect,
                metaTagList,
                selSubItemId}}/>}
            </div>
            </div>
    }
}

/**
 * [MetaTags stateless component for rendering meta tags]
 * @param  {[type]} options.metaTagList   [description]
 * @param  {[type]} options.deleteMetaTag [description]
 * @return {[type]}                       [description]
 */
const MetaTags= ({metaTagList, deleteMetaTag })=>{
    return <ul className="cdList tags">
        {metaTagList.map(({label, id})=>{
            return <li title={label} key={id} className="meta-tag">
                <p>{label}</p>
                <a onClick={()=>{deleteMetaTag(id)}}><span>X</span></a>
            </li>;
        })}
    </ul>;
}
