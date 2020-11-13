import React from 'react';
import './Card.css';

class Card extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleClick =this.handleClick.bind(this);
        this.makeList = this.makeList.bind(this);
    }

    handleClick()
    {
        // Do Nothing if it is a card from the education page
        let title = this.props.object.title;

        if(title == "CS" || title == "EE" || title == "CpE")
            return;
        
        this.props.onClick(title);
    }

    makeList()
    {
        let skills = Object.keys(this.props.object.items);
        let length = skills.length;

        let list = [];

        for(let i = 0; i < length; i++)
            list.push(<li>{skills[i]}</li>)

        return list;
    }

    render()
    {
        return(
            <div className="card" onClick={this.handleClick}>
               
                {/* Also need to change the title to access the object */}
                <div className='cardTitle'>{this.props.object.title}</div>
                <ul>
                    {/* Creates all the list items from the passed in list */}
                    {this.makeList()}
                </ul>
            </div>
        );
    }
}

export default Card;