import React, { useState } from 'react';
import { Input, Button, List, Avatar } from 'antd';

const LiveChat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, { text: newMessage, user: 'You' }]);
            setNewMessage('');
        }
    };

    return (
        <div>
            <h2>Live Chat</h2>
            <List
                itemLayout="horizontal"
                dataSource={messages}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar>{item.user[0]}</Avatar>}
                            title={item.user}
                            description={item.text}
                        />
                    </List.Item>
                )}
            />
            <div>
                <Input
                    status='error'
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={e => setNewMessage(e.target.value)}
                />
                <Button danger type="primary" onClick={handleSendMessage}>
                    Send
                </Button>
            </div>
        </div>
    );
};

export default LiveChat;
