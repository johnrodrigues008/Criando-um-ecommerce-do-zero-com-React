import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box">Reviews</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
          autem ducimus recusandae quis doloribus nam dignissimos officia qui
          quas quae eveniet illum unde expedita quidem adipisci quasi amet,
          doloremque accusantium?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
          autem ducimus recusandae quis doloribus nam dignissimos officia qui
          quas quae eveniet illum unde expedita quidem adipisci quasi amet,
          doloremque accusantium?
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox