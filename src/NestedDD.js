import React, { PureComponent } from 'react';
import {DDItems, SubDDItems} from "./DDItems.js";
import "./NestedDD.css";

export default class NestedDropdown extends PureComponent {

    state= {
        selectedItem:'',
        selectedSubItem:'',
        showList: false,
        metaTagList:[],
        subItems:[]
    }

    componentDidMount() {
        document.addEventListener('mousedown', (event)=>{this.handleClickOutside(event)});
      }
    
      componentWillUnmount() {
        document.removeEventListener('mousedown', (event)=>{this.handleClickOutside(event)});
      }
    

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

    handleClickOutside({target}) {
        if (this.refs.nestedDD && !this.refs.nestedDD.contains(target)) {
            // close dropdown
            this.closeDropdown();
          }
    }

    closeDropdown() {
        this.setState({
            ...this.state,
            showList:false, 
        })
    }

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

    selectSubItem=(selId)=> {
        const {subItems, metaTagList}= this.state,
            selectedSubItem= subItems.find(({id})=>{return id===selId;});
        let itemAlreadyPresent;

            if(this.props.multiSelect) {
                itemAlreadyPresent= metaTagList.find(({id})=>{ return id===selId});
                
                // If Item not present then add it to the list
                !itemAlreadyPresent && this.setState({
                    ...this.state,
                    metaTagList:[...metaTagList, selectedSubItem]
                },()=>{
                    this.props.onSelectCallBack(this.state.metaTagList)
                });
            } else {
                this.setState({
                    ...this.state,
                    selectedSubItem
                },()=>{
                this.props.onSelectCallBack(selectedSubItem)
            });
            }
    }

    clearSubItemList=()=>{
        this.setState({
            ...this.state,
            selectedItem:{},
            subItems:[]
        })
    }

    toggleList() {
        this.setState({
            ...this.state,
            showList: !this.state.showList
        })
    }

    handleInputChange=({target:{value}})=>{
        this.setState({
            ...this.state,
            selLabel: value
        })
    }

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

    render() {
        const {
            selectedSubItem:{label:selLabel}={},
            metaTagList=[], 
            selectedItem:{id:selId, label:subItemsHeading}={}, 
            showList, 
            subItems=[],
        }= this.state,
        {dropdownData, multiSelect, checkboxes}= this.props;

        return <div className="nestedDD" ref="nestedDD">
            <div className="srchTxt" onClick={()=>{this.toggleList()}}>
                {multiSelect? metaTagList.map(({label, id})=>{
                    return <MetaTag label={label} key={id} />
                }) :selLabel}
            </div>
            <div className={`items-group  ${(showList?'show':'hide')}`}>
            <DDItems {...{
                dropdownData, 
                selectItem: id=>{this.selectItem(id)}, 
                openSubItemList:id=>{this.openSubItemList(id)}, 
                checkboxes, 
                selId
                }} />
            {(subItems.length>0) && <SubDDItems {...{subItemsHeading, subItems, 
                selectSubItem: this.selectSubItem,
                clearSubItemList: this.clearSubItemList, 
                checkboxes}}/>}
            </div>
            </div>
    }
}

const MetaTag= ({label, deleteTag })=>{
    return <div>{label} <span className="cnlRsec" onClick={deleteTag} >X</span></div>
}
