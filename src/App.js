import React from 'react'

import styles from './frame1.module.css'

const Frame1 = (props) => {
  return (
    <div>
      <div className={styles['dummy-container']}>
        <img
          src={require("./playground_assets/image125-u7u-2800h.png")}
          alt="IMAGE125"
          className={styles['image1']}
        />
      </div>
    </div>
  )
}

export default Frame1
