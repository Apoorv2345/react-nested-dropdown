import React, { PureComponent } from 'react';
import {DDItems, SubDDItems} from "./DDItems";
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

    render() {
        const {
            selectedSubItem:{label:selLabel}={},
            metaTagList=[], 
            metaTagList:{length}, 
            selectedItem:{id:selId, label:subItemsHeading}={}, 
            showList, 
            subItems=[],
        }= this.state,
        {dropdownData, multiSelect, checkboxes}= this.props;

        return <div className="nestedDD" ref="nestedDD">
            {multiSelect && <MetaTags metaTagList={metaTagList} deleteMetaTag={this.deleteMetaTag}/>}
            <div className="srchTxt" onClick={()=>{this.toggleList()}}>
                {multiSelect? `${length} items`:selLabel}
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

const MetaTags= ({metaTagList, deleteMetaTag })=>{
    return <ul className="cdList tags">
        {metaTagList.map(({label, id})=>{
            return <li title={label} key={id} className="meta-tag">
                <p>{label}</p>
                <a onClick={()=>{deleteMetaTag(id)}}><span>X</span></a>
            </li>;
        })}
    </ul>;

    // return metaTagList.map(({label, id})=>{
    //     return <div className="meta-tag" key={id} title={label}>{label} <span className="cnlRsec" onClick={()=>{deleteMetaTag(id)}} >X</span></div>
    // })
    // return <div>{label} <span className="cnlRsec" onClick={deleteMetaTag} >X</span></div>
}
