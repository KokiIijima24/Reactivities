import React from 'react'
import { Segment, Menu } from 'semantic-ui-react'

export const NavBar = () => {
    return (
        <Segment inverted>
            <Menu inverted secondary>
                <Menu.Item
                    name='home'
                />
                <Menu.Item
                    name='messages'
                />
                <Menu.Item
                    name='friends'
                />
            </Menu>
        </Segment>
    )
}
