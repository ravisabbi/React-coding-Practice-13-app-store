// Write your code here

import './index.css'

const TabItem = pops => {
  const {tabDetails, onChangeTabItem, isActive} = pops
  const {displayText, tabId} = tabDetails
  const changeTabItem = () => {
    onChangeTabItem(tabId)
  }
  const activeTabClassName = isActive ? 'active-btn' : ''

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={changeTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
