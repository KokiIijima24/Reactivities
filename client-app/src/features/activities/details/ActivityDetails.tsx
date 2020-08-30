import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { IActivity } from '../../../app/layout/models/activity'

interface IProps {
    activity: IActivity | null;
    setEditMode: (editMode: boolean) => void;
    setSelectedActivity: (activity: IActivity | null) => void;
}

export const ActivityDetails: React.FC<IProps> = ({ activity, setEditMode,setSelectedActivity }) => {
    return (
        <Card>
            <Image src={`/assets/categoryImages/${activity?.category}.jpg`} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{activity?.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{activity?.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity?.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={2}>
                    <Button 
                    onClick={() => setEditMode(true)} 
                    basic color="blue" 
                    content="Edit" />
                    <Button
                    basic 
                    color="grey" 
                    content="Cancel"
                    onClick={() => setSelectedActivity(null)} />
                </Button.Group>
            </Card.Content>
        </Card >
    )
}