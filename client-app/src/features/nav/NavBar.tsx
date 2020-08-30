import React from 'react'
import { Segment, Menu, Container, Button } from 'semantic-ui-react'

interface IProps {
    openCreateForm: () => void;
}

export const NavBar: React.FC<IProps> = ({ openCreateForm }) => {
    return (
        <Segment inverted>
            <Menu fixed="top" inverted>
                <Container>
                    <Menu.Item
                        header
                        name='home'
                    >
                        <img src="/assets/logo.png" style={{ marginRight: '10px' }} alt="" />
                        Reactivities
                    </Menu.Item>
                    <Menu.Item
                        name='friends'
                    />
                    <Menu.Item
                        name='messages'
                    >
                        <Button onClick={openCreateForm} content="Create Activities" />
                    </Menu.Item>
                </Container>
            </Menu>
        </Segment>
    )
}
