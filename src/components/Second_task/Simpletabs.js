import React, { useRef, useEffect, useState } from "react";

import {
    TabHeaderContainer,
    StylizedTab,
    StyledTabPanel,
    TabsHolder,
    inactiveTab,
    TabSlider
  } from "./style.js";

export const Tab = ({label, active, onClick}) =>{
    return (
        <StylizedTab 
            role="tab"
            active={active}
            onClick={onClick}
            inactiveStyle = {inactiveTab}
        >
            {label}
        </StylizedTab>
    )
}
export const Tabs = ({selectedTab, onChange, children}) =>{
    const containerRef = useRef(null)
    const [containerWidth, setContainerWidth] = useState(0)
    useEffect(() => {
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
    }, [containerRef])
    
    const sliderWidth = containerWidth / children.length;
    const tabs = children.map(child => {
        const handleClick = (e) => {
            onChange(e, child.props.value);
        }
        return React.cloneElement(child, {
            key: child.props.value,
            active: child.props.value === selectedTab,
            onClick: handleClick
        });
    })
    return (
        <TabHeaderContainer ref={containerRef} >
            <TabsHolder>{tabs}</TabsHolder>
            <TabSlider width={sliderWidth} index={selectedTab} />
        </TabHeaderContainer>
    )
    
}
export const TabPanel = ({children, value, selectedIndex}) =>{
    const hidden = value !== selectedIndex;
    return (
        <StyledTabPanel hidden={hidden} active={!hidden} > 
            {children}
        </StyledTabPanel>
    )
}







