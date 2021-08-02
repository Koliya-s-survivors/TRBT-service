import React from 'react';

// CSS
import './my-profile-content.css';

 function MyProfileContent(props){      
    return (
      <article className="MyProfileContent">
        <section>
          <h2>
            {props.sectionName}             
            </h2>
        </section>
        <section>
            <ul>
            {props.itemArray.map(function (item) {
              return <MyProfileContentItem key={item.id} melody={item} />
            })}
            </ul>
        </section>
      </article>
    ) 
}

export default MyProfileContent;