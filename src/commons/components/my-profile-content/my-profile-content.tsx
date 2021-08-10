import React from 'react';

// components 
import MyProfileContentItem from '../my-profile-content-item';

// styles
import './my-profile-content.css';


interface MyProfileContentProps {
  sectionName: string,
  itemArray: any[] // item description required
}


const MyProfileContent: React.FC<MyProfileContentProps> = ({ sectionName, itemArray }) => {
  return (
    <article className="MyProfileContent">
      <section>
        <h2>
          {sectionName}
        </h2>
      </section>
      <section>
        <ul>
          {itemArray.map(function (item) {
            return <MyProfileContentItem key={item.id} melody={item} />
          })}
        </ul>
      </section>
    </article>
  )
}

export default MyProfileContent;