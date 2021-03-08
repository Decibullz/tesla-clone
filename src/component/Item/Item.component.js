import React from 'react'
import Button from '../Button/Button.component'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import './Item.styles.css'

const Item = ({
  title,
  desc,
  descLink,
  backgroundImg,
  leftBtnText,
  leftBtnLink,
  rightBtnText,
  rightBtnLink,
  twoButtons,
  car,
  notaCar,
  first,
}) => {
  return (
    <div
      className="item"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className="item-container">
        <div className="item-text">
          <p>{title}</p>
          <div className="item-textDesc">
            {car && (
              <p>
                {desc}{' '}
                <a href="https://www.tesla.com/support/delivery-options">
                  Touchless Delivery
                </a>
              </p>
            )}
            {notaCar && <p>{desc}</p>}
          </div>
        </div>
        <div className="item-lowerThird">
          <div className="item-buttons">
            <Button imp="primary" text={leftBtnText} link={leftBtnLink} />
            {twoButtons && (
              <Button imp="secondary" text={rightBtnText} link={rightBtnLink} />
            )}
          </div>
          {first && (
            <div className="item-expand">
              <ExpandMoreIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Item
