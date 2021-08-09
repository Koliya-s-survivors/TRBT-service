import React from 'react';

// CSS
import './my-profile-content.css';


export interface MyProfileContentProps {
  sectionName: string,
  itemArray: any[] // item description required
}


const MyProfileContent: React.FunctionComponent<MyProfileContentProps> = ({ sectionName, itemArray }) => {
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