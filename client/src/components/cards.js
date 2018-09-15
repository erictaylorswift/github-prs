import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import './styles/cards.css'

class PullCard extends Component {
    render () {
        let pulls = this.props.data;
        let card = [];
        if (pulls) {
            for (var i = 0; i < pulls.length; i++ ) {
                let title = pulls[i].title;
                let creator = pulls[i].user.login;
                let created = moment(pulls[i].created_at).endOf('day').fromNow();
                let url = pulls[i].html_url;
                let avatar = pulls[i].user.avatar_url;
                let assigned = pulls[i].assignee === null ? 'unassigned' : pulls[i].assignee.login;
                let labelOne = pulls[i].labels.length === 0 ? ' ' : pulls[i].labels[0].name;
                let labelTwo = pulls[i].labels.length === 0 ? ' ' : (pulls[i].labels[1] === undefined ? ' ' : '| ' + pulls[i].labels[1].name );
                // let labelColor = pulls[i].labels[0].color;

                if ( labelOne !== ' '){
                    let results = 
                        <div>
                            <div>
                                <img src={avatar} alt='avatar' className='avatar'/>
                            </div>
                            <Card className='pull-card'>
                                <CardContent className='header'>
                                    <Button size='large' href={url} variant='text'>
                                        <Typography gutterBottom variant='headline' component="h2" className='title-link'>
                                            {title}
                                        </Typography>
                                    </Button>
                                </CardContent>
                                <CardContent>
                                    <Typography component='p'>
                                        Created by: {creator} | Assigned to: {assigned} <br/><br/>
                                        Created on: {created}
                                    </Typography>
                                    <Typography component='p' className='label'>
                                        {labelOne} {labelTwo}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    card.push(results);
                }
                console.log(card.length);    
            }
        };

        return (
            <div className='container'>
                {card}
            </div>
        )
    }
}

export default PullCard;
